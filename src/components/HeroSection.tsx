import { motion } from "framer-motion";
import heroImage from "@/assets/hero-nails.jpg";

const HeroSection = () => {
  const scrollToAgende = () => {
    document.getElementById("agende")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Nail design artístico em preto e branco" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-foreground/5 blur-3xl animate-float" />
        <div className="absolute bottom-1/3 left-1/5 w-48 h-48 rounded-full bg-foreground/3 blur-2xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight"
        >
          <span className="font-signature text-gradient-shine">Suas Unhas,</span>
          <br />
          <span className="font-elegant text-foreground">Uma Obra de Arte.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-literature text-muted-foreground text-lg md:text-xl mb-10 max-w-xl mx-auto"
        >
          Design exclusivo e sofisticado para quem busca perfeição em cada detalhe.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <button onClick={scrollToAgende} className="btn-luxury-filled text-sm animate-pulse-glow">
            Agende Aqui
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-foreground/30" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
