import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-subtle">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <button onClick={() => scrollTo("hero")} className="font-signature text-2xl text-foreground tracking-wide">
          Mateus Arantes
        </button>

        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo("catalogo")} className="font-typewriter text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-foreground after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">
            Catálogo
          </button>
          <button onClick={() => scrollTo("localizacao")} className="font-typewriter text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-foreground after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">
            Onde Estamos
          </button>
          <button onClick={() => scrollTo("agende")} className="btn-luxury-filled text-xs">
            Agende Aqui
          </button>
        </nav>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-foreground">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden glass-subtle border-t border-border">
          <div className="flex flex-col items-center gap-6 py-8">
            <button onClick={() => scrollTo("catalogo")} className="font-typewriter text-xs tracking-[0.2em] uppercase text-muted-foreground">Catálogo</button>
            <button onClick={() => scrollTo("localizacao")} className="font-typewriter text-xs tracking-[0.2em] uppercase text-muted-foreground">Onde Estamos</button>
            <button onClick={() => scrollTo("agende")} className="btn-luxury-filled text-xs">Agende Aqui</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
