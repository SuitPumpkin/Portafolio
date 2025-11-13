import { motion } from "framer-motion";
import { Lightbulb, Code2, Sparkles } from "lucide-react";

export default function Declaracion() {
  return (
    <section className="relative max-w-5xl mx-auto py-20 px-6">
      {/* 🌄 Fondo más fluido e integrado */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background/95" />
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[90vw] h-[60vh] bg-orange-500/10 blur-[180px] rounded-full" />
      </div>

      {/* Contenido principal */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-10"
      >
        <div>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-primary mb-4">
            Declaración profesional
          </h2>
          <p className="text-lg text-onbg/90 max-w-3xl mx-auto leading-relaxed">
            Creo en la tecnología como una herramienta para construir experiencias
            significativas. Mi enfoque combina lógica, creatividad y diseño para
            transformar ideas complejas en soluciones accesibles y funcionales.
            Busco participar en proyectos donde la innovación y la narrativa se
            unan para generar impacto real.
          </p>
        </div>

        {/* Íconos conceptuales */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center text-center bg-surface/60 backdrop-blur-lg border border-slate-800 rounded-2xl p-6 w-64 shadow-lg"
          >
            <Lightbulb className="text-orange-400 w-10 h-10 mb-3" />
            <h3 className="text-lg font-semibold text-primary">Creatividad</h3>
            <p className="text-sm text-onbg/70 mt-2">
              Transformar la inspiración en ideas tangibles que conecten con las personas.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center text-center bg-surface/60 backdrop-blur-lg border border-slate-800 rounded-2xl p-6 w-64 shadow-lg"
          >
            <Code2 className="text-orange-400 w-10 h-10 mb-3" />
            <h3 className="text-lg font-semibold text-primary">Tecnología</h3>
            <p className="text-sm text-onbg/70 mt-2">
              Desarrollar soluciones sólidas y escalables aplicando principios de ingeniería limpia.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center text-center bg-surface/60 backdrop-blur-lg border border-slate-800 rounded-2xl p-6 w-64 shadow-lg"
          >
            <Sparkles className="text-orange-400 w-10 h-10 mb-3" />
            <h3 className="text-lg font-semibold text-primary">Innovación</h3>
            <p className="text-sm text-onbg/70 mt-2">
              Integrar narrativa, diseño y tecnología para crear experiencias que dejen huella.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
