import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="flex flex-col items-center justify-center py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-surface rounded-2xl shadow-card border border-slate-800 p-8 w-full max-w-md"
      >
        {/* Imagen de perfil */}
        <div className="relative w-32 h-32 mx-auto mb-5">
          <img
            src="https://avatars.githubusercontent.com/u/11822557?v=4"
            alt="SuitPumpkin avatar"
            className="rounded-full border-4 border-primary object-cover w-full h-full shadow-lg"
          />
        </div>

        {/* Nombre / alias */}
        <h2 className="text-3xl font-display font-semibold text-primary">
          SuitPumpkin
        </h2>
        <p className="text-muted mt-1">Alejandro Loza</p>

        {/* Descripción breve */}
        <p className="mt-4 text-onbg leading-relaxed text-sm">
          Junior C#/.NET Developer | Remote & Hybrid | Full Stack Enthusiast 🌟💻
        </p>

        {/* Información de contacto */}
        <div className="mt-6 text-left space-y-2 text-onbg text-sm">
          <p>
            <span className="text-secondary font-semibold">📧 Correo:</span>{" "}
            <a
              href="mailto:rodrigoalozan@gmail.com"
              className="hover:text-primary transition-colors"
            >
              rodrigoalozan@gmail.com
            </a>
          </p>
          <p>
            <span className="text-secondary font-semibold">📱 Celular:</span>{" "}
            +52 33 2809 0287
          </p>
          <p>
            <span className="text-secondary font-semibold">🐙 GitHub:</span>{" "}
            <a
              href="https://github.com/SuitPumpkin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              github.com/SuitPumpkin
            </a>
          </p>
          <p>
            <span className="text-secondary font-semibold">💼 LinkedIn:</span>{" "}
            <a
              href="https://linkedin.com/in/SuitPumpkin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              linkedin.com/in/SuitPumpkin
            </a>
          </p>
        </div>

        {/* Botón centrado */}
        <div className="mt-8 flex justify-center">
          <a
            href="mailto:rodrigoalozan@gmail.com"
            className="btn-primary text-sm px-6 py-3"
          >
            ✉️ Contáctame
          </a>
        </div>
      </motion.div>
    </section>
  );
}
