"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
      <div className="mx-auto px-20 h-28 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative w-64 h-30">
          <Image
            src="/logo.png"
            alt="Ashil & Associates"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Navigation Links and Button */}
        <div className="flex items-center gap-10">
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-bold tracking-[0.2em] text-[#1b2228] hover:text-gray-600 transition-colors font-sans"
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="text-sm font-bold tracking-[0.2em] text-[#5b6168] hover:text-[#1b2228] transition-colors font-sans"
            >
              ABOUT
            </Link>
            <Link
              href="/services"
              className="text-sm font-bold tracking-[0.2em] text-[#5b6168] hover:text-[#1b2228] transition-colors font-sans"
            >
              SERVICES
            </Link>
            <Link
              href="/contact"
              className="text-sm font-bold tracking-[0.2em] text-[#5b6168] hover:text-[#1b2228] transition-colors font-sans"
            >
              CONTACT
            </Link>
          </div>

          <Link
            href="/contact"
            className="flex items-center gap-2 bg-[#1b2228] text-white px-8 py-5 text-sm font-bold tracking-[0.15em] hover:bg-black transition-colors font-sans"
          >
            GET IN TOUCH
            <Plus className="w-5 h-5" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
