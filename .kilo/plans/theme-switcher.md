# Plan: switch de tema claro/oscuro con tokens semánticos de marca

## Objetivo

Botón pequeño de Sol/Luna en el navbar que alterna entre tema oscuro (actual) y tema claro,
sin cambiar la estética general. El tema claro se construye con **tokens semánticos
dependientes del tema**, conservando intacta la paleta oficial de marca.

---

## 1. Hallazgos verificados (no supuestos)

| # | Hallazgo | Evidencia |
|---|---|---|
| 1 | **Tailwind v4 compila las utilidades a `var(--color-*)`**, no a literales. Sobrescribir las variables cambia todo el sitio sin tocar una sola clase. | `dist/assets/*.css`: `.bg-bg{background-color:var(--color-bg)}`, `.text-suitgold{color:var(--color-suitgold)}` |
| 2 | Las variables de `@theme` se emiten como custom properties en `:root`. | mismo CSS: `--color-bg:#262626;--color-surface:#303030;...` |
| 3 | **110 usos de tokens en 9 archivos**, cero hex hardcodeados en `.jsx`. Todo el color pasa por tokens. | grep sobre `src/**/*.jsx` |
| 4 | `tailwind.config.js` es **código muerto**: Tailwind v4 no lo carga sin `@config`, y no hay `@config` en el proyecto. Contiene una copia obsoleta de la paleta. | `src/index.css:1` solo tiene `@import "tailwindcss"` |
| 5 | Hay un **`:root` duplicado** con los mismos 6 colores, consumido por CSS crudo (`body`, `h1-h6`, `::selection`, `.contact-beam`). Dos fuentes de verdad. | `src/index.css:46-53` vs `:3-9` |
| 6 | **El logo se rompería en tema claro.** PNG 5933×1949 con transparencia (solo 25.3% de píxeles visibles) y arte **claro**: RGB medio 212,162,162, luminancia ≈0.68. Sobre crema #F2F0EF da **1.28:1** → invisible. | inspección del PNG con `System.Drawing` |
| 7 | Dos textos de bajo énfasis quedan ilegibles en claro: `text-cream/50` → **2.96:1** y `text-cream/60` → **4.45:1**. | `Experience.jsx:90`, `Contact.jsx:98` |
| 8 | No hay SSR (Vite SPA), pero sí hay riesgo de **FOUC**: hay que aplicar el tema antes del primer paint. | `index.html:1-19`, `main.jsx` |

---

## 2. Arquitectura de tokens

Dos capas, como pide el manual de marca.

### Capa 1 — Primitivas de marca (constantes, inmutables)

Se declaran en `@theme` para que generen utilidades, y son **idénticas en ambos temas**.

```css
@theme {
  /* Identidad de marca — no cambiar */
  --color-brand-black: #262626;
  --color-brand-red:   #AC393B;
  --color-brand-gold:  #B39148;
  --color-light-bg:    #F2F0EF;
  /* Neutros no-marca, también fijos */
  --color-surface-dark: #303030;
  --color-muted-dark:   #9a9a9a;
}
```

### Capa 2 — Tokens semánticos (cambian por tema)

`@theme` lleva los valores **oscuros** (para que Tailwind emita las utilidades) y un bloque
`:root[data-theme="light"]` los sobreescribe. Se usa `:root[data-theme=...]` y no `[data-theme=...]`
para que la especificidad (0,2,0) gane siempre a la del `:root` de `@theme` (0,1,0), sin depender
del orden de cascada.

```css
:root {
  color-scheme: dark;
  --color-background:   var(--color-brand-black);
  --color-surface:      var(--color-surface-dark);
  --color-text:         var(--color-light-bg);
  --color-muted:        var(--color-muted-dark);
  --color-line:         var(--color-text);
  --color-accent:       var(--color-brand-gold);   /* #B39148 — funcional en oscuro */
  --color-accent-brand: var(--color-brand-gold);   /* #B39148 — decorativo, ambos temas */
  --color-highlight:    var(--color-brand-red);    /* #AC393B — ambos temas */
  --color-on-accent:    var(--color-light-bg);     /* texto sobre relleno saturado */
}

:root[data-theme="light"] {
  color-scheme: light;
  --color-background:   var(--color-light-bg);     /* #F2F0EF */
  --color-surface:      #E6E2DF;                   /* ← único valor derivado, ver §6 */
  --color-text:         var(--color-brand-black);  /* #262626 */
  --color-muted:        #666563;                   /* ← único valor derivado, ver §6 */
  --color-line:         var(--color-text);
  --color-accent:       #806329;                   /* dorado accesible */
  --color-accent-brand: var(--color-brand-gold);   /* #B39148 intacto */
  --color-highlight:    var(--color-brand-red);    /* #AC393B intacto */
  --color-on-accent:    var(--color-light-bg);
}
```

