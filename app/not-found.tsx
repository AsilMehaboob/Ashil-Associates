"use client";

import Link from "next/link";
import { Home, ArrowLeft, Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-50"></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 max-w-2xl mx-auto text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-[180px] md:text-[240px] font-serif font-medium leading-none text-gray-200 select-none">
            404
          </h1>
        </div>

        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center border border-gray-200">
            <Search className="w-10 h-10 text-gray-400" strokeWidth={1.5} />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-serif font-medium text-[#1b2228] mb-6">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed max-w-lg mx-auto font-sans">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="group flex items-center gap-3 bg-[#1b2228] text-white px-8 py-4 text-sm font-bold tracking-[0.15em] hover:bg-black transition-all duration-300 uppercase font-sans shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
          >
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={2} />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group flex items-center gap-3 border-2 border-gray-300 text-[#1b2228] px-8 py-4 text-sm font-bold tracking-[0.15em] hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 uppercase font-sans"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" strokeWidth={2} />
            Go Back
          </button>
        </div>

        {/* Additional Help Text */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 font-sans">
            Need assistance?{" "}
            <Link 
              href="/#contact" 
              className="text-[#1b2228] hover:text-black transition-colors underline underline-offset-4 font-medium"
            >
              Contact our team
            </Link>
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </div>
  );
}
