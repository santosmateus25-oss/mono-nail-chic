import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import catalog1Img from "@/assets/catalog-1.jpg";
import catalog2Img from "@/assets/catalog-2.jpg";
import catalog3Img from "@/assets/catalog-3.jpg";
import catalog4Img from "@/assets/catalog-4.jpg";
import catalog5Img from "@/assets/catalog-5.jpg";
import catalog6Img from "@/assets/catalog-6.jpg";
import catalog7Img from "@/assets/catalog-7.jpg";
import catalog8Img from "@/assets/catalog-8.jpg";

const works = [
  { src: catalog1Img, title: "Design Studio", alt: "Trabalho real de nail design" },
  { src: catalog2Img, title: "Acabamento Perfeito", alt: "Trabalho real de nail design" },
  { src: catalog3Img, title: "Detalhes Únicos", alt: "Trabalho real de nail design" },
  { src: catalog4Img, title: "Nail Art", alt: "Trabalho real de nail design" },
  { src: catalog5Img, title: "Estilo", alt: "Trabalho real de nail design" },
  { src: catalog6Img, title: "Inspiração", alt: "Trabalho real de nail design" },
  { src: catalog7Img, title: "Beleza", alt: "Trabalho real de nail design" },
  { src: catalog8Img, title: "Exclusivo", alt: "Trabalho real de nail design" },
];

const services = [
  { name: "Banho em Gel", price: "R$130", desc: "Camada de gel sobre a unha natural para dar mais resistência, brilho e evitar que quebre facilmente." },
  { name: "Alongamento", price: "R$200", desc: "Extensão das unhas com gel, deixando no tamanho e formato desejado, com acabamento natural e duradouro. Trabalho feito com o molde russo e f1." },
  { name: "Esmaltação em Gel", price: "R$100", desc: "Esmalte em gel com alta durabilidade, brilho intenso e secagem imediata." },
  { name: "Blindagem", price: "R$70", desc: "Proteção da unha natural com uma camada fina de gel, ideal para fortalecer unhas frágeis." },
  { name: "Remoção", price: "R$55", desc: "Retirada segura do gel sem danificar a unha natural." },
  { name: "Manutenção Banho", price: "R$100", desc: "Manutenção do banho em gel para manter o brilho e a resistência das unhas." },
  { name: "Manutenção Alongamento", price: "R$110", desc: "Manutenção do alongamento para manter o formato e acabamento perfeito." },
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
              <div className="gallery-beam-wrap group cursor-pointer aspect-[3/4]">
                <div className="gallery-beam-inner relative">
                  <img
                    src={work.src}
                    alt={work.alt}
                    loading="lazy"
                    width={640}
                    height={800}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                  />
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="font-typewriter text-xs tracking-[0.2em] uppercase text-white [text-shadow:0_0_8px_rgba(0,0,0,0.8)]">
                      {work.title}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Serviços e Preços */}
        <ScrollReveal className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl mb-4">
              <span className="font-signature text-foreground">Serviços</span>{" "}
              <span className="font-elegant text-foreground">& Preços</span>
            </h3>
            <div className="w-16 h-px bg-foreground/30 mx-auto" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <ScrollReveal key={service.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group relative p-6 border border-border rounded-sm bg-card/50 backdrop-blur-sm hover:border-foreground/30 transition-colors duration-500 h-full flex flex-col"
              >
                <div className="flex items-baseline justify-between mb-3">
                  <h4 className="font-elegant text-lg text-foreground">{service.name}</h4>
                  <span className="font-typewriter text-sm tracking-wider text-foreground ml-3 shrink-0">
                    {service.price}
                  </span>
                </div>
                <div className="w-full h-px bg-foreground/10 mb-3" />
                <p className="font-literature text-xs text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-12" delay={0.3}>
          <a
            href="https://wa.me/5515998619433?text=Olá%20Mateus,%20gostaria%20de%20agendar%20um%20horário."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury inline-block"
          >
            Agende seu Horário
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CatalogSection;
