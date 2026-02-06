// Server-side URL (for API calls)
const STRAPI_URL = process.env.STRAPI_BASE_URL || "http://localhost:1337";

// Client-side URL (for images in client components)
// Add NEXT_PUBLIC_STRAPI_URL to your .env.local for client-side image rendering
export const STRAPI_PUBLIC_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

// Strapi v5 Media type (can have multiple formats)
interface StrapiMedia {
  id?: number;
  documentId?: string;
  name?: string;
  alternativeText?: string | null;
  caption?: string | null;
  url?: string;
  formats?: {
    thumbnail?: { url: string };
    small?: { url: string };
    medium?: { url: string };
    large?: { url: string };
  };
  // Strapi v4 nested structure
  data?: {
    id?: number;
    attributes?: {
      url?: string;
      alternativeText?: string | null;
      formats?: {
        thumbnail?: { url: string };
        small?: { url: string };
        medium?: { url: string };
        large?: { url: string };
      };
    };
  };
}

// Types for Strapi Blog
export interface StrapiBlog {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  content: any; // Rich text blocks
  category: string;
  author: string;
  readTime: string | null;
  publishedDate: string | null;
  featuredImage?: StrapiMedia | null;
  createdAt: string;
  updatedAt: string;
}

interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Fetch all blog posts
export async function getBlogs(): Promise<StrapiBlog[]> {
  try {
    const res = await fetch(
      `${STRAPI_URL}/api/blogs?populate=*&sort=publishedDate:desc`,
      {
        next: { revalidate: 60 }, // Revalidate every 60 seconds
      }
    );

    if (!res.ok) {
      console.error("Failed to fetch blogs:", res.status);
      return [];
    }

    const response: StrapiResponse<StrapiBlog[]> = await res.json();
    return response.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

// Fetch single blog post by slug
export async function getBlogBySlug(slug: string): Promise<StrapiBlog | null> {
  try {
    const res = await fetch(
      `${STRAPI_URL}/api/blogs?filters[slug][$eq]=${slug}&populate=*`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      console.error("Failed to fetch blog:", res.status);
      return null;
    }

    const response: StrapiResponse<StrapiBlog[]> = await res.json();
    return response.data[0] || null;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}

// Helper to extract image URL from Strapi media object
export function extractImageUrl(media: StrapiMedia | null | undefined): string | null {
  if (!media) return null;

  // Strapi v5 direct format: { url: "/uploads/..." }
  if (media.url) {
    return media.url.startsWith("http") ? media.url : `${STRAPI_URL}${media.url}`;
  }

  // Strapi v4 nested format: { data: { attributes: { url: "/uploads/..." } } }
  if (media.data?.attributes?.url) {
    const url = media.data.attributes.url;
    return url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
  }

  // Try formats (prefer larger sizes)
  const formats = media.formats || media.data?.attributes?.formats;
  if (formats) {
    const url = formats.large?.url || formats.medium?.url || formats.small?.url || formats.thumbnail?.url;
    if (url) {
      return url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
    }
  }

  return null;
}

// Helper to get full image URL (simple string version)
export function getStrapiImageUrl(url: string | undefined): string | null {
  if (!url) return null;
  if (url.startsWith("http")) return url;
  return `${STRAPI_URL}${url}`;
}

// Transform Strapi blog to match existing blog structure
export function transformBlogPost(blog: StrapiBlog) {
  // Debug: log the featuredImage structure
  if (process.env.NODE_ENV === "development" && blog.featuredImage) {
    console.log("Featured image structure:", JSON.stringify(blog.featuredImage, null, 2));
  }

  return {
    slug: blog.slug,
    title: blog.title,
    excerpt: blog.excerpt,
    category: blog.category,
    author: blog.author,
    date: blog.publishedDate
      ? new Date(blog.publishedDate).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : new Date(blog.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
    readTime: blog.readTime || "5 min read",
    content: blog.content,
    featuredImage: extractImageUrl(blog.featuredImage),
  };
}

// Types for Strapi Student Article (same structure as Blog)
export interface StrapiStudentArticle {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  content: any; // Rich text blocks
  category: string;
  author: string;
  readTime: string | null;
  publishedDate: string | null;
  featuredImage?: StrapiMedia | null;
  createdAt: string;
  updatedAt: string;
}

// Fetch all student articles from "Students Corner" collection
export async function getStudentArticles(): Promise<StrapiStudentArticle[]> {
  try {
    const res = await fetch(
      `${STRAPI_URL}/api/students-corners?populate=*&sort=publishedDate:desc`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      console.error("Failed to fetch student articles:", res.status);
      return [];
    }

    const response: StrapiResponse<StrapiStudentArticle[]> = await res.json();
    return response.data;
  } catch (error) {
    console.error("Error fetching student articles:", error);
    return [];
  }
}

// Fetch single student article by slug from "Students Corner" collection
export async function getStudentArticleBySlug(slug: string): Promise<StrapiStudentArticle | null> {
  try {
    const res = await fetch(
      `${STRAPI_URL}/api/students-corners?filters[slug][$eq]=${slug}&populate=*`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      console.error("Failed to fetch student article:", res.status);
      return null;
    }

    const response: StrapiResponse<StrapiStudentArticle[]> = await res.json();
    return response.data[0] || null;
  } catch (error) {
    console.error("Error fetching student article:", error);
    return null;
  }
}

// Transform Strapi student article to match expected format
export function transformStudentArticle(article: StrapiStudentArticle) {
  return {
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    category: article.category,
    author: article.author,
    date: article.publishedDate
      ? new Date(article.publishedDate).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : new Date(article.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
    readTime: article.readTime || "5 min read",
    content: article.content,
    featuredImage: extractImageUrl(article.featuredImage),
  };
}
