import { getStudentArticles, transformStudentArticle } from "@/lib/strapi";
import StudentsCornerClient from "./StudentsCornerClient";
import { STUDENTS_CORNER_CONTENT } from "@/constants";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function StudentsCornerPage() {
  const articles = await getStudentArticles();

  // Transform Strapi articles to match the expected format
  const posts = articles.map(transformStudentArticle);

  return (
    <StudentsCornerClient
      posts={posts}
      sectionHeader={STUDENTS_CORNER_CONTENT.sectionHeader}
      title={STUDENTS_CORNER_CONTENT.title}
      description={STUDENTS_CORNER_CONTENT.description}
    />
  );
}
