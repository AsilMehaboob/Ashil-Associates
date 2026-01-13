export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 md:mb-20 gap-8 md:gap-0">
          <div className="max-w-xl">
            <p className="text-xs tracking-widest text-gray-500 mb-4 uppercase">
              Why Choose Us
            </p>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              Amazing accounting statistics show the power of numbers.
            </h2>
          </div>
          <button className="bg-black text-white px-8 py-3 text-sm tracking-wide hover:bg-gray-800 transition-colors uppercase whitespace-nowrap">
            GET STARTED
          </button>
        </div>

        {/* Feature 1 - Image Left */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 mb-12 md:mb-20 items-center">
          <div className="bg-gray-200 aspect-[4/3] order-2 lg:order-1"></div>
          <div className="order-1 lg:order-2">
            <p className="text-xs tracking-widest text-gray-400 mb-4">01</p>
            <h3 className="text-2xl md:text-3xl font-serif font-medium mb-4 leading-tight">
              What sets us apart? Strong commitment to compliance.
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We ensure your business adheres to all regulatory requirements with meticulous attention to detail and proactive compliance management.
            </p>
          </div>
        </div>

        {/* Feature 2 - Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 mb-12 md:mb-20 items-center">
          <div>
            <p className="text-xs tracking-widest text-gray-400 mb-4">02</p>
            <h3 className="text-2xl md:text-3xl font-serif font-medium mb-4 leading-tight">
              We value your trust with absolute confidentiality.
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Your financial information is protected with stringent security protocols and professional ethics that prioritize your privacy.
            </p>
          </div>
          <div className="bg-gray-200 aspect-[4/3]"></div>
        </div>

        {/* Feature 3 - Image Left */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="bg-gray-200 aspect-[4/3] order-2 lg:order-1"></div>
          <div className="order-1 lg:order-2">
            <p className="text-xs tracking-widest text-gray-400 mb-4">03</p>
            <h3 className="text-2xl md:text-3xl font-serif font-medium mb-4 leading-tight">
              Embrace automation with technology-driven processes.
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Leveraging cutting-edge tools and automation to deliver accurate, efficient, and insightful financial solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
