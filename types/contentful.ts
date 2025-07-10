export interface Lectionary {
  date: Date;
  liturgicalDay: string;
  firstReading: string;
  secondReading: string;
  gospel: string;
  liturgicalColor: string;
}

// Contentful Rich Text types
export interface RichTextNode {
  nodeType: string;
  data: Record<string, unknown>;
  content: RichTextNode[];
  value?: string;
  marks?: Array<{ type: string }>;
}

export interface RichTextDocument {
  nodeType: "document";
  data: Record<string, unknown>;
  content: RichTextNode[];
}

export interface Sermon {
  date: Date;
  sermon: RichTextDocument;
}

export interface Newsletter {
  date: Date;
  newsletter: RichTextDocument;
}
