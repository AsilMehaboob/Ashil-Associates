export default function About() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image placeholder */}
          <div className="bg-gray-200 aspect-[4/5] w-full"></div>

          {/* Right side - Content */}
          <div className="space-y-8">
            {/* Small heading */}
            <p className="text-sm tracking-[0.2em] text-gray-500 uppercase">
              About the Firm
            </p>

            {/* Main headline */}
            <h2 className="text-4xl md:text-5xl font-serif font-medium leading-tight">
              With a global reach, our firm has been in business since 1998.
            </h2>

            {/* Description paragraphs */}
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Ashil & Associates is a distinguished Chartered Accountancy firm
                committed to delivering exceptional professional services across India
                and the GCC region. With a foundation built on integrity, expertise, and
                client-centric values, we serve as trusted advisors to businesses
                navigating complex financial landscapes.
              </p>
              <p>
                Our multidisciplinary team brings together specialists in taxation, audit,
                advisory, and technology-driven financial solutions. We pride ourselves
                on understanding each client's unique needs and delivering tailored
                strategies.
              </p>
            </div>

            {/* Separator */}
            <div className="border-t border-gray-300 pt-8"></div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl md:text-4xl font-serif mb-1">25+</div>
                <div className="text-xs tracking-[0.15em] text-gray-500 uppercase">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-serif mb-1">500+</div>
                <div className="text-xs tracking-[0.15em] text-gray-500 uppercase">
                  Clients Served
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-serif mb-1">7</div>
                <div className="text-xs tracking-[0.15em] text-gray-500 uppercase">
                  Countries
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
