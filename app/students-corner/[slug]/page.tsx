import { getStudentArticleBySlug, getStudentArticles, generateSlug, transformStudentArticle } from "@/lib/strapi";
import { notFound } from "next/navigation";
import StudentArticleClient from "./StudentArticleClient";
import { Metadata } from "next";

export const revalidate = 60;

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static paths for all student articles
export async function generateStaticParams() {
  const articles = await getStudentArticles();
  return articles.map((article) => ({
    slug: generateSlug(article.title),
  }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getStudentArticleBySlug(slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${article.title} | Students Corner - Ashil & Associates`,
    description: article.excerpt,
  };
}

export default async function StudentArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getStudentArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Get all articles for related posts
  const allArticles = await getStudentArticles();
  const relatedArticles = allArticles
    .filter((a) => generateSlug(a.title) !== slug)
    .slice(0, 3);

  // Transform to match expected format
  const post = transformStudentArticle(article);
  const relatedPosts = relatedArticles.map(transformStudentArticle);

  return <StudentArticleClient post={post} relatedPosts={relatedPosts} />;
}
