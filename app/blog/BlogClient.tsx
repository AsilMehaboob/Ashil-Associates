"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, ArrowRight, Search, X } from "lucide-react";

// Check if image is from localhost (needs unoptimized for dev)
const isLocalImage = (url: string | null) =>
  url?.includes("localhost") || url?.includes("127.0.0.1");

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  featuredImage: string | null;
}

interface BlogClientProps {
  posts: BlogPost[];
  sectionHeader: string;
  title: string;
  description: string;
}

export default function BlogClient({
  posts,
  sectionHeader,
  title,
  description,
}: BlogClientProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  // Filter posts based on search query
  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) {
      return posts;
    }
    const query = searchQuery.toLowerCase().trim();
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query) ||
        post.author.toLowerCase().includes(query)
    );
  }, [searchQuery, posts]);

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

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
              {sectionHeader}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-black leading-tight mb-6">
              {title}
            </h1>
            <p className="text-gray-600 font-sans text-base leading-relaxed max-w-2xl">
              {description}
            </p>

            {/* Search Bar */}
            <div className="relative mt-8 max-w-md">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full pl-12 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-sm font-sans text-sm text-black placeholder:text-gray-400 focus:outline-none focus:border-gray-400 focus:ring-0 transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Clear search"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
              {searchQuery && (
                <p className="mt-2 text-sm text-gray-500">
                  {filteredPosts.length}{" "}
                  {filteredPosts.length === 1 ? "result" : "results"} found
                </p>
              )}
            </div>
          </motion.div>

          {/* No Results State */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center py-16"
            >
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-serif text-black mb-2">
                No articles found
              </h3>
              <p className="text-gray-500 font-sans text-sm mb-6">
                No articles match your search for &quot;{searchQuery}&quot;
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-xs font-bold tracking-[0.2em] hover:bg-gray-800 transition-colors"
              >
                CLEAR SEARCH
              </button>
            </motion.div>
          )}

          {/* Featured Post */}
          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
              key={featuredPost.slug}
            >
              <Link href={`/blog/${featuredPost.slug}`} className="group block">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-50 rounded-sm overflow-hidden">
                  <div className="relative aspect-[16/10] lg:aspect-auto bg-gray-200">
                    {featuredPost.featuredImage ? (
                      <Image
                        src={featuredPost.featuredImage}
                        alt={featuredPost.title}
                        fill
                        className="object-cover"
                        unoptimized={isLocalImage(featuredPost.featuredImage)}
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-midnight-800)] to-[var(--color-midnight-950)] flex items-center justify-center">
                        <span className="text-white/20 font-serif text-6xl">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <span className="text-xs tracking-[0.2em] text-gray-500 font-sans mb-4 uppercase">
                      {featuredPost.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-serif text-black mb-4 group-hover:text-gray-600 transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 font-sans text-base leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-sans mb-6">
                      <span className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        {featuredPost.author}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
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
          )}

          {/* Blog Grid */}
          {remainingPosts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {remainingPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block h-full"
                  >
                    <div className="bg-gray-50 rounded-sm overflow-hidden h-full flex flex-col">
                      <div className="relative aspect-[16/10] bg-gray-200">
                        {post.featuredImage ? (
                          <Image
                            src={post.featuredImage}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            unoptimized={isLocalImage(post.featuredImage)}
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-midnight-700)] to-[var(--color-midnight-900)] flex items-center justify-center group-hover:from-[var(--color-midnight-600)] group-hover:to-[var(--color-midnight-800)] transition-all duration-300">
                            <span className="text-white/10 font-serif text-4xl">
                              {index + 2}
                            </span>
                          </div>
                        )}
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
          )}

          {/* Empty State when no posts at all */}
          {posts.length === 0 && !searchQuery && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center py-16"
            >
              <h3 className="text-xl font-serif text-black mb-2">
                No articles yet
              </h3>
              <p className="text-gray-500 font-sans text-sm">
                Check back soon for new content.
              </p>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}
