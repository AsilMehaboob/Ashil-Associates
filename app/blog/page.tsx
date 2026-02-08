import { getBlogs, transformBlogPost } from "@/lib/strapi";
import BlogClient from "./BlogClient";
import { BLOG_CONTENT } from "@/constants";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPage() {
  const blogs = await getBlogs();

  // Transform Strapi blogs to match the expected format
  const posts = blogs.map(transformBlogPost);

  return (
    <BlogClient
      posts={posts}
      title={BLOG_CONTENT.title}
      description={BLOG_CONTENT.description}
    />
  );
}
