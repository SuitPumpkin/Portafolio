import { motion } from "framer-motion";

const projects = [
  {
    title: "Productshowcase",
    period: "2025",
    description:
      "Aplicación desarrollada en Unreal Engine 5 para mostrar productos de forma interactiva y visualmente impactante. Permite a los usuarios explorar y visualizar productos en un entorno 3D inmersivo.",
    skills: ["Unreal Engine 5", "3D Development", "Interactive Design"],
    image: "/Productshowcase.gif",
    github: "https://github.com/SuitPumpkin/Productshowcase",
    featured: true,
  },
  {
    title: "GestorX",
    period: "Ago 2024 - Presente",
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
    skills: ["Front-End", "Back-End", "Full-Stack"],
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
  {
    title: "Multimedia Format Converter",
    period: "Ago 2024",
    description:
      "Software simple y funcional desarrollado en .NET para convertir entre múltiples formatos multimedia: imágenes, videos y audios. Permite conversiones masivas con una interfaz intuitiva.",
    skills: ["C#", ".NET Framework", "Git"],
    image: "/media.png",
    github: "https://github.com/SuitPumpkin/MultimediaFormatConverter",
    featured: false,
  },
];

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-left mb-16"
      >
        <p className="text-suitgold text-xs font-brand tracking-[0.3em] uppercase mb-3">
          Portafolio
        </p>
        <h2 className="text-3xl md:text-4xl font-primary font-semibold text-cream">
          Proyectos
        </h2>
      </motion.div>

      {featured && (
        <motion.a
          href={featured.github}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
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
            <span className="text-sm text-suitred font-medium transition-colors duration-200 hover:text-suitgold tracking-wide">
              Ver en GitHub →
            </span>
          </div>
        </motion.a>
      )}

      <div className="grid sm:grid-cols-2 gap-6">
        {others.map((proj, index) => (
          <motion.a
            key={proj.title}
            href={proj.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            viewport={{ once: true }}
            className="group flex flex-col bg-surface/30 border border-cream/5 rounded-xl overflow-hidden hover:border-suitgold/20 transition-all duration-400"
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
          </motion.a>
        ))}
      </div>
    </section>
  );
}
