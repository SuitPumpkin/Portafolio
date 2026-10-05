import Reveal from "../components/Reveal";

const experiences = [
  {
    role: "Desarrollador Fullstack",
    company: "GETINSOFT",
    period: "Noviembre 2025 – Marzo 2026",
    details: [
      "Desarrollé software de gestión para 2 empresas cliente con React y TypeScript (frontend) y NestJS sobre PostgreSQL (backend), a partir de una plantilla base interna que se ajustaba a los requerimientos de cada empresa y ahorró cerca de 2 meses de desarrollo inicial.",
      "Migraciones de esquema sobre tablas ya en producción, en PostgreSQL y con los servicios en marcha, por cambios solicitados por los clientes, manteniendo los datos estables sin detener el servicio.",
      "Trabajé en un equipo Scrum con stand-up diario por videollamada y sprints de varias semanas. Revisé el código del equipo con autoridad de aprobación dentro del flujo de Pull Requests en Azure DevOps.",
      "Rediseñé la UI/UX de ambos productos: simplifiqué el lenguaje y la densidad de información, y los clientes dejaron de reportar que no encontraban cosas. Convención de Conventional Commits y arquitectura por capas.",
    ],
  },
  {
    role: "Agente de Atención Telefónica bilingue",
    company: "Comcast",
    period: "Abril 2020 – Septiembre 2020",
    details: [
      "Atendí clientes de Estados Unidos en un entorno 100% en inglés.",
      "Documenté cada interacción de forma clara y trazable en los sistemas de gestión.",
      "Trabajé en formato híbrido, documentando procesos de soporte.",
    ],
  },
  {
    role: "Representante de Ventas Telefónicas",
    company: "Citibanamex",
    period: "Septiembre 2019 – Noviembre 2019",
    details: [
      "Gestión de 300-400 llamadas diarias cumpliendo metas del equipo.",
      "Prevención de ingeniería social y atención personalizada.",
    ],
  },
];

const practicas = [
  {
    role: "Desarrollador y Diseñador",
    company: "Evolution",
    period: "Enero 2024 – Diciembre 2024",
    details: [
      "Desarrollé y mantuve un sistema de gestión de proyectos con usuarios, en C# y .NET (MVVM, SQLite).",
      "Implementé metodología Design Thinking para optimizar el flujo de trabajo del equipo.",
      "Diseñé material visual en Illustrator y Photoshop, y organicé una capacitación para compañeros en el uso de la herramienta y de ambos programas.",
      "Experiencia con Scrum y bases de código reales con usuarios y datos.",
    ],
  },
  {
    role: "Desarrollador de Videojuegos",
    company: "Attribute Overload",
    period: "Junio 2026 – Septiembre 2026",
    details: [
      "Desarrollo y mantenimiento de sistemas y mecánicas para un proyecto de videojuego desarrollado en Roblox, manteniendo la información y características del proyecto bajo confidencialidad.",
      "Implementación y corrección de sistemas relacionados con inventario, procesamiento de recursos, interacción entre objetos y gestión de elementos dentro del juego.",
      "Desarrollo y mantenimiento de sistemas de persistencia de datos, incluyendo recompensas y elementos de progresión entre sesiones.",
      "Identificación y resolución de errores relacionados con lógica de juego, gestión de objetos, estados de sesión, desconexiones de jugadores y procesamiento de elementos.",
      "Implementación de mejoras de UI/UX y feedback visual para mejorar la claridad y respuesta de diferentes sistemas del juego.",
      "Diseño y propuesta de sistemas de misiones, recompensas y progresión orientados a incentivar la participación y establecer objetivos a corto y largo plazo.",
      "Realización de pruebas de juego (playtesting), identificación de problemas de rendimiento y elaboración de reportes técnicos con problemas encontrados, gravedad y posibles soluciones.",
      "Optimización y revisión de código, identificando operaciones potencialmente costosas, manejo inadecuado de eventos, referencias de objetos y otros problemas que podían afectar el rendimiento o estabilidad.",
      "Colaboración con el equipo de desarrollo mediante documentación técnica, seguimiento de avances y propuestas de mejora.",
    ],
  }
];

