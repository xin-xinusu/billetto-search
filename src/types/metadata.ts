export interface Metadata {
  title: string;
  description: string;
  openGraph?: {
    title?: string;
    description?: string;
    images?: { url: string; width: number; height: number; alt: string }[];
    siteName?: string;
  };
  twitter?: {
    card: string;
    title?: string;
    description?: string;
    images?: string[];
  };
}
