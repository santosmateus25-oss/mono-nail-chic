import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Camila S.",
    text: "O Mateus é um verdadeiro artista! Minhas unhas nunca ficaram tão lindas. Cada detalhe é perfeito.",
  },
  {
    name: "Juliana M.",
    text: "Atendimento impecável e resultado surreal. Sempre saio do estúdio me sentindo uma diva.",
  },
  {
    name: "Fernanda R.",
    text: "Profissionalismo e criatividade em cada trabalho. Não troco por nada! Super recomendo.",
  },
  {
    name: "Beatriz L.",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group relative p-8 border border-border rounded-sm bg-card/50 backdrop-blur-sm hover:border-foreground/30 transition-colors duration-500"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-foreground/10 group-hover:text-foreground/20 transition-colors duration-500" />
                <p className="font-literature text-muted-foreground leading-relaxed mb-6 text-sm">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-foreground/30" />
                  <span className="font-typewriter text-xs tracking-widest uppercase text-foreground">
                    {t.name}
                  </span>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
