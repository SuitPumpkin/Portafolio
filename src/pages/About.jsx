import { motion } from "framer-motion";
import { Code, Brain, Palette, Trophy } from "lucide-react";

export default function SobreMi() {
  return (
    <section>
      {/* 🌄 Fondo más fluido e integrado */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background/95" />
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[90vw] h-[60vh] bg-orange-500/10 blur-[180px] rounded-full" />
      </div>

      {/* Encabezado animado */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-display font-semibold text-primary mb-4">
          Sobre Mí
        </h2>
        <p className="text-onbg/80 max-w-3xl mx-auto text-lg leading-relaxed">
          Soy un desarrollador de software con enfoque generalista, apasionado por el
          aprendizaje continuo y la creación de soluciones que integren tecnología,
          diseño y narrativa. Me especializo en{" "}
          <b className="text-orange-400">C# .NET</b>,{" "}
          <b className="text-orange-400">Python</b> y desarrollo web con frameworks modernos.
        </p>
      </motion.div>

      {/* Sección principal */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-12 items-center mb-20 max-w-6xl mx-auto"
      >
        {/* Texto */}
        <div className="text-onbg/90 leading-relaxed space-y-6">
          <p>
            Disfruto trabajar en entornos donde puedo combinar mi lado técnico con la
            parte creativa. A lo largo de mi formación en{" "}
            <b className="text-orange-400">Ingeniería en Computación</b> y{" "}
            <b className="text-orange-400">Creatividad Digital</b>, he aprendido a construir
            proyectos escalables, visualmente atractivos y centrados en la experiencia
            del usuario.
          </p>
          <p>
            Creo que la mejor tecnología es aquella que{" "}
            <i className="text-orange-300">cuenta una historia</i>. Busco unir
            la programación, el diseño visual y la narrativa para crear experiencias
            significativas y humanas.
          </p>
        </div>

        {/* Imagen */}
        <div className="flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border border-slate-800">
            <img
              src="/Foto.jpg"
              alt="Alejandro Loza - SuitPumpkin"
              className="object-cover w-full h-full brightness-95 transition-transform duration-500 hover:scale-105"
            />
            {/* Halo difuminado suave */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            <div className="absolute -z-10 w-full h-full blur-3xl bg-orange-500/25 rounded-full"></div>
          </div>
        </div>
      </motion.div>

      {/* Habilidades */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h3 className="text-2xl font-semibold text-secondary mb-8 text-center">
          Habilidades Clave
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            {
              icon: <Code className="w-10 h-10 text-orange-400 mx-auto mb-3" />,
              title: "Desarrollo",
              desc: "C# .NET / Python / React / Vue / SQLite",
            },
            {
              icon: <Brain className="w-10 h-10 text-orange-400 mx-auto mb-3" />,
              title: "Pensamiento Lógico",
              desc: "Optimización, análisis y resolución creativa de problemas.",
            },
            {
              icon: <Palette className="w-10 h-10 text-orange-400 mx-auto mb-3" />,
              title: "Diseño & UX",
              desc: "Figma / Photoshop / Interfaces centradas en el usuario.",
            },
            {
              icon: <Trophy className="w-10 h-10 text-orange-400 mx-auto mb-3" />,
              title: "Certificaciones",
              desc: "+20 certificaciones Google, IBM, Epic Games y más.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl bg-surface/60 backdrop-blur-md border border-slate-800 shadow-lg hover:shadow-orange-400/10 transition-all"
            >
              {card.icon}
              <h4 className="font-semibold text-primary">{card.title}</h4>
              <p className="text-sm text-onbg/70 mt-2">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
