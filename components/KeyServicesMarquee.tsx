"use client";

import { KEY_SERVICES_CONTENT } from "@/constants";

export default function KeyServicesMarquee() {
  return (
    <section
      className="w-full overflow-hidden py-10"
      style={{ backgroundColor: "#090E16" }}
    >
      <div className="marquee-container">
        <div className="marquee-content">
          {KEY_SERVICES_CONTENT.map((service, index) => (
            <span
              key={`service-1-${index}`}
              className="inline-flex items-center"
            >
              <span className="text-white text-2xl md:text-3xl font-serif font-light whitespace-nowrap px-12">
                {service}
              </span>
              <span className="text-white/40 text-3xl">✦</span>
            </span>
          ))}
          {KEY_SERVICES_CONTENT.map((service, index) => (
            <span
              key={`service-2-${index}`}
              className="inline-flex items-center"
            >
              <span className="text-white text-2xl md:text-3xl font-serif font-light whitespace-nowrap px-12">
                {service}
              </span>
              <span className="text-white/40 text-3xl">✦</span>
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          display: flex;
          width: 100%;
        }

        .marquee-content {
          display: flex;
          animation: scroll 40s linear infinite;
          will-change: transform;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-content:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
