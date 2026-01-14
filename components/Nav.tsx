"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus, Menu, X } from "lucide-react";
import { useState } from "react";

const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
  e.preventDefault();
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
      <div className="mx-auto px-6 md:px-20 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative w-36 md:w-52 h-12 md:h-16" onClick={closeMobileMenu}>
          <Image
            src="/logo-transparent.png"
            alt="Ashil & Associates"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation Links and Button */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
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

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-[#1b2228]"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-8 h-8" />
          ) : (
            <Menu className="w-8 h-8" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 lg:hidden transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "80px" }} // Below navbar
      >
        <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] space-y-8 p-6">
          <a
            href="#home"
            onClick={(e) => {
              handleSmoothScroll(e, 'home');
              closeMobileMenu();
            }}
            className="text-xl font-bold tracking-[0.2em] text-[#1b2228] hover:text-gray-600 transition-colors font-sans"
          >
            HOME
          </a>
          <a
            href="#about"
            onClick={(e) => {
              handleSmoothScroll(e, 'about');
              closeMobileMenu();
            }}
            className="text-xl font-bold tracking-[0.2em] text-[#1b2228] hover:text-gray-600 transition-colors font-sans"
          >
            ABOUT
          </a>
          <a
            href="#services"
            onClick={(e) => {
              handleSmoothScroll(e, 'services');
              closeMobileMenu();
            }}
            className="text-xl font-bold tracking-[0.2em] text-[#1b2228] hover:text-gray-600 transition-colors font-sans"
          >
            SERVICES
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              handleSmoothScroll(e, 'contact');
              closeMobileMenu();
            }}
            className="text-xl font-bold tracking-[0.2em] text-[#1b2228] hover:text-gray-600 transition-colors font-sans"
          >
            CONTACT
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              handleSmoothScroll(e, 'contact');
              closeMobileMenu();
            }}
            className="flex items-center gap-2 bg-[#1b2228] text-white px-8 py-3 text-sm font-bold tracking-[0.15em] hover:bg-black transition-colors font-sans"
          >
            GET IN TOUCH
            <Plus className="w-5 h-5" strokeWidth={2} />
          </a>
        </div>
      </div>
    </nav>
  );
}
