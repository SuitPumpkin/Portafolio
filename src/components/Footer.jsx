export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-bg border-t border-cream/5">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-muted text-xs font-brand tracking-[0.15em] uppercase">
          Suit Pumpkin
        </p>
        <p className="text-muted text-xs">
          © {year} Rodrigo Alejandro Loza Navarro — Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}
