import Home from "@/components/Home";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import KeyServicesMarquee from "@/components/KeyServicesMarquee";
import Commitment from "@/components/Commitment";
import IndustriesAndClients from "@/components/IndustriesAndClients";
import Team from "@/components/Team";
import Faq from "@/components/Faq";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <div>
      <Home />
      <About />
      <Services />
      <WhyChooseUs />
      <IndustriesAndClients />
      <KeyServicesMarquee />
      <Commitment />
      <Team />
      <Faq />
      <Banner />
      <Contact />
    </div>
  );
}
