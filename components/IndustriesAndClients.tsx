import { INDUSTRIES_AND_CLIENTS } from "@/constants";

export default function IndustriesAndClients() {
  return (
    <section className="bg-white py-20 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Content */}
          <div className="lg:col-span-4 xl:col-span-5 flex flex-col justify-center h-full">
            <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-gray-500 mb-6 font-sans">
              {INDUSTRIES_AND_CLIENTS.sectionHeader}
            </h3>
            <h2 className="text-4xl sm:text-5xl font-serif text-black leading-[1.15] mb-6">
              {INDUSTRIES_AND_CLIENTS.title}
            </h2>
            <p className="text-sm leading-relaxed text-gray-500 font-sans max-w-md">
              {INDUSTRIES_AND_CLIENTS.description}
            </p>
          </div>

          {/* Right Grid */}
          <div className="lg:col-span-8 xl:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {INDUSTRIES_AND_CLIENTS.categories.map((category, index) => (
                <div
                  key={index}
                  className="bg-[#F5F5F5] p-8 flex flex-col justify-center h-full transition-colors hover:bg-gray-100"
                >
                  <h4 className="font-serif text-lg font-medium text-black mb-2">
                    {category.title}
                  </h4>
                  <p className="text-xs text-gray-500 font-sans">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
