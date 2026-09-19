import { motion } from "framer-motion";

const experiences = [
  {
    role: "Desarrollador Fullstack",
    company: "GETINSOFT",
    period: "Noviembre 2025 – Marzo 2026",
    details: [
      "Desarrollé soluciones utilizando Azure DevOps y Firebase.",
      "Trabajé tanto en frontend como en backend en múltiples proyectos.",
      "Apliqué la metodología SCRUM en un entorno de trabajo híbrido.",
      "Fui parte de procesos de CI/CD utilizando Conventional Commits y arquitectura limpia.",
    ],
  },
  {
    role: "Desarrollador y Diseñador",
    company: "Evolution",
    period: "Enero 2024 – Diciembre 2024",
    details: [
      "Implementé metodología Design Thinking para optimizar el flujo de trabajo.",
      "Desarrollé un sistema de gestión con C# y .NET (MVVM, SQLite).",
      "Diseñé material visual en Illustrator y Photoshop.",
      "Capacité a compañeros en herramientas técnicas y de diseño.",
    ],
  },
  {
    role: "Agente de Atención Telefónica bilingue",
    company: "Comcast",
    period: "Abril 2020 – Septiembre 2020",
    details: [
      "Usé sistemas de gestión para documentación y atención al cliente.",
      "Apliqué principios de metodología Waterfall centrada en el usuario.",
      "Trabajé en formato híbrido documentando procesos de soporte.",
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

export default function Experience() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-left mb-16"
      >
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
      </motion.div>

      <div className="mb-20">
        <p className="text-suitgold text-xs font-brand tracking-[0.3em] uppercase mb-6">
          Profesional
        </p>
        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
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
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-suitgold text-xs font-brand tracking-[0.3em] uppercase mb-6">
          Certificaciones
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              whileHover={{ y: -3 }}
              className="bg-surface/30 border border-cream/5 rounded-xl p-5 transition-all duration-300 hover:border-suitgold/15"
            >
              <h4 className="text-cream font-semibold text-sm mb-1 font-primary">
                {cert.title}
              </h4>
              <p className="text-muted text-xs mb-1">{cert.org}</p>
              <p className="text-xs text-suitgold mb-3">{cert.year}</p>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