`--color-accent` cumple exactamente el rol de tu spec: **funcional dependentemente del tema**
(`#B39148` en oscuro, `#806329` en claro). `--color-accent-brand` queda congelado en `#B39148`
para logo, brillos y decoración. Ningún componente conocerá un hex.

### Tabla de valores y contraste verificado

| Token | Oscuro | Claro | Contraste en su tema |
|---|---|---|---|
| `--color-background` | `#262626` | `#F2F0EF` | — |
| `--color-surface` | `#303030` | `#E6E2DF` | — |
| `--color-text` | `#F2F0EF` | `#262626` | 15.4:1 / 13.4:1 |
| `--color-muted` | `#9a9a9a` | `#666563` | 5.38:1 / 5.08:1 |
| `--color-accent` | `#B39148` | `#806329` | 5.09:1 / 4.67:1 |
| `--color-accent-brand` | `#B39148` | `#B39148` | decorativo, no aplica |
| `--color-highlight` | `#AC393B` | `#AC393B` | 2.46:1 / 5.46:1 |
| `--color-on-accent` | `#F2F0EF` | `#F2F0EF` | 5.46:1 sobre rojo |

---

## 3. Mapeo de clases (110 ocurrencias, 9 archivos)

Aplicar en todo `src/`. Es 1:1, sin cambiar opacidades ni estructura.

| Clase actual | Clase nueva | Token |
|---|---|---|
| `bg-bg` | `bg-background` | fondo |
| `surface` | `surface` (sin cambio) | superficie |
| `cream` (texto) | `text` | texto principal |
| `muted` | `muted` (sin cambio) | secundario |
| `suitgold` | `accent` | **dorado funcional por tema** |
| `suitgold` (glows/decorativo) | `accent-brand` | `#B39148` congelado |
| `suitred` | `highlight` | rojo, igual en ambos temas |
| `border-cream/N` | `border-line/N` | hairline = texto a baja alfa |
| `hover:bg-suitgold hover:text-bg` | `hover:bg-accent hover:text-background` | ya funciona en ambos temas |
| `hover:bg-suitred hover:text-cream` | `hover:bg-highlight hover:text-on-accent` | crema sobre relleno rojo, preserva el look actual |

Casos puntuales que no son 1:1:

- `Home.jsx:16` `bg-suitred/8` → `bg-highlight/8`; `Home.jsx:17` `bg-suitgold/5` → **`bg-accent-brand/5`** (glow decorativo: se mantiene el dorado oficial).
- `Experience.jsx:90` `text-cream/50` → **`text-muted`** (2.96:1 → 5.38:1).
- `Contact.jsx:98` `text-cream/60` → **`text-muted`** (4.45:1 → 5.38:1).
  En oscuro el cambio es imperceptible: `#F2F0EF` al 50% sobre `#262626` compone ≈ `#8C8B8B`, y `--color-muted` es `#9a9a9a`.
- `src/index.css:60,61,69,74,118` — `var(--bg)`, `var(--cream)`, `var(--suitred)` → `var(--color-background)`, `var(--color-text)`, `var(--color-highlight)`. Se **borra** el bloque `:root` duplicado (`:46-53`).

---

## 4. Archivos a tocar

### 4.1 `src/index.css` — capa de tokens

Reescribir `@theme` (`:3-44`) con primitivas + semánticos oscuros; borrar `:root` duplicado (`:46-53`);
actualizar las 5 vars crudas; añadir `color-scheme`.

### 4.2 `index.html` — bootstrap sin FOUC

Antes de `</head>`, script inline síncrono que fija el tema antes del primer paint:

```html
<script>
  (function () {
    try {
      var stored = localStorage.getItem("suit-theme");
      var theme =
        stored === "light" || stored === "dark"
          ? stored
          : window.matchMedia("(prefers-color-scheme: light)").matches
            ? "light"
            : "dark";
      document.documentElement.dataset.theme = theme;
    } catch (e) {
      document.documentElement.dataset.theme = "dark";
    }
  })();
</script>
```

```html
<meta name="color-scheme" content="dark light" />
```

Cumple tu requisito: sistema como valor inicial **solo si no hay preferencia guardada**; después manda la elección explícita.

### 4.3 `src/hooks/useTheme.js` (nuevo)

```jsx
import { useCallback, useState } from "react";

const STORAGE_KEY = "suit-theme";

function readInitialTheme() {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

export default function useTheme() {
  const [theme, setTheme] = useState(readInitialTheme);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (e) {
        /* modo privado: el cambio sigue visible en esta sesión */
      }
      return next;
    });
  }, []);

  return { theme, toggleTheme };
}
```

Lee el DOM que ya fijó el script inline → **sin flash y sin efecto de montaje** que pueda dispararse dos veces bajo `React.StrictMode`.

