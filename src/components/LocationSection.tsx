import ScrollReveal from "./ScrollReveal";
import { MapPin } from "lucide-react";

const LocationSection = () => {
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Avenida+Getúlio+Vargas+98+Bambu+Porto+Feliz+SP";

  return (
    <section id="localizacao" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-elegant text-4xl md:text-5xl text-foreground mb-4">Nossa Localização</h2>
          <div className="w-16 h-px bg-foreground/30 mx-auto mb-6" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-foreground mt-1 shrink-0" size={20} />
                <div>
                  <p className="font-literature text-foreground text-lg leading-relaxed">
                    Avenida Getúlio Vargas, nº 98
                  </p>
                  <p className="font-literature text-muted-foreground">
                    Bairro Bambu — Porto Feliz, SP
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury inline-flex"
                >
                  Ver no Google Maps
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="aspect-[4/3] overflow-hidden border border-border">
              <iframe
                title="Localização do Studio"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.0!2d-47.52!3d-23.21!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDEyJzM2LjAiUyA0N8KwMzEnMTIuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(100%) contrast(1.1) brightness(0.8)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
