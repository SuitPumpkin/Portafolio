import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Inicio" },
    { path: "/sobre-mi", label: "Sobre mí" },
    { path: "/declaracion", label: "Declaración" },
    { path: "/proyectos", label: "Proyectos" },
    { path: "/experiencia", label: "Experiencia" },
    { path: "/contacto", label: "Contacto" },
  ];

  return (
    <nav className="bg-background/90 backdrop-blur-md sticky top-0 z-50 border-b border-line/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <img
            src="/logo%20NEW.png"
            alt="Suit Pumpkin"
            className="logo-dark h-10 w-auto transition-opacity duration-300 group-hover:opacity-80"
          />
          <img
            src="/logo%20NEW(whitebg).png"
            alt="Suit Pumpkin"
            className="logo-light h-10 w-auto transition-opacity duration-300 group-hover:opacity-80"
          />
        </Link>

        <div className="flex items-center gap-5 md:gap-8">
          <ThemeToggle />

          <button
            className="md:hidden text-text hover:text-accent transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul
            className={`flex flex-col md:flex-row items-center md:items-stretch gap-1 md:gap-0 absolute md:static left-0 w-full md:w-auto bg-background/95 md:bg-transparent border-t border-line/5 md:border-none backdrop-blur-md md:backdrop-blur-none transition-all duration-300 ease-out overflow-hidden ${
              isOpen
                ? "max-h-[400px] opacity-100 top-[60px]"
                : "max-h-0 opacity-0 -top-4 md:max-h-none md:opacity-100 md:top-0"
            }`}
          >
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 text-sm tracking-wide transition-colors duration-200 md:border-b-2 ${
                    location.pathname === item.path
                      ? "text-accent border-accent"
                      : "text-text/70 hover:text-highlight border-transparent hover:border-highlight/50"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