### 4.4 `src/components/ThemeToggle.jsx` (nuevo)

Sigue el idioma visual del hamburger existente (`Navbar.jsx:29-35`): lucide, `strokeWidth={1.5}`, transición de color a dorado, sin borde.

```jsx
import { Moon, Sun } from "lucide-react";
import useTheme from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
      title={isDark ? "Tema claro" : "Tema oscuro"}
      className="text-text/70 hover:text-accent transition-colors duration-200"
    >
      {isDark ? <Sun size={20} strokeWidth={1.5} /> : <Moon size={20} strokeWidth={1.5} />}
    </button>
  );
}
```

`size={20}` (no 24) para que se lea como control secundario frente al menú.

### 4.5 `src/components/Navbar.jsx` — montaje

Envolver theme toggle + hamburger + `<ul>` en un contenedor derecho. El wrapper es `static`, así que
el `<ul>` desplegable (`absolute left-0 w-full top-[60px]`) sigue resolviendo contra el `<nav>` `sticky`
→ **cero cambio de comportamiento en móvil**.

```jsx
<div className="flex items-center gap-5 md:gap-8">
  <ThemeToggle />
  <button className="md:hidden …">…</button>
  <ul …>…</ul>
</div>
```

### 4.6 Resto de archivos

Mapeo mecánico §3 en: `App.jsx`, `components/Footer.jsx`, `pages/Home.jsx`, `About.jsx`,
`Declaration.jsx`, `Projects.jsx`, `Experience.jsx`, `Contact.jsx`.

### 4.7 `tailwind.config.js` — borrar (propuesto)

Código muerto con una copia obsoleta de la paleta. Contradice directamente la regla de fuente única
que pide el manual. Borrarlo no cambia nada del output. **Lo hago solo con tu OK.**

---

## 5. Verificación

1. `npm run lint` y `npm run build` en verde.
2. Auditoría: ningún hex fuera de `src/index.css`; ningún token viejo (`suitgold|cream|suitred|-bg`) en `.jsx`.
3. `npm run dev` y recorrer las 6 rutas en ambos temas.
4. Recargar tras cambiar de tema → persiste, **sin flash**.
5. Primer visita con `prefers-color-scheme: light` → arranca en claro.
6. Alternar tema con el botón → `bg`, `text`, `surface`, `muted`, eyebrows, nav activo, chips y borders cambian; glows y logo conservan `#B39148`.
7. Contraste de los estados de hover de la CTA principal.

---

## 6. Necesito tu OK en 3 puntos

**(a) El logo — es arte claro sobre fondo claro (1.28:1).** *No bloquea la implementación:*
avanzo con el filtro CSS de recoloreado a silueta roja y lo dejo aislado para que sustituirlo sea trivial.

```jsx
// Navbar.jsx — única línea que cambia si consigues el asset real
className="h-10 w-auto transition-opacity duration-300 group-hover:opacity-80 logo-theme"
```

```css
/* el filtro solo aplica al logo y solo en tema claro */
:root[data-theme="light"] .logo-theme {
  filter: brightness(0) invert(24%) sepia(45%) saturate(1200%) hue-rotate(340deg);
}
```

Con un `logo NEW light.png` real (arte en `#262626` o `#AC393B`) se borra la regla CSS y se cambia
el `src` por el asset de claro. Es la solución correcta de marca; el filtro es el puente.

Aviso: el filtro aplana el logo a silueta. **No puedo verificar visualmente** que no pierda detalle
interno (este modelo no acepta imágenes) — si al verlo en el navegador se ve peor de lo esperado,
pásame el asset y lo cambio.

**(b) Dos neutros derivados que no están en tu spec.** `--color-surface` claro `#E6E2DF` y
`--color-muted` claro `#666563`. Los necesito para que `bg-surface/30` se levante sobre el crema y
para que el texto secundario llegue a AA. Son los **únicos 2 valores** que no salen literalmente del
manual. Si tienes un equivalentepropio en la marca, lo sustituyo.

**(c) Borrar `tailwind.config.js`.** Ver §4.7.

---

## 7. Fuera de alcance (detectado, no lo toco)

- `hover:text-suitred` sobre fondo oscuro da **2.46:1** (rojo sobre `#262626`). Ya está roto hoy; en claro pasa a 5.46:1. No lo cambio para no alterar la estética.
- `brightness-[0.92]` en las fotos: se mantiene en claro, forma parte del tono editorial.
- `Projects.jsx:151` `duration-400`: no es una clase de Tailwind, hoy es un no-op.
- README desalineado (`framer-motion` no está instalado; documenta un `Creativity.jsx` inexistente).
- Sin *typecheck*: el proyecto es JS puro y no tiene `tsconfig.json`.