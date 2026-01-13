import Nav from "@/components/Nav";
import Home from "@/components/Home";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import KeyServicesMarquee from "@/components/KeyServicesMarquee";
import Testimonials from "@/components/Testimonials";
import IndustriesAndClients from "@/components/IndustriesAndClients";
import Team from "@/components/Team";
import Faq from "@/components/Faq";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Services />
      <WhyChooseUs />
      <KeyServicesMarquee />
      <Testimonials />
      <IndustriesAndClients />
      <Team />
      <Faq />
      <Banner />
      <Contact />
      <Footer />
    </div>
  );
}
