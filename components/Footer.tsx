"use client";

import { FOOTER_CONTENT } from "@/constants";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#090f15] text-white pt-24 pb-12 px-6 border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          {/* Left Column: Logo & Desc */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="mb-6">
              <Image
                src="/logo.svg"
                alt="Ashil & Associates"
                width={160}
                height={100}
                className="h-auto max-w-[240px] object-contain brightness-0 invert"
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed font-sans max-w-md mb-10">
              {FOOTER_CONTENT.description}
            </p>
          </div>

          {/* Right Columns: Links */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row gap-12 sm:gap-24 justify-center lg:justify-end items-center lg:items-start text-center lg:text-left lg:mr-4">
            {FOOTER_CONTENT.columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-white mb-8 font-sans">
                  {col.title}
                </h4>
                <ul className="space-y-4">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors duration-300 font-sans block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 font-sans">
            {FOOTER_CONTENT.copyright}
          </p>
          <div className="flex gap-8">
            {FOOTER_CONTENT.bottomLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-gray-500 hover:text-white transition-colors duration-300 font-sans"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
