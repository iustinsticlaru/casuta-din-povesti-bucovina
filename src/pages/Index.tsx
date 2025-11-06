import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Rooms from "@/components/Rooms";
import Experience from "@/components/Experience";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Story />
      <Rooms />
      <Experience />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
