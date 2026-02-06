"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus, Menu, X, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/constants";

const handleSmoothScroll = (
  e: React.MouseEvent<HTMLAnchorElement>,
  targetId: string
) => {
  e.preventDefault();
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Pages that should have visible navbar from the start
  const pagesWithVisibleNavbar = ["/privacy-policy", "/terms-of-service", "/career", "/blog"];
  const shouldStartVisible = pagesWithVisibleNavbar.includes(pathname || "") || pathname?.startsWith("/blog/");
  const isNavActive = isScrolled || shouldStartVisible || isMobileMenuOpen;
  const isHomePage = pathname === "/";

  useEffect(() => {
    // If on a page that needs visible navbar, set scrolled state immediately
    if (shouldStartVisible) {
      setIsScrolled(true);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20 || shouldStartVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [shouldStartVisible]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isNavActive
            ? "bg-white shadow-sm border-b border-gray-100 py-3"
            : "bg-transparent py-6 md:py-8"
        }`}
        // initial={{ y: -100 }}
        // animate={{ y: 0 }}
        // transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="relative w-44 md:w-52 lg:w-56 h-14 md:h-16"
            onClick={closeMobileMenu}
          >
            <Image
              src="/logo.svg"
              alt="Ashil & Associates"
              fill
              className={`object-contain object-left ${
                isNavActive ? "" : "brightness-0 invert"
              }`}
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-12">
            <div className="flex items-center gap-10">
              {isHomePage &&
                NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) =>
                      handleSmoothScroll(e, link.href.replace("#", ""))
                    }
                    className={`text-xs font-bold tracking-[0.2em] transition-colors font-sans cursor-pointer hover:text-[var(--color-midnight-900)] ${
                      isNavActive
                        ? "text-[var(--color-midnight-600)]"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              <Link
                href="/career"
                className={`text-xs font-bold tracking-[0.2em] transition-colors font-sans cursor-pointer hover:text-[var(--color-midnight-900)] ${
                  isNavActive
                    ? "text-[var(--color-midnight-600)]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                CAREER
              </Link>
              <Link
                href="/blog"
                className={`text-xs font-bold tracking-[0.2em] transition-colors font-sans cursor-pointer hover:text-[var(--color-midnight-900)] ${
                  isNavActive
                    ? "text-[var(--color-midnight-600)]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                BLOG
              </Link>
            </div>

            {isHomePage ? (
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "contact")}
                className={`flex items-center gap-2 px-6 py-3 text-xs font-bold tracking-[0.2em] transition-all duration-300 border font-sans cursor-pointer uppercase ${
                  isNavActive
                    ? "bg-[var(--color-midnight-950)] text-white hover:bg-[var(--color-midnight-800)] border-[var(--color-midnight-950)]"
                    : "bg-white/10 text-white hover:bg-white hover:text-[var(--color-midnight-950)] border-white/20 hover:border-white backdrop-blur-sm"
                }`}
              >
                GET IN TOUCH
                <Plus className="w-4 h-4" strokeWidth={2} />
              </a>
            ) : (
              <Link
                href="/"
                className={`flex items-center gap-2 px-6 py-3 text-xs font-bold tracking-[0.2em] transition-all duration-300 border font-sans cursor-pointer uppercase ${
                  isNavActive
                    ? "bg-[var(--color-midnight-950)] text-white hover:bg-[var(--color-midnight-800)] border-[var(--color-midnight-950)]"
                    : "bg-white/10 text-white hover:bg-white hover:text-[var(--color-midnight-950)] border-white/20 hover:border-white backdrop-blur-sm"
                }`}
              >
                <ArrowLeft className="w-4 h-4" strokeWidth={2} />
                BACK TO HOME
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 z-50 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X
                className="w-8 h-8 text-[var(--color-midnight-900)]"
                strokeWidth={1.5}
              />
            ) : (
              <Menu
                className={`w-8 h-8 ${
                  isNavActive
                    ? "text-[var(--color-midnight-900)]"
                    : "text-white"
                }`}
                strokeWidth={1.5}
              />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 lg:hidden pt-28 px-6 flex flex-col"
          >
            <div className="flex flex-col items-center justify-center space-y-8 h-full pb-28">
              {isHomePage &&
                NAV_LINKS.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      handleSmoothScroll(e, link.href.replace("#", ""));
                      setTimeout(() => closeMobileMenu(), 50);
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    className="text-2xl font-bold tracking-[0.2em] text-[var(--color-midnight-900)] hover:text-[var(--color-midnight-600)] transition-colors font-sans"
                  >
                    {link.label}
                  </motion.a>
                ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + NAV_LINKS.length * 0.1 }}
              >
                <Link
                  href="/career"
                  onClick={closeMobileMenu}
                  className="text-2xl font-bold tracking-[0.2em] text-[var(--color-midnight-900)] hover:text-[var(--color-midnight-600)] transition-colors font-sans"
                >
                  CAREER
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + NAV_LINKS.length * 0.1 }}
              >
                <Link
                  href="/blog"
                  onClick={closeMobileMenu}
                  className="text-2xl font-bold tracking-[0.2em] text-[var(--color-midnight-900)] hover:text-[var(--color-midnight-600)] transition-colors font-sans"
                >
                  BLOG
                </Link>
              </motion.div>

              {isHomePage ? (
                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  onClick={(e) => {
                    handleSmoothScroll(e, "contact");
                    setTimeout(() => closeMobileMenu(), 50);
                  }}
                  className="flex items-center gap-2 bg-[var(--color-midnight-950)] text-white px-8 py-4 text-xs font-bold tracking-[0.2em] hover:bg-[var(--color-midnight-800)] transition-colors font-sans uppercase mt-8"
                >
                  GET IN TOUCH
                  <Plus className="w-5 h-5" strokeWidth={2} />
                </motion.a>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className="flex items-center gap-2 bg-[var(--color-midnight-950)] text-white px-8 py-4 text-xs font-bold tracking-[0.2em] hover:bg-[var(--color-midnight-800)] transition-colors font-sans uppercase mt-8"
                  >
                    <ArrowLeft className="w-5 h-5" strokeWidth={2} />
                    BACK TO HOME
                  </Link>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
