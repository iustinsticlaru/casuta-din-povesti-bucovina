import hallway from "@/assets/hallway.jpg";
import kitchen from "@/assets/kitchen.jpg";
import bedroom1 from "@/assets/bedroom-1.jpg";
import bedroom2 from "@/assets/bedroom-2.jpg";
import dining from "@/assets/dining.jpg";
import exteriorSummer from "@/assets/exterior-summer.jpg";
import exteriorWinter from "@/assets/exterior-winter.jpg";
import hotTub from "@/assets/hot-tub-winter.jpg";

const Gallery = () => {
  const images = [
    { src: exteriorSummer, alt: "Exterior vara", span: "col-span-2 row-span-2" },
    { src: bedroom1, alt: "Cameră tradițională", span: "col-span-1" },
    { src: dining, alt: "Sufragerie", span: "col-span-1" },
    { src: hotTub, alt: "Ciubăr", span: "col-span-2" },
    { src: kitchen, alt: "Bucătărie", span: "col-span-1" },
    { src: exteriorWinter, alt: "Exterior iarna", span: "col-span-1" },
    { src: hallway, alt: "Hol", span: "col-span-1" },
    { src: bedroom2, alt: "Cameră mansardă", span: "col-span-1" },
  ];

  return (
    <section id="galerie" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Galerie
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-sans">
            Descoperiți frumusețea și autenticitatea Căsuței din Povești
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`${image.span} overflow-hidden rounded-lg shadow-lg group cursor-pointer`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
