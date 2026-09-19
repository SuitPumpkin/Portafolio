import { motion } from "framer-motion";
import { Mail, Smartphone, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-left mb-16"
      >
        <p className="text-suitgold text-xs font-brand tracking-[0.3em] uppercase mb-3">
          Contacto
        </p>
        <h2 className="text-3xl md:text-4xl font-primary font-semibold text-cream mb-6">
          Contacto
        </h2>
        <p className="text-cream/80 max-w-xl text-lg leading-relaxed">
          ¿Tienes un proyecto o simplemente quieres conectar? No dudes
          en llegar.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4"
        >
          <a
            href="mailto:rodrigoalozan@gmail.com"
            className="flex items-center gap-4 p-5 bg-surface/30 border border-cream/5 rounded-xl hover:border-suitred/30 transition-all duration-300 group"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-suitred/10 text-suitred group-hover:bg-suitred group-hover:text-cream transition-all duration-300">
              <Mail size={18} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs text-muted font-brand tracking-[0.15em] uppercase">Correo</p>
              <p className="text-cream text-sm group-hover:text-suitred transition-colors duration-200">
                rodrigoalozan@gmail.com
              </p>
            </div>
          </a>

          <div className="flex items-center gap-4 p-5 bg-surface/30 border border-cream/5 rounded-xl">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-suitgold/10 text-suitgold">
              <Smartphone size={18} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs text-muted font-brand tracking-[0.15em] uppercase">Celular</p>
              <p className="text-cream text-sm">+52 ** **** ****</p>
            </div>
          </div>

          <a
            href="https://github.com/SuitPumpkin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 bg-surface/30 border border-cream/5 rounded-xl hover:border-suitgold/30 transition-all duration-300 group"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-suitgold/10 text-suitgold group-hover:bg-suitgold group-hover:text-bg transition-all duration-300">
              <Github size={18} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs text-muted font-brand tracking-[0.15em] uppercase">GitHub</p>
              <p className="text-cream text-sm group-hover:text-suitgold transition-colors duration-200">
                github.com/SuitPumpkin
              </p>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/SuitPumpkin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 bg-surface/30 border border-cream/5 rounded-xl hover:border-suitred/30 transition-all duration-300 group"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-suitred/10 text-suitred group-hover:bg-suitred group-hover:text-cream transition-all duration-300">
              <Linkedin size={18} strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-xs text-muted font-brand tracking-[0.15em] uppercase">LinkedIn</p>
              <p className="text-cream text-sm group-hover:text-suitred transition-colors duration-200">
                linkedin.com/in/SuitPumpkin
              </p>
            </div>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col justify-center bg-surface/30 border border-cream/5 rounded-xl p-8"
        >
          <p className="text-suitgold text-xs font-brand tracking-[0.3em] uppercase mb-4">
            Directo
          </p>
          <h3 className="text-xl font-primary font-semibold text-cream mb-4">
            Suit Pumpkin
          </h3>
          <p className="text-cream/60 text-sm mb-6">
            Rodrigo Alejandro Loza Navarro
          </p>
          <p className="text-cream/70 text-sm leading-relaxed mb-8">
            Desarrollador Full Stack con enfoque en C#/.NET, creatividad
            digital y diseño narrativo. Apasionado por la tecnología como
            medio para crear experiencias significativas.
          </p>
          <a
            href="mailto:rodrigoalozan@gmail.com"
            className="inline-block text-center border border-suitred text-suitred hover:bg-suitred hover:text-cream text-sm px-8 py-3 rounded-sm transition-all duration-300 tracking-wide font-primary font-medium"
          >
            Contáctame
          </a>
        </motion.div>
      </div>
    </section>
  );
}
