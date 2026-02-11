import { getBlogBySlug, getBlogs, generateSlug, transformBlogPost } from "@/lib/strapi";
import { notFound } from "next/navigation";
import BlogPostClient from "./BlogPostClient";
import { Metadata } from "next";

export const revalidate = 60;

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((blog) => ({
    slug: generateSlug(blog.title),
  }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${blog.title} | Ashil & Associates Blog`,
    description: blog.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  // Get all blogs for related posts
  const allBlogs = await getBlogs();
  const relatedBlogs = allBlogs
    .filter((b) => generateSlug(b.title) !== slug)
    .slice(0, 3);

  // Transform to match expected format
  const post = transformBlogPost(blog);
  const relatedPosts = relatedBlogs.map(transformBlogPost);

  return <BlogPostClient post={post} relatedPosts={relatedPosts} />;
}
