import { BANNER_CONTENT } from "@/constants";

export default function Banner() {
  return (
    <section className="bg-[#090f15] py-24 px-6 text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-12 leading-tight">
          {BANNER_CONTENT.title}
        </h2>

        <a
          href="#contact"
          className="inline-block bg-white text-black px-8 py-4 text-xs font-bold tracking-[0.15em] uppercase hover:bg-gray-200 transition-colors duration-300 font-sans mb-20 cursor-pointer"
        >
          {BANNER_CONTENT.buttonText}
        </a>

        <div className="border-t border-white/10 w-full mb-12"></div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-12 sm:gap-4 max-w-3xl mx-auto">
          {BANNER_CONTENT.stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-4xl font-serif italic mb-2">
                {stat.number}
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 font-sans">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
