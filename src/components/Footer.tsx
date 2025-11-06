import { Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={logo} alt="Căsuța din Povești" className="h-16 mb-4 brightness-0 invert" />
            <p className="text-sm text-primary-foreground/80 font-sans">
              O experiență autentică în inima Bucovinei
            </p>
          </div>

          <div>
            <h3 className="font-serif font-bold mb-4">Navigare Rapidă</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#acasa" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-sans">
                  Acasă
                </a>
              </li>
              <li>
                <a href="#camere" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-sans">
                  Camere
                </a>
              </li>
              <li>
                <a href="#experienta" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-sans">
                  Experiența
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-sans">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-bold mb-4">Urmărește-ne</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60 font-sans">
          <p>&copy; {currentYear} Căsuța din Povești Bucovina. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
