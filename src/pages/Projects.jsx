import Reveal from "../components/Reveal";

const projects = [
  {
    title: "WebPageVS",
    period: "2026 · En producción",
    description:
      "Plataforma para organizar concursos de páginas web en clase. El profesor carga una cola de proyectos, comparte la sala con un código y un QR, y los alumnos votan desde su móvil mientras los resultados se sincronizan en tiempo real por WebSocket. Los empates se resuelven de forma determinista con incrementos de +0.1, y el resultado se puede exportar a CSV.",
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "WebSocket",
      "Docker",
    ],
    image: "/webpagevs.png",
    github: "https://github.com/SuitPumpkin/WebPageVS",
    deploy: "https://webpagevs.onrender.com/",
    featured: true,
  },
  {
    title: "Productshowcase",
    period: "2025",
    description:
      "Aplicación desarrollada en Unreal Engine 5 para mostrar productos de forma interactiva y visualmente impactante. Permite a los usuarios explorar y visualizar productos en un entorno 3D inmersivo.",
    skills: ["Unreal Engine 5", "3D Development", "Interactive Design"],
    image: "/Productshowcase.gif",
    github: "https://github.com/SuitPumpkin/Productshowcase",
    featured: false,
  },
  {
    title: "GestorX",
    period: "Ago 2024 - May 2025",
    description:
      "GestorX es un gestor de proyectos diseñado específicamente para uso individual. Permite fortalecer habilidades en .NET y comprender la arquitectura de software enfocada a la gestión personal.",
    skills: [".NET Framework", "C#", "SQLite", "Git"],
    image: "/gestor.png",
    github: "https://github.com/SuitPumpkin/Gestor_X",
    featured: false,
  },
  {
    title: "Pronostika",
    period: "Oct 2025",
    description:
      "Desarrollado para el reto 'Will It Rain On My Parade?' del NASA Space Apps Challenge Guadalajara 2025 como parte del equipo Tamales.bat. Proyecto full-stack que combina diseño frontend y desarrollo backend para visualizar pronósticos meteorológicos.",
    skills: ["Python", "FastAPI", "Vue.js", "Leaflet"],
    image: "/pronostika.gif",
    github: "https://github.com/SuitPumpkin/Will-It-Rain-On-My-Parade",
    featured: false,
  },
  {
    title: "SuitPumpkin's Resin Checker",
    period: "May 2024 - Ago 2025",
    description:
      "Aplicación en Python que permite consultar el estado de Resin y otros recursos dentro de los juegos Genshin Impact y Honkai Star Rail, utilizando la API de GenshinPy.",
    skills: ["Python", "API Integration"],
    image: "/resine.jpg",
    github: "https://github.com/SuitPumpkin/SuitPumpkins-Resin-Checker",
    featured: false,
  },
];

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <div className="animate-fade-in-up text-left mb-16">
        <p className="text-suitgold text-xs font-brand tracking-[0.3em] uppercase mb-3">
          Portafolio
        </p>
        <h2 className="text-3xl md:text-4xl font-primary font-semibold text-cream">
          Proyectos
        </h2>
      </div>

      {featured && (
        <Reveal
          y={40}
          duration={0.7}
          className="group grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 border border-cream/5 bg-surface/30 rounded-2xl overflow-hidden hover:border-suitgold/20 transition-all duration-500"
        >
          <div className="relative w-full h-64 md:h-80 overflow-hidden bg-neutral-900/30">
            <img
              src={featured.image}
              alt={featured.title}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-bg/60 to-transparent" />
          </div>
          <div className="p-8 md:p-10 md:pr-12">
            <p className="text-suitgold text-xs font-brand tracking-[0.2em] uppercase mb-3">
              Proyecto destacado
            </p>
            <h3 className="text-2xl md:text-3xl font-primary font-semibold text-cream mb-3">
              {featured.title}
            </h3>
            <p className="text-sm text-muted mb-4">{featured.period}</p>
            <p className="text-cream/75 text-sm leading-relaxed mb-6">
              {featured.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {featured.skills.map((s, i) => (
                <span
                  key={i}
                  className="bg-suitgold/10 text-suitgold text-xs font-medium px-3 py-1.5 rounded-sm border border-suitgold/20"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {featured.deploy && (
                <a
                  href={featured.deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-suitgold font-medium tracking-wide hover:text-cream transition-colors duration-200"
                >
                  Abrir la app →
                </a>
              )}
              <a
                href={featured.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-suitred font-medium tracking-wide hover:text-suitgold transition-colors duration-200"
              >
                Ver en GitHub →
              </a>
            </div>
            </div>
          </Reveal>
        )}

        <div className="grid sm:grid-cols-2 gap-6">
          {others.map((proj, index) => (
            <Reveal
              key={proj.title}
              y={30}
              duration={0.6}
              delay={index * 0.08}
              className="h-full"
            >
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col bg-surface/30 border border-cream/5 rounded-xl overflow-hidden hover:border-suitgold/20 transition-all duration-400 h-full"
              >
            <div className="relative w-full h-48 overflow-hidden bg-neutral-900/30">
              <img
                src={proj.image}
                alt={proj.title}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/50 to-transparent" />
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-cream font-primary">
                  {proj.title}
                </h3>
              </div>
              <p className="text-xs text-muted mb-3">{proj.period}</p>
              <p className="text-cream/70 text-sm leading-relaxed mb-4 line-clamp-3">
                {proj.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {proj.skills.map((s, i) => (
                  <span
                    key={i}
                    className="bg-suitgold/10 text-suitgold text-[10px] font-medium px-2 py-1 rounded-sm border border-suitgold/20"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-auto">
                <span className="text-xs text-suitred font-medium transition-colors duration-200 group-hover:text-suitgold tracking-wide">
                  Ver proyecto →
                </span>
              </div>
            </div>
            </a>
            </Reveal>
          ))}
      </div>
    </section>
  );
}
