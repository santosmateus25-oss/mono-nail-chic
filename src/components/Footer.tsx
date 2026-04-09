import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-signature text-xl text-foreground">Nail Studio</span>

          <div className="flex items-center gap-6">
            <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
              <Instagram size={18} />
            </a>
          </div>

          <p className="font-typewriter text-xs text-muted-foreground tracking-wider">
            © 2026 Nail Studio. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
