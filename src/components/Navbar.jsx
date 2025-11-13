import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Inicio" },
    { path: "/sobre-mi", label: "Sobre mí" },
    { path: "/declaracion", label: "Declaración" },
    { path: "/proyectos", label: "Proyectos" },
    { path: "/experiencia", label: "Experiencia" },
    { path: "/contacto", label: "Contacto" },
    { path: "/creatividad-narrativa", label: "Creatividad Narrativa" },
  ];

  return (
    <nav className="bg-surface/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-800 shadow-md">
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

        {/* Navigation */}
        <ul className="flex flex-wrap gap-4 text-sm items-center">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`px-2 py-1 rounded-md transition-colors ${
                  location.pathname === item.path
                    ? "text-black bg-orange-400"
                    : "text-muted hover:text-orange-400 hover:bg-orange-500/10"
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
