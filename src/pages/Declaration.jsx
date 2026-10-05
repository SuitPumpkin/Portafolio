import Reveal from "../components/Reveal";
import { Lightbulb, Code2, Sparkles } from "lucide-react";

const concepts = [
  {
    icon: <Lightbulb className="text-suitgold w-8 h-8 mb-4" strokeWidth={1.5} />,
    title: "Creatividad",
    desc: "Transformar la inspiración en ideas tangibles que conecten con las personas.",
  },
  {
    icon: <Code2 className="text-suitgold w-8 h-8 mb-4" strokeWidth={1.5} />,
    title: "Tecnología",
    desc: "Desarrollar soluciones sólidas y escalables aplicando principios de ingeniería limpia.",
  },
  {
    icon: <Sparkles className="text-suitgold w-8 h-8 mb-4" strokeWidth={1.5} />,
    title: "Innovación",
    desc: "Integrar narrativa, diseño y tecnología para crear experiencias que dejen huella.",
  },
];

export default function Declaration() {
  return (
    <section className="max-w-5xl mx-auto py-20 px-6">
      <div className="animate-fade-in-up text-left mb-16">
        <p className="text-suitgold text-xs font-brand tracking-[0.3em] uppercase mb-3">
          Declaración
        </p>
        <h2 className="text-3xl md:text-4xl font-primary font-semibold text-cream mb-6">
          Declaración profesional
        </h2>
        <p className="text-cream/80 max-w-2xl text-lg leading-relaxed">
          Creo en la tecnología como una herramienta para construir experiencias
          significativas. Mi enfoque combina lógica, creatividad y diseño para
          transformar ideas complejas en soluciones accesibles y funcionales.
          Busco participar en proyectos donde la innovación y la narrativa se
          unan para generar impacto real.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {concepts.map((c, i) => (
          <Reveal
            key={i}
            y={20}
            duration={0.5}
            delay={i * 0.1}
            lift
            className="flex flex-col items-center text-center bg-surface/50 border border-cream/5 rounded-xl p-8 transition-all duration-300 hover:border-suitgold/20"
          >
            {c.icon}
            <h3 className="text-lg font-semibold text-cream mb-2 font-primary">
              {c.title}
            </h3>
            <p className="text-sm text-muted leading-relaxed">{c.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
