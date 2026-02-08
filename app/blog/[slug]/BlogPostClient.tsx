"use client";

import { JSX } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from "lucide-react";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import { STRAPI_PUBLIC_URL } from "@/lib/strapi";

// Check if image is from localhost (needs unoptimized for dev)
const isLocalImage = (url: string | null | undefined) =>
  url?.includes("localhost") || url?.includes("127.0.0.1");

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  content: BlocksContent;
  featuredImage: string | null;
}

interface BlogPostClientProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export default function BlogPostClient({
  post,
  relatedPosts,
}: BlogPostClientProps) {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  // Check if content exists and is valid
  const hasValidContent =
    post.content && Array.isArray(post.content) && post.content.length > 0;

  return (
    <div className="min-h-screen bg-white">
      <main className="pt-40 pb-24 px-6 sm:px-8 lg:px-12">
        <article className="max-w-4xl mx-auto">
          {/* Back Link */}
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0 }}
            className="mb-8"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-gray-500 hover:text-gray-700 transition-all bg-black/4 px-3 py-2 rounded-base justify-center items-center"
            >
              <ArrowLeft className="w-4 h-4" />
              BACK TO BLOG
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={{ ...fadeIn.transition, delay: 0.1 }}
            className="mb-12 border-b border-gray-100 pb-12"
          >
            <span className="text-xs tracking-[0.2em] text-gray-500 font-sans mb-4 uppercase block">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-black leading-tight mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-sans">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="relative aspect-[21/9] rounded-sm overflow-hidden">
              {post.featuredImage ? (
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                  unoptimized={isLocalImage(post.featuredImage)}
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-midnight-800)] to-[var(--color-midnight-950)] flex items-center justify-center">
                  <span className="text-white/20 font-serif text-4xl md:text-6xl">
                    {post.category}
                  </span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-none"
          >
            {hasValidContent ? (
              <BlocksRenderer
                content={post.content}
                blocks={{
                  paragraph: ({ children }) => (
                    <p className="text-gray-600 font-sans text-base leading-relaxed mb-6">
                      {children}
                    </p>
                  ),
                  heading: ({ children, level }) => {
                    const Tag = `h${level}` as keyof JSX.IntrinsicElements;
                    const sizes: Record<number, string> = {
                      1: "text-3xl md:text-4xl",
                      2: "text-2xl md:text-3xl",
                      3: "text-xl md:text-2xl",
                      4: "text-lg md:text-xl",
                      5: "text-base md:text-lg",
                      6: "text-sm md:text-base",
                    };
                    return (
                      <Tag
                        className={`${sizes[level] || sizes[2]} font-serif text-black mt-10 mb-4`}
                      >
                        {children}
                      </Tag>
                    );
                  },
                  list: ({ children, format }) => {
                    if (format === "ordered") {
                      return (
                        <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-600 font-sans">
                          {children}
                        </ol>
                      );
                    }
                    return <ul className="space-y-2 mb-6">{children}</ul>;
                  },
                  "list-item": ({ children }) => (
                    <li className="text-gray-600 font-sans text-base flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0" />
                      <span>{children}</span>
                    </li>
                  ),
                  quote: ({ children }) => (
                    <blockquote className="border-l-4 border-black pl-6 py-2 my-6 italic text-gray-700 font-serif text-lg">
                      {children}
                    </blockquote>
                  ),
                  code: ({ children }) => (
                    <pre className="bg-gray-900 text-gray-100 p-6 rounded-sm overflow-x-auto mb-6 font-mono text-sm">
                      <code>{children}</code>
                    </pre>
                  ),
                  image: ({ image }) => {
                    const imgUrl = image.url.startsWith("http")
                      ? image.url
                      : `${STRAPI_PUBLIC_URL}${image.url}`;
                    return (
                      <figure className="my-8">
                        <div className="relative aspect-video rounded-sm overflow-hidden">
                          <Image
                            src={imgUrl}
                            alt={image.alternativeText || ""}
                            fill
                            className="object-cover"
                            unoptimized={isLocalImage(imgUrl)}
                          />
                        </div>
                        {image.caption && (
                          <figcaption className="text-center text-sm text-gray-500 mt-3 font-sans">
                            {image.caption}
                          </figcaption>
                        )}
                      </figure>
                    );
                  },
                  link: ({ children, url }) => (
                    <a
                      href={url}
                      className="text-black underline hover:no-underline"
                      target={url.startsWith("http") ? "_blank" : undefined}
                      rel={
                        url.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {children}
                    </a>
                  ),
                }}
                modifiers={{
                  bold: ({ children }) => (
                    <strong className="font-bold text-black">{children}</strong>
                  ),
                  italic: ({ children }) => (
                    <em className="italic">{children}</em>
                  ),
                  underline: ({ children }) => (
                    <span className="underline">{children}</span>
                  ),
                  strikethrough: ({ children }) => (
                    <span className="line-through">{children}</span>
                  ),
                  code: ({ children }) => (
                    <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">
                      {children}
                    </code>
                  ),
                }}
              />
            ) : (
              <p className="text-gray-500 font-sans text-base italic">
                No content available.
              </p>
            )}
          </motion.div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-24"
            >
              <h2 className="text-2xl md:text-3xl font-serif text-black mb-8">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group block"
                  >
                    <div className="bg-gray-50 rounded-sm overflow-hidden h-full">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        {relatedPost.featuredImage ? (
                          <Image
                            src={relatedPost.featuredImage}
                            alt={relatedPost.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            unoptimized={isLocalImage(
                              relatedPost.featuredImage,
                            )}
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-midnight-700)] to-[var(--color-midnight-900)] flex items-center justify-center group-hover:from-[var(--color-midnight-600)] group-hover:to-[var(--color-midnight-800)] transition-all duration-300">
                            <span className="text-white/10 font-serif text-2xl">
                              {relatedPost.category}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="p-5">
                        <span className="text-xs tracking-[0.15em] text-gray-500 font-sans mb-2 uppercase block">
                          {relatedPost.category}
                        </span>
                        <h3 className="text-base font-serif text-black group-hover:text-gray-600 transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center border-t border-gray-100 pt-16"
          >
            <h2 className="text-2xl md:text-3xl font-serif text-black mb-4">
              Need Expert Guidance?
            </h2>
            <p className="text-gray-600 font-sans text-base leading-relaxed mb-8 max-w-xl mx-auto">
              Our team of experienced professionals is ready to help with your
              financial and compliance needs.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[var(--color-midnight-950)] text-white px-8 py-4 text-xs font-bold tracking-[0.2em] hover:bg-[var(--color-midnight-800)] transition-colors font-sans uppercase"
            >
              SCHEDULE A CONSULTATION
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </article>
      </main>
    </div>
  );
}
