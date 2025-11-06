import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/exterior-winter.jpg";

const Hero = () => {
  const scrollToStory = () => {
    const element = document.querySelector("#povestea");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="acasa" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/30 to-background/90" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-foreground mb-6 drop-shadow-lg">
          Bine ați venit la
          <br />
          Căsuța din Povești
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 font-sans font-light max-w-2xl mx-auto drop-shadow">
          O casă tradițională de peste 100 de ani, recondiționată cu suflet, în inima Bucovinei
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="font-sans font-semibold"
          onClick={scrollToStory}
        >
          Descoperă Povestea
        </Button>
      </div>

      <button
        onClick={scrollToStory}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/80 hover:text-primary-foreground transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
