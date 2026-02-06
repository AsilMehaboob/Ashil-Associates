"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from "lucide-react";
import { BLOG_CONTENT } from "@/constants";
import { useParams } from "next/navigation";

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  
  const post = BLOG_CONTENT.posts.find((p) => p.slug === slug);
  
  // Get related posts (excluding current post)
  const relatedPosts = BLOG_CONTENT.posts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <main className="pt-40 pb-24 px-6 sm:px-8 lg:px-12">
          <article className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-serif text-black mb-6">Post Not Found</h1>
            <p className="text-gray-600 font-sans mb-8">
              The blog post you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-black hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              BACK TO BLOG
            </Link>
          </article>
        </main>
      </div>
    );
  }

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
              className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-gray-500 hover:text-black hover:gap-3 transition-all"
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

          {/* Featured Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="relative aspect-[21/9] bg-gradient-to-br from-[var(--color-midnight-800)] to-[var(--color-midnight-950)] rounded-sm flex items-center justify-center">
              <span className="text-white/20 font-serif text-4xl md:text-6xl">{post.category}</span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose prose-lg max-w-none"
          >
            {post.content.map((block, index) => {
              if (block.type === "paragraph") {
                return (
                  <p
                    key={index}
                    className="text-gray-600 font-sans leading-relaxed text-base mb-6"
                  >
                    {block.text}
                  </p>
                );
              }
              if (block.type === "heading") {
                return (
                  <h2
                    key={index}
                    className="text-2xl md:text-3xl font-serif text-black mt-12 mb-6"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "list" && block.items) {
                return (
                  <ul
                    key={index}
                    className="bg-gray-50 p-6 md:p-8 rounded-sm mb-6"
                  >
                    {block.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-gray-600 font-sans text-base mb-3 last:mb-0 flex items-start gap-3"
                      >
                        <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </motion.div>

          {/* Author Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 bg-[#F5F5F0] p-8 rounded-sm"
          >
            <p className="text-xs tracking-[0.2em] text-gray-500 font-sans mb-3 uppercase">
              Written by
            </p>
            <h3 className="text-xl font-serif text-black mb-2">{post.author}</h3>
            <p className="text-gray-600 font-sans text-sm">
              Expert in audit, taxation, and financial advisory services at Ashil & Associates.
            </p>
          </motion.div>

          {/* Related Posts */}
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
                    <div className="relative aspect-[16/10] bg-gradient-to-br from-[var(--color-midnight-700)] to-[var(--color-midnight-900)] flex items-center justify-center group-hover:from-[var(--color-midnight-600)] group-hover:to-[var(--color-midnight-800)] transition-all duration-300">
                      <span className="text-white/10 font-serif text-2xl">{relatedPost.category}</span>
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
              Our team of experienced professionals is ready to help with your financial and compliance needs.
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
