import { motion } from "framer-motion";
import { Code, Brain, Palette, Trophy } from "lucide-react";

export default function About() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-left mb-16"
      >
        <p className="text-suitgold text-xs font-brand tracking-[0.3em] uppercase mb-3">
          Acerca de mí
        </p>
        <h2 className="text-3xl md:text-4xl font-primary font-semibold text-cream mb-6">
          Sobre Mí
        </h2>
        <p className="text-cream/80 max-w-2xl text-lg leading-relaxed">
          Soy un desarrollador de software con enfoque generalista, apasionado
          por el aprendizaje continuo y la creación de soluciones que integren
          tecnología, diseño y narrativa.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start mb-20 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-cream/80 leading-relaxed space-y-6"
        >
          <p>
            Disfruto trabajar en entornos donde puedo combinar mi lado técnico
            con la parte creativa. A lo largo de mi formación en Ingeniería en
            Computación y Creatividad Digital, he aprendido a construir proyectos
            escalables, visualmente atractivos y centrados en la experiencia del
            usuario.
          </p>
          <p>
            Creo que la mejor tecnología es aquella que{" "}
            <em className="text-suitgold not-italic">cuenta una historia</em>.
            Busco unir la programación, el diseño visual y la narrativa para
            crear experiencias significativas y humanas.
          </p>
          <p>
            Suit Pumpkin nace como unnickname de Minecraft que creció hasta
            convertirse en una marca personal: un perfil profesional que
            combina formalidad, creatividad y un enfoque diferente hacia la
            tecnología.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-cream/10">
            <img
              src="/Foto.webp"
              alt="Alejandro Loza — SuitPumpkin"
              className="object-cover w-full h-full brightness-[0.92] transition-transform duration-500 hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <p className="text-suitgold text-xs font-brand tracking-[0.3em] uppercase mb-4 text-center">
          Competencias
        </p>
        <h3 className="text-2xl font-primary font-semibold text-cream mb-10 text-center">
          Habilidades Clave
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            {
              icon: <Code className="w-8 h-8 text-suitgold mx-auto mb-4" strokeWidth={1.5} />,
              title: "Desarrollo",
              desc: "C# .NET / Python / React / Vue / SQLite",
            },
            {
              icon: <Brain className="w-8 h-8 text-suitgold mx-auto mb-4" strokeWidth={1.5} />,
              title: "Pensamiento Lógico",
              desc: "Optimización, análisis y resolución creativa de problemas.",
            },
            {
              icon: <Palette className="w-8 h-8 text-suitgold mx-auto mb-4" strokeWidth={1.5} />,
              title: "Diseño & UX",
              desc: "Figma / Photoshop / Interfaces centradas en el usuario.",
            },
            {
              icon: <Trophy className="w-8 h-8 text-suitgold mx-auto mb-4" strokeWidth={1.5} />,
              title: "Certificaciones",
              desc: "+20 certificaciones Google, IBM, Epic Games y más.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-xl bg-surface/50 border border-cream/5 transition-all duration-300 hover:border-suitgold/20"
            >
              {card.icon}
              <h4 className="font-semibold text-cream text-sm mb-2">{card.title}</h4>
              <p className="text-sm text-muted leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
