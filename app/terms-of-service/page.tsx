import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen text-[#1b2228]">
      <Nav />
      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8">
          Terms of Service
        </h1>
        <p className="text-gray-600 mb-8 font-sans">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-8 font-sans text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-[#1b2228] mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using this website, you accept and agree to be
              bound by the terms and provision of this agreement. In addition,
              when using these particular services, you shall be subject to any
              posted guidelines or rules applicable to such services. Any
              participation in this service will constitute acceptance of this
              agreement. If you do not agree to abide by the above, please do not
              use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1b2228] mb-4">
              2. Intellectual Property
            </h2>
            <p>
              This site and its original content, features, and functionality are
              owned by Ashil & Associates and are protected by international
              copyright, trademark, patent, trade secret, and other intellectual
              property or proprietary rights laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1b2228] mb-4">
              3. Use License
            </h2>
            <p className="mb-4">
              Permission is granted to temporarily download one copy of the
              materials (information or software) on Ashil & Associates' website
              for personal, non-commercial transitory viewing only. This is the
              grant of a license, not a transfer of title, and under this
              license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>modify or copy the materials;</li>
              <li>
                use the materials for any commercial purpose, or for any public
                display (commercial or non-commercial);
              </li>
              <li>
                attempt to decompile or reverse engineer any software contained
                on Ashil & Associates' website;
              </li>
              <li>
                remove any copyright or other proprietary notations from the
                materials; or
              </li>
              <li>
                transfer the materials to another person or "mirror" the
                materials on any other server.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1b2228] mb-4">
              4. Disclaimer
            </h2>
            <p>
              The materials on Ashil & Associates' website are provided on an 'as
              is' basis. Ashil & Associates makes no warranties, expressed or
              implied, and hereby disclaims and negates all other warranties
              including, without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of
              rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1b2228] mb-4">
              5. Governing Law
            </h2>
            <p>
              Any claim relating to Ashil & Associates' website shall be governed
              by the laws of the India without regard to its conflict of law
              provisions.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
