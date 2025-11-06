import { Heart, Home, TreePine } from "lucide-react";
import summerImage from "@/assets/exterior-summer.jpg";

const Story = () => {
  return (
    <section id="povestea" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Povestea Noastră
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed font-sans">
              Căsuța din Povești este o casă tradițională de peste 100 de ani, recondiționată cu grijă 
              și respect pentru tradițiile bucovinene. Situată în mijlocul naturii, aproape de Vatra Dornei, 
              casa noastră vă oferă o experiență autentică, departe de agitația orașului.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed font-sans">
              Fiecare colț al casei respiră istorie și căldură, iar fiecare oaspete devine parte din povestea 
              noastră. Aici veți găsi liniște, ospitalitate autentică și farmecul inconfundabil al Bucovinei.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-3">
                  <Home className="w-8 h-8 text-accent" />
                </div>
                <p className="font-serif text-sm text-foreground">100+ ani<br />de istorie</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center mb-3">
                  <Heart className="w-8 h-8 text-secondary" />
                </div>
                <p className="font-serif text-sm text-foreground">Recondiționată<br />cu suflet</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-3">
                  <TreePine className="w-8 h-8 text-accent" />
                </div>
                <p className="font-serif text-sm text-foreground">În mijlocul<br />naturii</p>
              </div>
            </div>
          </div>

          <div className="animate-fade-in">
            <img
              src={summerImage}
              alt="Căsuța din Povești vara"
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
