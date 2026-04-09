import ScrollReveal from "./ScrollReveal";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl mb-6">
              <span className="font-elegant text-foreground">Quem sou eu</span>
            </h2>
            <div className="w-16 h-px bg-foreground/30 mx-auto mb-10" />
            
            <p className="font-literature text-muted-foreground leading-relaxed text-lg md:text-xl text-justify md:text-center">
              Atuando na área há mais de 4 anos, com ampla experiência e diversos atendimentos realizados. 
              Prezo pela segurança, qualidade e satisfação de cada cliente. Todos os procedimentos são 
              realizados com materiais profissionais, garantindo durabilidade e um acabamento impecável.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
