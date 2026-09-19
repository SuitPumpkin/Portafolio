import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <section className="min-h-[90vh] flex flex-col md:flex-row items-center bg-bg">
      <div className="relative w-full md:w-[45%] h-[60vh] md:h-[85vh] flex justify-center items-center px-6 md:px-0">
        <div className="relative w-[80%] md:w-[75%] aspect-[3/4] overflow-hidden rounded-2xl">
          <img
            src="/Foto.jpg"
            alt="Rodrigo Alejandro Loza Navarro — SuitPumpkin"
            className="object-contain w-full h-full rounded-2xl brightness-[0.92] transition-transform duration-700 hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/30 to-transparent rounded-2xl" />
        </div>
        <div className="absolute -z-10 w-[70%] h-[70%] rounded-full bg-suitred/8 blur-[120px]" />
        <div className="absolute -z-10 w-[50%] h-[50%] rounded-full bg-suitgold/5 blur-[100px] top-[20%] left-[10%]" />
      </div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-[55%] px-6 md:px-12 lg:px-16 py-12 text-center md:text-left"
      >
        <p className="text-suitgold text-xs font-brand tracking-[0.3em] uppercase mb-4">
          Desarrollador de Software
        </p>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-primary font-semibold text-cream mb-4 leading-tight">
          Rodrigo Alejandro
          <br />
          Loza Navarro
        </h1>

        <p className="text-muted text-sm font-brand tracking-[0.15em] uppercase mb-8">
          @SuitPumpkin
        </p>

        <h2 className="text-xl md:text-2xl text-suitred font-primary font-medium mb-6 h-[2.5rem] md:h-[2.8rem]">
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
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h2>

        <p className="text-cream/80 text-sm md:text-base leading-relaxed max-w-lg mb-10">
          Desarrollador de software con experiencia en C# .NET, Python y
          tecnologías web y móviles. Apasionado por crear soluciones escalables
          y bien estructuradas, combinando desarrollo técnico con diseño
          narrativo y creatividad digital.
        </p>

        <div className="flex justify-center md:justify-start">
          <Link
            to="/sobre-mi"
            className="inline-block border border-suitred text-suitred hover:bg-suitred hover:text-cream text-sm px-8 py-3 rounded-sm transition-all duration-300 tracking-wide font-primary font-medium"
          >
            Ver más
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
