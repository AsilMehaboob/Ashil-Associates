"use client";

import Image from "next/image";

const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
  e.preventDefault();
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Home() {
  return (
    <section id="home" className="relative h-screen w-full flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.jpg"
          alt="Finance Professional Team"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 w-full flex-grow flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end pb-12 md:pb-24 pt-32 md:pt-28">
         
        <div className="max-w-3xl w-full">
            <h1 className="text-[#D3D1CE] text-5xl sm:text-6xl md:text-[125px] font-medium leading-tight md:leading-[130px] tracking-[-0.77px] mb-6 md:mb-8 italic font-serif">
                Finance <br />
                <span className="italic block">Made Simple.</span>
            </h1>
            <p className="text-white/80 text-base md:text-xl font-medium max-w-lg leading-relaxed font-sans">
                Ashil &amp; Associates delivers world-class accounting and advisory
                services with a focus on precision and professional integrity across
                India and the GCC.
            </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto mt-8 md:mt-0">
            <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, 'contact')}
                className="bg-white text-[#1b2228] px-8 md:px-10 py-4 md:py-5 text-sm font-bold tracking-[0.15em] hover:bg-gray-100 transition-colors uppercase font-sans text-center whitespace-nowrap cursor-pointer"
            >
                Schedule Consultation
            </a>
            <a
                href="#services"
                onClick={(e) => handleSmoothScroll(e, 'services')}
                className="border border-white/40 text-white px-8 md:px-10 py-4 md:py-5 text-sm font-bold tracking-[0.15em] hover:bg-white/10 transition-colors uppercase font-sans text-center whitespace-nowrap cursor-pointer"
            >
                Learn More
            </a>
        </div>
      </div>
    </section>
  );
}
