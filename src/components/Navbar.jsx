import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const mainNav = [
    { path: "/", label: "Inicio" },
    { path: "/sobre-mi", label: "Sobre mí" },
    { path: "/declaracion", label: "Declaración" },
    { path: "/proyectos", label: "Proyectos" },
    { path: "/experiencia", label: "Experiencia" },
    { path: "/contacto", label: "Contacto" },
  ];

  const specialNav = [
    { path: "/creatividad-narrativa", label: "Creatividad Narrativa" },
  ];

  return (
    <nav className="bg-surface/80 backdrop-blur-lg sticky top-0 z-50 border-b border-slate-800/60 shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
      <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
        {/* 🔸 Logo e Identidad */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="SuitPumpkin logo"
            className="w-10 h-10 object-contain drop-shadow-md"
          />
          <span className="font-semibold text-xl text-primary tracking-tight">
            SuitPumpkin
          </span>
        </Link>

        {/* 🔹 Botón menú móvil */}
        <button
          className="md:hidden text-primary hover:text-orange-400 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* 🔹 Menú de navegación */}
        <ul
          className={`flex flex-col md:flex-row items-center md:space-x-2 gap-3 absolute md:static left-0 w-full md:w-auto 
          bg-gradient-to-b from-[#0b0b0c] via-[#141416] to-[#1c1c1f] md:bg-transparent 
          border-t border-slate-700/70 md:border-none 
          backdrop-blur-lg md:backdrop-blur-0 
          shadow-[0_8px_20px_rgba(0,0,0,0.5)] 
          transition-all duration-300 ease-in-out ${
            isOpen ? "top-[64px] opacity-90" : "top-[-400px] opacity-0 md:opacity-100"
          }`}
        >
          {/* 🔸 Menú principal */}
          {mainNav.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md font-medium transition-all duration-200 ${
                  location.pathname === item.path
                    ? "text-orange-300 bg-orange-500/20 border border-orange-500/40 shadow-sm shadow-orange-400/20"
                    : "text-muted hover:text-orange-400 hover:bg-orange-400/10"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}

          {/* 🔸 Separador elegante */}
          <div className="hidden md:block w-[1px] h-6 bg-gradient-to-b from-orange-400/40 to-transparent mx-3"></div>

          {/* 🔸 Sección destacada */}
          {specialNav.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md font-semibold tracking-wide transition-all duration-300 ${
                  location.pathname === item.path
                    ? "text-black bg-gradient-to-r from-orange-400 to-orange-600 shadow-md shadow-orange-400/30"
                    : "text-orange-400 hover:text-orange-300 hover:bg-orange-500/10"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