const certifications = [
  { title: "Google Data Analytics Specialization", org: "Google", year: "2025", skills: ["SQL", "Data Visualization", "Spreadsheet"] },
  { title: "Machine Learning with Python", org: "IBM", year: "2024", skills: ["Python", "Machine Learning"] },
  { title: "Gestión de Proyectos y Agile", org: "Santander Open Academy", year: "2025", skills: ["Agile", "Lean Startup", "Design Thinking"] },
  { title: "Introduction to Game Design", org: "Epic Games", year: "2025", skills: ["Game Design", "Game Docs"] },
  { title: "Protección de software y seguridad de la IA", org: "SantanderX", year: "2024", skills: ["Artificial Intelligence"] },
  { title: "Python 101 for Data Science", org: "IBM", year: "2024", skills: ["Python", "Data Science"] },
  { title: "SQL and Relational Databases 101", org: "IBM", year: "2024", skills: ["SQL"] },
  { title: "EF SET English Certificate (C1)", org: "EF SET", year: "2024", skills: ["English C1"] },
  { title: "Desarrollador de Videojuegos", org: "Capacítate para el Empleo", year: "2022", skills: ["Game Development"] },
  { title: "Introducción a las Habilidades Digitales", org: "Santander Universidades México", year: "2022", skills: ["Digital Skills"] },
  { title: "Introducción a la Programación", org: "Capacítate para el Empleo", year: "2020", skills: ["Programming"] },
  { title: "Lógica de Programación", org: "Capacítate para el Empleo", year: "2020", skills: ["Programming", "OOP"] },
];

function ExperienceCard({ exp, index }) {
  return (
    <Reveal
      x={-20}
      delay={index * 0.08}
      duration={0.5}
      className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8 p-6 bg-surface/30 border border-cream/5 rounded-xl hover:border-suitgold/15 transition-all duration-300"
    >
      <div className="md:w-48 shrink-0">
        <p className="text-cream/50 text-xs font-brand tracking-wide uppercase">
          {exp.period}
        </p>
      </div>
      <div className="flex-1">
        <h4 className="text-lg font-semibold text-cream font-primary">
          {exp.role}
        </h4>
        <p className="text-sm text-suitgold mb-3">{exp.company}</p>
        <ul className="list-disc list-inside text-cream/70 text-sm space-y-1">
          {exp.details.map((d, j) => (
            <li key={j}>{d}</li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

function Section({ label, items }) {
  return (
    <div className="mb-20">
      <p className="text-suitgold text-xs font-brand tracking-[0.3em] uppercase mb-6">
        {label}
      </p>
      <div className="space-y-4">
        {items.map((exp, i) => (
          <ExperienceCard key={`${exp.company}-${i}`} exp={exp} index={i} />
        ))}
      </div>
    </div>
  );
}

function CertMedal({ cert }) {
  return (
    <article
      className="relative w-72 shrink-0 min-h-[11rem] bg-surface/30 border border-suitgold/25 rounded-xl p-5 transition-all duration-300 hover:border-suitgold/45 hover:-translate-y-1"
    >
      <div className="absolute inset-[5px] rounded-[10px] border border-suitgold/15 pointer-events-none" />
      <div className="absolute top-4 right-4 w-12 h-12 rounded-full border border-suitred/50 bg-suitred/10 flex items-center justify-center">
        <div className="w-9 h-9 rounded-full border border-dashed border-suitred/40 flex items-center justify-center">
          <span className="text-[10px] font-brand font-semibold text-suitred">
            {cert.year}
          </span>
        </div>
      </div>
      <h4 className="text-cream font-semibold text-sm mb-1 font-primary pr-12 line-clamp-2">
        {cert.title}
      </h4>
      <p className="text-muted text-xs mb-3">{cert.org}</p>
      <div className="h-px bg-gradient-to-r from-transparent via-suitred/40 to-transparent mb-3" />
      <div className="flex flex-wrap gap-1.5">
        {cert.skills.map((s, j) => (
          <span
            key={j}
            className="bg-suitgold/10 text-suitgold text-[10px] font-medium px-2 py-1 rounded-sm border border-suitgold/20"
          >
            {s}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Experience() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <div className="animate-fade-in-up text-left mb-16">
        <p className="text-suitgold text-xs font-brand tracking-[0.3em] uppercase mb-3">
          Trayectoria
        </p>
        <h2 className="text-3xl md:text-4xl font-primary font-semibold text-cream mb-6">
          Experiencia y Certificaciones
        </h2>
        <p className="text-cream/80 max-w-2xl text-lg leading-relaxed">
          Una trayectoria en evolución constante — combinando desarrollo
          técnico, diseño creativo y formación continua.
        </p>
      </div>

      <div className="mb-20">
        <Section label="Profesional" items={experiences} />
        <Section label="Prácticas profesionales (no remuneradas)" items={practicas} />
      </div>

      <div>
        <p className="text-suitgold text-xs font-brand tracking-[0.3em] uppercase mb-6">
          Certificaciones
        </p>
        <div className="cert-marquee-mask -my-3 overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          <div className="flex w-max gap-5 animate-marquee hover:[animation-play-state:paused]">
            {[...certifications, ...certifications].map((cert, i) => (
              <CertMedal
                key={
                  i < certifications.length
                    ? `cert-a-${i}`
                    : `cert-b-${i - certifications.length}`
                }
                cert={cert}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
