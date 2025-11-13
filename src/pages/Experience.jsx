import { motion } from "framer-motion";

const experiences = [
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
    role: "Agente de Atención Telefónica",
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
  {
    title: "Google Data Analytics Specialization",
    org: "Google",
    year: "2025",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    skills: ["SQL", "Data Visualization", "Spreadsheet Software"],
  },
  {
    title: "Machine Learning with Python",
    org: "IBM",
    year: "2024",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    skills: ["Python", "Machine Learning"],
  },
  {
    title: "Gestión de Proyectos y Fundamentos de metodología Agile",
    org: "Santander Open Academy",
    year: "2025",
    image: "https://assets.santanderopenacademy.com/uploaded/programs/b0759250-bc88-4f20-8ace-00aa534f3359",
    skills: ["Agile", "Lean Startup", "Design Thinking"],
  },
  {
    title: "Introduction to Game Design",
    org: "Epic Games",
    year: "2025",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/31/Epic_Games_logo.svg",
    skills: ["Game Design", "Game Design Documents"],
  },
  {
    title: "Protección de software y seguridad de la IA",
    org: "SantanderX",
    year: "2024",
    image: "https://explorerbyx.org/assets/icons/sx_explorer-logo-vector.svg",
    skills: ["Artificial Intelligence"],
  },
  {
    title: "Python 101 for Data Science",
    org: "IBM",
    year: "2024",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    skills: ["Python", "Data Science"],
  },
  {
    title: "SQL and Relational Databases 101",
    org: "IBM",
    year: "2024",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    skills: ["SQL"],
  },
  {
    title: "EF SET English Certificate (C1 Advanced)",
    org: "EF SET",
    year: "2024",
    image: "https://a.storyblok.com/f/79503/521x497/80464b3ee0/new-certificate.png",
    skills: ["English (C1)"],
  },
  {
    title: "Desarrollador de Videojuegos",
    org: "Capacítate para el Empleo",
    year: "2022",
    image: "https://capacitateparaelempleo.org/static/img/logos/logo_capacitate.svg",
    skills: ["Game Development"],
  },
  {
    title: "Introducción a las Habilidades Digitales",
    org: "Santander Universidades México",
    year: "2022",
    image: "https://api-manager.universia.net/coreplatform-document-management/v2/document-management/public/nf8kkcwjq6qp",
    skills: ["Digital Skills"],
  },
  {
    title: "Introducción a la Programación",
    org: "Capacítate para el Empleo",
    year: "2020",
    image: "https://capacitateparaelempleo.org/assets/images/Logo_Capacitate_White.png",
    skills: ["Programming"],
  },
  {
    title: "Lógica de Programación",
    org: "Capacítate para el Empleo",
    year: "2020",
    image: "https://capacitateparaelempleo.org/assets/images/Logo_Capacitate_White.png",
    skills: ["Programming", "OOP"],
  },
];

export default function Experience() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      {/* Header */}
      <h2 className="text-3xl font-semibold text-primary mb-10 text-center">
        Experiencia y Certificaciones
      </h2>

      {/* Section 1 - Experiencia profesional */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-secondary mb-8 text-center">
          Experiencia profesional
        </h3>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-surface border border-slate-800 rounded-2xl shadow-card p-6 hover:shadow-lg transition-all duration-300"
            >
              <h4 className="text-lg font-semibold text-onbg">{exp.role}</h4>
              <p className="text-sm text-muted">
                {exp.company} • {exp.period}
              </p>
              <ul className="mt-3 list-disc list-inside text-onbg text-sm space-y-1">
                {exp.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section 2 - Certificaciones */}
      <div>
        <h3 className="text-2xl font-semibold text-secondary mb-8 text-center">
          Certificados y reconocimientos
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-surface border border-slate-800 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="w-full h-28 flex items-center justify-center bg-background/70 p-3">
                <img
                  src={cert.image}
                  alt={cert.org}
                  className="max-h-16 object-contain opacity-90"
                />
              </div>
              <div className="p-5">
                <h4 className="text-onbg font-semibold text-sm mb-1">
                  {cert.title}
                </h4>
                <p className="text-muted text-xs mb-1">{cert.org}</p>
                <p className="text-xs text-secondary mb-2">{cert.year}</p>
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-primary/20 text-primary text-[10px] font-medium px-2 py-1 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
