"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { BLOG_CONTENT } from "@/constants";

export default function Blog() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="pt-40 pb-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={fadeIn.transition}
            className="mb-16 border-b border-gray-100 pb-16 max-w-4xl"
          >
            <p className="text-xs tracking-[0.2em] text-gray-500 font-sans mb-4 uppercase">
              {BLOG_CONTENT.sectionHeader}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-black leading-tight mb-6">
              {BLOG_CONTENT.title}
            </h1>
            <p className="text-gray-600 font-sans text-base leading-relaxed max-w-2xl">
              {BLOG_CONTENT.description}
            </p>
          </motion.div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <Link href={`/blog/${BLOG_CONTENT.posts[0].slug}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-50 rounded-sm overflow-hidden">
                <div className="relative aspect-[16/10] lg:aspect-auto bg-gray-200">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-midnight-800)] to-[var(--color-midnight-950)] flex items-center justify-center">
                    <span className="text-white/20 font-serif text-6xl">Featured</span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="text-xs tracking-[0.2em] text-gray-500 font-sans mb-4 uppercase">
                    {BLOG_CONTENT.posts[0].category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-serif text-black mb-4 group-hover:text-gray-600 transition-colors">
                    {BLOG_CONTENT.posts[0].title}
                  </h2>
                  <p className="text-gray-600 font-sans text-base leading-relaxed mb-6">
                    {BLOG_CONTENT.posts[0].excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-sans mb-6">
                    <span className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {BLOG_CONTENT.posts[0].author}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {BLOG_CONTENT.posts[0].date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {BLOG_CONTENT.posts[0].readTime}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-black group-hover:gap-3 transition-all">
                    READ ARTICLE
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_CONTENT.posts.slice(1).map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              >
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <div className="bg-gray-50 rounded-sm overflow-hidden h-full flex flex-col">
                    <div className="relative aspect-[16/10] bg-gray-200">
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-midnight-700)] to-[var(--color-midnight-900)] flex items-center justify-center group-hover:from-[var(--color-midnight-600)] group-hover:to-[var(--color-midnight-800)] transition-all duration-300">
                        <span className="text-white/10 font-serif text-4xl">{index + 2}</span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <span className="text-xs tracking-[0.2em] text-gray-500 font-sans mb-3 uppercase">
                        {post.category}
                      </span>
                      <h3 className="text-lg font-serif text-black mb-3 group-hover:text-gray-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 font-sans text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500 font-sans pt-4 border-t border-gray-100">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-24 bg-[#F5F5F0] p-8 sm:p-12 rounded-sm text-center"
          >
            <h2 className="text-2xl md:text-3xl font-serif text-black mb-4">
              Stay Updated with Our Insights
            </h2>
            <p className="text-gray-600 font-sans text-base leading-relaxed mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest updates on taxation, compliance, and financial advisory.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-[var(--color-midnight-950)] text-white px-8 py-4 text-xs font-bold tracking-[0.2em] hover:bg-[var(--color-midnight-800)] transition-colors font-sans uppercase"
            >
              GET IN TOUCH
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
