"use client";

import Link from "next/link";
import { MoveLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[var(--background)] px-6 relative overflow-hidden">
      <div className="max-w-3xl w-full text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-[120px] md:text-[200px] leading-none font-serif text-[var(--color-midnight-900)] opacity-10 select-none">
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="-mt-12 md:-mt-20 relative"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-[var(--color-midnight-900)] mb-6">
            Page Not Found
          </h2>
          <p className="text-[var(--color-midnight-600)] text-md md:text-lg font-sans max-w-lg mx-auto mb-10 leading-relaxed">
            The page you are looking for doesn't exist or has been moved. Use
            the button below to return to the homepage.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[var(--color-midnight-900)] text-white px-8 py-4 text-xs font-bold tracking-[0.2em] hover:bg-[var(--color-midnight-800)] transition-colors uppercase font-sans shadow-lg hover:shadow-xl"
          >
            <MoveLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
