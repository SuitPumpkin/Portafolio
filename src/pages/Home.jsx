import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <section className="min-h-[90vh] flex flex-col md:flex-row items-center justify-center bg-background">
      {/* Imagen a la izquierda */}
      <div className="relative w-full md:w-1/2 h-[60vh] md:h-[90vh] flex justify-center items-center">
        <div className="relative w-[85%] md:w-[90%] aspect-[3/4] overflow-hidden rounded-3xl shadow-2xl">
          <img
            src="/Foto.jpg"
            alt="Rodrigo Alejandro Loza Navarro - SuitPumpkin"
            className="object-contain w-full h-full rounded-3xl filter brightness-95 transition-transform duration-500 hover:scale-[1.02]"
          />
          {/* Degradado suave */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent rounded-3xl" />
        </div>

        {/* Brillo naranja detrás de la foto */}
        <div className="absolute -z-10 w-[90%] h-[90%] rounded-full bg-gradient-to-tr from-orange-500/40 via-yellow-400/20 to-transparent blur-[200px] animate-pulse"></div>
      </div>

      {/* Texto a la derecha */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full md:w-1/2 px-6 md:px-12 py-10 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-5xl font-display font-semibold text-primary mb-2">
          Rodrigo Alejandro Loza Navarro
        </h1>
        <p className="text-lg md:text-xl text-orange-500 mb-4 font-medium tracking-wide opacity-70">
          @SuitPumpkin
        </p>

        <h2 className="text-xl md:text-2xl text-secondary mb-4 h-[2rem]">
          <Typewriter
            words={[
              "Full-Stack Developer",
              "Creative Technologist",
              "Game Developer",
              "Software Engineer",
              "Narrative Designer",
              "UI/UX Designer",
              "C# .NET Developer",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h2>

        <p className="text-onbg text-sm md:text-base leading-relaxed max-w-lg">
          Desarrollador de software con experiencia en C# .NET, Python y tecnologías
          web y móviles. Apasionado por la creación de soluciones escalables y
          bien estructuradas, combinando desarrollo técnico con diseño narrativo y
          creatividad digital.
        </p>

        <div className="mt-8 flex justify-center md:justify-start">
          <Link
            to="/sobre-mi"
            className="btn-primary text-sm px-6 py-3"
          >
            Ver más
          </Link>

        </div>
      </motion.div>
    </section>
  );
}
