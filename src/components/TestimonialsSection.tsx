import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Nayara",
    text: "O Mateus é um verdadeiro artista! Minhas unhas nunca ficaram tão lindas. Cada detalhe é perfeito.",
  },
  {
    name: "Michele",
    text: "Atendimento impecável e resultado surreal. Sempre saio do estúdio me sentindo uma diva.",
  },
  {
    name: "Bruna",
    text: "Profissionalismo e criatividade em cada trabalho. Não troco por nada! Super recomendo.",
  },
  {
    name: "Mariana",
    text: "As nail arts do Mateus são obras de arte de verdade. Recebo elogios toda vez que saio de lá.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">
              <span className="font-signature text-gradient-shine">O que dizem</span>{" "}
              <span className="font-elegant text-foreground">Nossas Clientes</span>
            </h2>
            <div className="w-16 h-px bg-foreground/30 mx-auto" />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-8">
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
              {/* Duplicate the list to create a seamless loop */}
              {[...Array(2)].map((_, arrayIndex) => (
                <div key={arrayIndex} className="flex gap-6 px-3 shrink-0">
                  {testimonials.map((t, i) => (
                    <motion.div
                      key={`${arrayIndex}-${i}`}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3 }}
                      className="w-[350px] md:w-[400px] whitespace-normal group relative p-8 border border-white/20 rounded-sm bg-card/50 backdrop-blur-sm"
                    >
                      <Quote className="absolute top-6 right-6 w-8 h-8 text-foreground/10 group-hover:text-foreground/20 transition-colors duration-500" />
                      <p className="font-literature text-muted-foreground leading-relaxed mb-6 text-sm">
                        "{t.text}"
                      </p>
                      <div className="flex items-center gap-3 mt-auto">
                        <div className="w-8 h-px bg-foreground/30" />
                        <span className="font-typewriter text-xs tracking-widest uppercase text-foreground">
                          {t.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;
