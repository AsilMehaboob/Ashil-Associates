// Server-side URL (for API calls)
const STRAPI_URL = process.env.STRAPI_BASE_URL || "http://localhost:1337";

// Client-side URL (for images in client components)
// Add NEXT_PUBLIC_STRAPI_URL to your .env.local for client-side image rendering
export const STRAPI_PUBLIC_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

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
  featuredImage?: {
    url: string;
    alternativeText: string | null;
  } | null;
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

// Helper to get full image URL
export function getStrapiImageUrl(url: string | undefined): string | null {
  if (!url) return null;
  if (url.startsWith("http")) return url;
  return `${STRAPI_URL}${url}`;
}

// Transform Strapi blog to match existing blog structure
export function transformBlogPost(blog: StrapiBlog) {
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
    featuredImage: getStrapiImageUrl(blog.featuredImage?.url),
  };
}
