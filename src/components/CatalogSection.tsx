import ScrollReveal from "./ScrollReveal";
import nailStilettoImg from "@/assets/nail-stiletto.jpg";
import nailAlmondImg from "@/assets/nail-almond.jpg";
import nailFrenchImg from "@/assets/nail-french.jpg";
import nailArtImg from "@/assets/nail-art.jpg";
import nailCoffinImg from "@/assets/nail-coffin.jpg";
import heroImg from "@/assets/hero-nails.jpg";

const works = [
  { src: nailStilettoImg, title: "Stiletto", alt: "Unhas stiletto com nail art" },
  { src: nailAlmondImg, title: "Amendoada", alt: "Unhas formato amendoado" },
  { src: nailFrenchImg, title: "Francesinha", alt: "Francesinha clássica" },
  { src: nailArtImg, title: "Nail Art", alt: "Nail art geométrica" },
  { src: nailCoffinImg, title: "Coffin", alt: "Unhas coffin shape" },
  { src: heroImg, title: "Artística", alt: "Nail design artístico" },
];

const CatalogSection = () => {
  return (
    <section id="catalogo" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-elegant text-4xl md:text-5xl text-foreground mb-4">Catálogo</h2>
          <div className="w-16 h-px bg-foreground/30 mx-auto mb-6" />
          <p className="font-literature text-muted-foreground max-w-md mx-auto">
            Cada criação é única, feita com precisão e paixão por cada detalhe.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {works.map((work, i) => (
            <ScrollReveal key={work.title} delay={i * 0.1}>
              <div className="group relative overflow-hidden aspect-[3/4] cursor-pointer">
                <img
                  src={work.src}
                  alt={work.alt}
                  loading="lazy"
                  width={640}
                  height={800}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                />
                <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="font-typewriter text-xs tracking-[0.2em] uppercase text-foreground">
                    {work.title}
                  </span>
                </div>
                <div className="absolute inset-0 border border-foreground/0 group-hover:border-foreground/20 transition-all duration-500" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-12" delay={0.3}>
          <button className="btn-luxury">Ver Catálogo Completo</button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CatalogSection;
