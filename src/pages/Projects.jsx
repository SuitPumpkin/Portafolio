import { motion } from "framer-motion";

const projects = [
  {
    title: "GestorX",
    period: "Ago 2024 - Presente",
    description:
      "GestorX es un gestor de proyectos diseñado específicamente para uso individual. Me permitió fortalecer mis habilidades en .NET y comprender la arquitectura de software enfocada a la gestión personal.",
    skills: [".NET Framework", "C#", "SQLite", "Git"],
    image:
      "https://private-user-images.githubusercontent.com/109180144/361628425-4db47628-9621-48f6-be85-805892fbc53e.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjMwMTQxMDUsIm5iZiI6MTc2MzAxMzgwNSwicGF0aCI6Ii8xMDkxODAxNDQvMzYxNjI4NDI1LTRkYjQ3NjI4LTk2MjEtNDhmNi1iZTg1LTgwNTg5MmZiYzUzZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMTEzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTExM1QwNjAzMjVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iYjY2YzRkNWIwYmFmN2EwODYyNWY2MTY3MGU1ZjlkNGI1MGQ0ODgzZWVmOThhN2IzODgxOTA5YTY5YWY5ZGI3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.9Hlf_ClHWbSjpsOHm4L4KFk8Bzrdnq_3CJL5aMBY7Gc",
    github: "https://github.com/SuitPumpkin/Gestor_X",
  },
  {
    title: "Pronostika",
    period: "Oct 2025",
    description:
      "Desarrollado para el reto 'Will It Rain On My Parade?' del NASA Space Apps Challenge Guadalajara 2025 como parte del equipo Tamales.bat. Proyecto full-stack que combina diseño frontend y desarrollo backend para visualizar pronósticos meteorológicos.",
    skills: [
      "Front-End Development",
      "Back-End Web Development",
      "Full-Stack Development",
    ],
    image:
      "https://private-user-images.githubusercontent.com/109180144/497637966-6d456094-5761-411b-92dc-d83f878939b7.gif?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjMwMTQxMjYsIm5iZiI6MTc2MzAxMzgyNiwicGF0aCI6Ii8xMDkxODAxNDQvNDk3NjM3OTY2LTZkNDU2MDk0LTU3NjEtNDExYi05MmRjLWQ4M2Y4Nzg5MzliNy5naWY_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMTEzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTExM1QwNjAzNDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hNWNlYWE4YjdmMjA0OWIxYzc3ZTg3ZGUzMGQzNTQwZDQ2YTMxZTJiMTYzNzNlOWY1MjZkZjViMTdlMGQ2ODJjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.DAY8TaYETSmpIz7NqsYB_AFl3Ni9kKZ0ksNvNwEdWuY",
    github:
      "https://github.com/SuitPumpkin/Will-It-Rain-On-My-Parade",
  },
  {
    title: "SuitPumpkin’s Resin Checker",
    period: "May 2024 - Ago 2025",
    description:
      "Aplicación en Python que permite consultar el estado de Resin y otros recursos dentro de los juegos Genshin Impact y Honkai Star Rail, utilizando la API de GenshinPy.",
    skills: ["Python", "API Integration"],
    image:
      "https://private-user-images.githubusercontent.com/109180144/334627777-f2817664-45be-460e-9714-fbd233c4bff1.jpg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjMwMTQxNjIsIm5iZiI6MTc2MzAxMzg2MiwicGF0aCI6Ii8xMDkxODAxNDQvMzM0NjI3Nzc3LWYyODE3NjY0LTQ1YmUtNDYwZS05NzE0LWZiZDIzM2M0YmZmMS5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMTEzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTExM1QwNjA0MjJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lY2JiYmZhZWE4MmYyOTI0ZGQwZmZkZTFmMWRkMjBhZGY5NTJhMDFiZTlhZTUzMTgzMmFhZDI0ZmQ4NGZlMWY5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.Pio-X3i5zp0-cKhbOVUudBEEEymJJr30h5O8Mf18zx4",
    github:
      "https://github.com/SuitPumpkin/SuitPumpkins-Resin-Checker",
  },
  {
    title: "Multimedia Format Converter",
    period: "Ago 2024",
    description:
      "Software simple y funcional desarrollado en .NET para convertir entre múltiples formatos multimedia: imágenes, videos y audios. Permite conversiones masivas con una interfaz intuitiva.",
    skills: ["C#", ".NET Framework", "Git"],
    image:
      "https://private-user-images.githubusercontent.com/109180144/361182309-0fe8106f-0674-4c3b-97e4-77403812006a.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjMwMTQxOTUsIm5iZiI6MTc2MzAxMzg5NSwicGF0aCI6Ii8xMDkxODAxNDQvMzYxMTgyMzA5LTBmZTgxMDZmLTA2NzQtNGMzYi05N2U0LTc3NDAzODEyMDA2YS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMTEzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTExM1QwNjA0NTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xMzBkM2M1ZDMwNWU4OWI5OTlhNTE5N2I2ZDg3OTJkMzBmNjMxOWY4ZDUzZDhjMTMzODFkYjJiMzc5NjAzMzc1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.tJb6FlxH1g-JAfp0XjyXqfH7a6HI27IYLrHYZhmIX0c",
    github:
      "https://github.com/SuitPumpkin/MultimediaFormatConverter",
  },
];

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6 relative">
      {/* 🔸 Fondo suave con brillo degradado */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent blur-3xl" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-semibold text-primary mb-12 text-center drop-shadow-lg"
      >
        Algunos de mis proyectos
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 relative z-10">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-surface border border-slate-800/80 rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-500/20 transition-all duration-500 transform hover:-translate-y-1"
          >
            {/* Imagen con overlay */}
            <div className="relative w-full h-60 overflow-hidden">
              <img
                src={proj.image}
                alt={proj.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

              {/* Etiqueta decorativa */}
              <span className="absolute top-3 left-3 text-xs font-semibold bg-orange-500/80 text-white px-3 py-1 rounded-full backdrop-blur-sm shadow-md">
                Proyecto destacado
              </span>
            </div>

            {/* Contenido */}
            <div className="p-6 flex flex-col h-full">
              <h3 className="text-xl font-semibold text-secondary mb-1">
                {proj.title}
              </h3>
              <p className="text-sm text-muted mb-3">{proj.period}</p>

              <p className="text-onbg text-sm leading-relaxed mb-4">
                {proj.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {proj.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-orange-500/10 text-orange-400 text-xs font-medium px-2 py-1 rounded-md border border-orange-400/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex justify-end">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-orange-400 hover:text-orange-300 font-medium transition-colors flex items-center gap-1"
                >
                  🔗 Ver en GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
