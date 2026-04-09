import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const BookingSection = () => {
  const whatsappUrl = "https://wa.me/5515998619433?text=Olá%20Mateus,%20gostaria%20de%20agendar%20um%20horário.";

  return (
    <section id="agende" className="relative py-32 md:py-40 overflow-hidden">
      {/* Animated background waves */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-background" />
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-[200%] h-full opacity-[0.03]"
          style={{
            background: "radial-gradient(ellipse at 30% 50%, hsl(0 0% 100%) 0%, transparent 60%)",
          }}
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-0 right-0 w-[200%] h-full opacity-[0.02]"
          style={{
            background: "radial-gradient(ellipse at 70% 40%, hsl(0 0% 100%) 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-6">
            <span className="font-signature text-gradient-shine">Pronta para</span>
            <br />
            <span className="font-elegant text-foreground">Arrasar?</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="font-literature text-muted-foreground text-lg md:text-xl max-w-lg mx-auto mb-12">
            Agende seu horário e transforme suas unhas em uma verdadeira obra de arte.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury-filled text-base px-12 py-4 animate-pulse-glow inline-flex"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Agende Aqui
          </motion.a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BookingSection;
