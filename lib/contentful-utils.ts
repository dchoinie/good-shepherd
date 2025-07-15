/* eslint-disable @typescript-eslint/no-explicit-any */
import { contentfulHelpers, ContentfulEntry } from "./contentful";
import { Sermon, Newsletter, Lectionary } from "../types/contentful";

// Utility functions for fetching content
export const contentfulUtils = {
  // Generic function to fetch any content type
  async getContentByType<T = any>(
    contentType: string,
    options?: {
      limit?: number;
      skip?: number;
      order?: string;
      filters?: Record<string, any>;
    }
  ): Promise<ContentfulEntry<T>[]> {
    const queryOptions: any = {
      limit: options?.limit,
      skip: options?.skip,
      order: options?.order,
      ...options?.filters,
    };

    // Remove undefined values
    Object.keys(queryOptions).forEach(
      (key) => queryOptions[key] === undefined && delete queryOptions[key]
    );

    return contentfulHelpers.getEntries<T>(contentType, queryOptions);
  },

  // Get asset URL with proper formatting
  getImageUrl(
    asset: any,
    options?: {
      width?: number;
      height?: number;
      quality?: number;
      format?: "webp" | "jpg" | "png";
    }
  ): string {
    if (!asset || !asset.fields || !asset.fields.file) {
      return "";
    }
    return contentfulHelpers.getAssetUrl(asset, options);
  },

  // Format date from Contentful
  formatDate(dateString: string): string {
    // Always treat as UTC, extract only the date part
    const d = new Date(dateString);
    const year = d.getUTCFullYear();
    const month = d.getUTCMonth(); // 0-based
    const day = d.getUTCDate();
    // Format as desired, e.g., July 13, 2024
    return new Date(Date.UTC(year, month, day)).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC", // force UTC
    });
  },

  // Format date and time
  formatDateTime(dateString: string): string {
    return new Date(dateString).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  },

  // Fetch sermons with pagination
  async getSermons(
    limit: number = 10,
    skip: number = 0
  ): Promise<ContentfulEntry<Sermon>[]> {
    return contentfulHelpers.getEntries<Sermon>("sermon", {
      order: "-fields.date",
      limit,
      skip,
    });
  },

  // Fetch all sermons (for backward compatibility)
  async getAllSermons(): Promise<ContentfulEntry<Sermon>[]> {
    return contentfulHelpers.getEntries<Sermon>("sermon", {
      order: "-fields.date",
    });
  },

  // Fetch a single sermon by date
  async getSermonByDate(date: string): Promise<ContentfulEntry<Sermon> | null> {
    try {
      const entries = await contentfulHelpers.getEntries<Sermon>("sermon", {
        "fields.date": date,
        limit: 1,
      });
      return entries[0] || null;
    } catch (error) {
      console.error("Error fetching sermon by date:", error);
      return null;
    }
  },

  // Fetch newsletters with pagination
  async getNewsletters(
    limit: number = 10,
    skip: number = 0
  ): Promise<ContentfulEntry<Newsletter>[]> {
    return contentfulHelpers.getEntries<Newsletter>("newsletter", {
      order: "-fields.date",
      limit,
      skip,
    });
  },

  // Fetch all newsletters (for backward compatibility)
  async getAllNewsletters(): Promise<ContentfulEntry<Newsletter>[]> {
    return contentfulHelpers.getEntries<Newsletter>("newsletter", {
      order: "-fields.date",
    });
  },

  // Fetch a single newsletter by date
  async getNewsletterByDate(
    date: string
  ): Promise<ContentfulEntry<Newsletter> | null> {
    try {
      const entries = await contentfulHelpers.getEntries<Newsletter>(
        "newsletter",
        {
          "fields.date": date,
          limit: 1,
        }
      );
      return entries[0] || null;
    } catch (error) {
      console.error("Error fetching newsletter by date:", error);
      return null;
    }
  },

  // Fetch lectionary entries with pagination
  async getLectionary(
    limit: number = 10,
    skip: number = 0
  ): Promise<ContentfulEntry<Lectionary>[]> {
    return contentfulHelpers.getEntries<Lectionary>("lectionary", {
      order: "fields.date",
      limit,
      skip,
    });
  },

  // Fetch all lectionary entries
  async getAllLectionary(): Promise<ContentfulEntry<Lectionary>[]> {
    return contentfulHelpers.getEntries<Lectionary>("lectionary", {
      order: "fields.date",
    });
  },
};

export default contentfulUtils;
