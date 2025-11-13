import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section>
      {/* Fondo suave y difuminado */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[90vw] h-[60vh] bg-orange-500/10 blur-[160px] rounded-full" />
      </div>

      {/* Tarjeta de contacto */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-surface/70 backdrop-blur-lg border border-slate-800 rounded-3xl shadow-md hover:shadow-yellow-100/30 p-10 w-full max-w-md text-center transition-all duration-500"
      >
        {/* Imagen de perfil */}
        <div className="relative w-32 h-32 mx-auto mb-5">
          <img
            src="/Foto.jpg"
            alt="SuitPumpkin avatar"
            className="rounded-full border-4 border-orange-400 object-cover w-full h-full shadow-lg"
          />
          <div className="absolute inset-0 rounded-full blur-xl bg-orange-500/20 -z-10"></div>
        </div>

        {/* Nombre / alias */}
        <h2 className="text-3xl font-display font-semibold text-primary">
          SuitPumpkin
        </h2>
        <p className="text-orange-400 opacity-80 text-sm mt-1">
          Rodrigo Alejandro Loza Navarro
        </p>

        {/* Descripción breve */}
        <p className="mt-4 text-onbg leading-relaxed text-sm">
          Desarrollador Full Stack con enfoque en C#/.NET, creatividad digital y
          diseño narrativo. Apasionado por la tecnología como medio para crear
          experiencias significativas.
        </p>

        {/* Información de contacto */}
        <div className="mt-8 text-left space-y-2 text-onbg/90 text-sm">
          <p>
            <span className="text-secondary font-semibold">📧 Correo:</span>{" "}
            <a
              href="mailto:rodrigoalozan@gmail.com"
              className="hover:text-orange-400 transition-colors"
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
              className="hover:text-orange-400 transition-colors"
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
              className="hover:text-orange-400 transition-colors"
            >
              linkedin.com/in/SuitPumpkin
            </a>
          </p>
        </div>

        {/* Botón centrado */}
        <div className="mt-10 flex justify-center">
          <motion.a
            href="mailto:rodrigoalozan@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary text-sm px-8 py-3 shadow-md shadow-yellow-100/30 hover:shadow-lg hover:shadow-yellow-100/40 transition-all duration-300"
          >
            ✉️ Contáctame
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
