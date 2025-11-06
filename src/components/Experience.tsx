import { Mountain, Sun, Moon, Smile } from "lucide-react";
import nightImage from "@/assets/exterior-night.jpg";

const Experience = () => {
  const experiences = [
    {
      icon: Sun,
      title: "Priveliști Montane",
      description: "Trezește-te cu vedere spre pădurile de brad și munții Bucovinei"
    },
    {
      icon: Moon,
      title: "Seri la Ciubăr",
      description: "Relaxare sub cerul înstelat, în căldura apei termale"
    },
    {
      icon: Mountain,
      title: "Drumeții și Natură",
      description: "Trasee montane și plimbări prin pădurile seculare"
    },
    {
      icon: Smile,
      title: "Loc de Joacă",
      description: "Spațiu sigur și distractiv pentru cei mici"
    }
  ];

  return (
    <section id="experienta" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Experiența la Noi
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-sans">
            Mai mult decât o cazare - o experiență autentică în inima Bucovinei
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-1 gap-6">
              {experiences.map((exp) => (
                <div key={exp.title} className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/30 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <exp.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-foreground mb-2">{exp.title}</h3>
                    <p className="text-sm text-muted-foreground font-sans">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2">
            <img
              src={nightImage}
              alt="Căsuța noaptea"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>

        <div className="bg-accent/5 rounded-lg p-8 border border-accent/20">
          <h3 className="text-2xl font-serif font-bold text-foreground mb-4 text-center">
            În Apropierea Noastră
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-sans font-semibold text-foreground mb-2">Vatra Dornei</h4>
              <p className="text-sm text-muted-foreground">Stațiune balneoclimaterică la doar câțiva kilometri</p>
            </div>
            <div>
              <h4 className="font-sans font-semibold text-foreground mb-2">Mănăstirile Bucovinei</h4>
              <p className="text-sm text-muted-foreground">Patrimoniu UNESCO la distanță de mașină</p>
            </div>
            <div>
              <h4 className="font-sans font-semibold text-foreground mb-2">Trasee Montane</h4>
              <p className="text-sm text-muted-foreground">Drumeții pentru toate nivelurile</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
