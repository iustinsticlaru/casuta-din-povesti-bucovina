import { BedDouble, Users, Thermometer, Sofa } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import bedroom1 from "@/assets/bedroom-1.jpg";
import bedroom2 from "@/assets/bedroom-2.jpg";
import dining from "@/assets/dining.jpg";
import hotTub from "@/assets/hot-tub-winter.jpg";

const Rooms = () => {
  const features = [
    {
      icon: BedDouble,
      title: "5 Camere Tradiționale",
      description: "Decorate cu motive bucovinene autentice"
    },
    {
      icon: Users,
      title: "Living Spațios",
      description: "Perfect pentru petrecerea timpului împreună"
    },
    {
      icon: Thermometer,
      title: "Încălzire pe Peleți",
      description: "Confort modern în ambient tradițional"
    },
    {
      icon: Sofa,
      title: "Foișor și Ciubăr",
      description: "Relaxare sub cerul liber"
    },
  ];

  return (
    <section id="camere" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Camere și Facilități
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-sans">
            Casa noastră oferă 5 camere frumos amenajate, fiecare cu personalitate proprie, 
            păstrând autenticitatea tradițională românească.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature) => (
            <Card key={feature.title} className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground font-sans">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-2 lg:row-span-2 overflow-hidden rounded-lg shadow-lg">
            <img src={bedroom1} alt="Cameră tradițională" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img src={bedroom2} alt="Cameră mansardă" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img src={dining} alt="Sufragerie tradițională" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="lg:col-span-2 overflow-hidden rounded-lg shadow-lg">
            <img src={hotTub} alt="Ciubăr iarna" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
