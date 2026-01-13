"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";

const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
  e.preventDefault();
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
      <div className="mx-auto px-20 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative w-72 h-20">
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
            <a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, 'home')}
              className="text-sm font-bold tracking-[0.2em] text-[#1b2228] hover:text-gray-600 transition-colors font-sans cursor-pointer"
            >
              HOME
            </a>
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, 'about')}
              className="text-sm font-bold tracking-[0.2em] text-[#5b6168] hover:text-[#1b2228] transition-colors font-sans cursor-pointer"
            >
              ABOUT
            </a>
            <a
              href="#services"
              onClick={(e) => handleSmoothScroll(e, 'services')}
              className="text-sm font-bold tracking-[0.2em] text-[#5b6168] hover:text-[#1b2228] transition-colors font-sans cursor-pointer"
            >
              SERVICES
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className="text-sm font-bold tracking-[0.2em] text-[#5b6168] hover:text-[#1b2228] transition-colors font-sans cursor-pointer"
            >
              CONTACT
            </a>
          </div>

          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, 'contact')}
            className="flex items-center gap-2 bg-[#1b2228] text-white px-8 py-3 text-sm font-bold tracking-[0.15em] hover:bg-black transition-colors font-sans cursor-pointer"
          >
            GET IN TOUCH
            <Plus className="w-5 h-5" strokeWidth={2} />
          </a>
        </div>
      </div>
    </nav>
  );
}
