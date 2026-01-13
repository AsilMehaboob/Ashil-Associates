"use client"
export default function KeyServicesMarquee() {
  const services = [
    "Audit Assurance",
    "Tax Compliance",
    "Virtual CFO",
    "GCC VAT",
    "Corporate Tax",
    "Accounting Services",
    "Business Advisory",
    "Financial Planning",
  ];

  return (
    <section className="w-full overflow-hidden py-6" style={{ backgroundColor: '#090E16' }}>
      <div className="marquee-container">
        <div className="marquee-content">
          {/* First set of services */}
          {services.map((service, index) => (
            <span key={`service-1-${index}`} className="inline-flex items-center">
              <span className="text-white text-lg md:text-xl font-serif font-light whitespace-nowrap px-8">
                {service}
              </span>
              <span className="text-white/40 text-2xl">✦</span>
            </span>
          ))}
          {/* Duplicate set for seamless loop */}
          {services.map((service, index) => (
            <span key={`service-2-${index}`} className="inline-flex items-center">
              <span className="text-white text-lg md:text-xl font-serif font-light whitespace-nowrap px-8">
                {service}
              </span>
              <span className="text-white/40 text-2xl">✦</span>
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
          animation: scroll 30s linear infinite;
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
