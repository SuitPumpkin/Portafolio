import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  delay = 0,
  duration = 0.6,
  x = 0,
  y = 24,
  scale = 1,
  lift = false,
  className = "",
}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const supportsIO = typeof IntersectionObserver !== "undefined";

  useEffect(() => {
    if (!supportsIO) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [supportsIO]);

  if (!supportsIO) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "reveal-visible" : ""} ${
        lift ? "reveal-hover-lift" : ""
      } ${className}`.trim()}
      style={{
        transitionDelay: `${delay}s`,
        transitionDuration: `${duration}s`,
        "--reveal-x": `${x}px`,
        "--reveal-y": `${y}px`,
        "--reveal-scale": scale,
      }}
    >
      {children}
    </div>
  );
}
