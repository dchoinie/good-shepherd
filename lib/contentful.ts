import { createClient } from "contentful";

// Environment variables
const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENT_DELIVERY_API_KEY;

// Validate environment variables
if (!spaceId) {
  throw new Error(
    "CONTENTFUL_SPACE_ID is not defined in environment variables"
  );
}

if (!accessToken) {
  throw new Error(
    "CONTENT_DELIVERY_API_KEY is not defined in environment variables"
  );
}

// Create Contentful client
export const contentfulClient = createClient({
  space: spaceId,
  accessToken: accessToken,
});

// Type definitions for common Contentful fields
export interface ContentfulAsset {
  sys: {
    id: string;
    type: string;
  };
  fields: {
    title: string;
    description?: string;
    file: {
      url: string;
      details: {
        size: number;
        image?: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };
  };
}

export interface ContentfulEntry<T = Record<string, unknown>> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
  };
  fields: T;
}

// Helper functions for common operations
export const contentfulHelpers = {
  // Get all entries of a specific content type
  async getEntries<T = Record<string, unknown>>(
    contentType: string,
    options?: {
      limit?: number;
      skip?: number;
      order?: string;
      include?: number;
      [key: string]: unknown;
    }
  ): Promise<ContentfulEntry<T>[]> {
    const query: Record<string, unknown> = {
      content_type: contentType,
      ...options,
    };

    const response = await contentfulClient.getEntries(query);
    return response.items as unknown as ContentfulEntry<T>[];
  },

  // Get a single entry by ID
  async getEntry<T = Record<string, unknown>>(
    entryId: string
  ): Promise<ContentfulEntry<T>> {
    const response = await contentfulClient.getEntry(entryId);
    return response as unknown as ContentfulEntry<T>;
  },

  // Get asset by ID
  async getAsset(assetId: string): Promise<ContentfulAsset> {
    const response = await contentfulClient.getAsset(assetId);
    return response as ContentfulAsset;
  },

  // Get asset URL with optional transformations
  getAssetUrl(
    asset: ContentfulAsset,
    options?: {
      width?: number;
      height?: number;
      quality?: number;
      format?: "webp" | "jpg" | "png";
    }
  ): string {
    let url = `https:${asset.fields.file.url}`;

    if (options) {
      const params = new URLSearchParams();
      if (options.width) params.append("w", options.width.toString());
      if (options.height) params.append("h", options.height.toString());
      if (options.quality) params.append("q", options.quality.toString());
      if (options.format) params.append("fm", options.format);

      if (params.toString()) {
        url += `?${params.toString()}`;
      }
    }

    return url;
  },

  // Resolve rich text content (if you have rich text fields)
  async resolveRichText(
    richTextField: Record<string, unknown>
  ): Promise<string> {
    // This is a basic implementation - you might want to use a library like @contentful/rich-text-html-renderer
    // for more complex rich text rendering
    if (!richTextField || !richTextField.content) return "";

    return (richTextField.content as Array<Record<string, unknown>>)
      .map((node: Record<string, unknown>) => {
        if (node.nodeType === "paragraph") {
          return (
            (node.content as Array<Record<string, unknown>>)
              ?.map(
                (textNode: Record<string, unknown>) => textNode.value as string
              )
              .join("") || ""
          );
        }
        return "";
      })
      .join("\n");
  },
};

export default contentfulClient;
