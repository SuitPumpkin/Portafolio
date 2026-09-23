# Suit Pumpkin — Portafolio

Portafolio personal de **Rodrigo Alejandro Loza Navarro** (@SuitPumpkin), desarrollador de software con enfoque generalista.

---

## Identidad de marca

**Suit Pumpkin** representa la combinación de formalidad profesional y creatividad auténtica. La identidad visual se basa en:

- **Simplicidad elegante**: espacio negativo, jerarquías tipográficas claras, composiciones limpias.
- **Paleta**: `#262626` (fondo), `#F2F0EF` (texto), `#AC393B` (acento rojo), `#B39148` (acento dorado).
- **Tipografía**: Sora (principal) + Montserrat (branding y etiquetas con tracking amplio).

---

## Stack tecnológico

| Tecnología | Uso |
|------------|-----|
| **React 19** | Framework principal |
| **Vite** | Build tool y dev server |
| **React Router DOM v7** | Enrutamiento SPA |
| **Tailwind CSS v4** | Estilos utilitarios (configuración vía CSS `@theme`) |
| **Framer Motion** | Animaciones sutiles (fade, slide, reveal) |
| **Lucide React** | Íconos |
| **react-simple-typewriter** | Efecto typewriter en Hero |

---

## Páginas

| Ruta | Sección |
|------|---------|
| `/` | Inicio (Hero) |
| `/sobre-mi` | Sobre mí |
| `/declaracion` | Declaración profesional |
| `/proyectos` | Proyectos |
| `/experiencia` | Experiencia y certificaciones |
| `/contacto` | Contacto |
| `/creatividad-narrativa` | Creatividad Narrativa |

---

## Scripts

```bash
# Desarrollo local
npm run dev

# Build para producción
npm run build

# Linting
npm run lint

# Preview del build
npm run preview
```

---

## Estructura del proyecto

```
src/
├── App.jsx              # Router y layout principal
├── main.jsx             # Entry point
├── index.css            # Estilos globales + @theme (colores, fuentes)
├── components/
│   ├── Navbar.jsx       # Navegación sticky + mobile
│   └── Footer.jsx       # Pie de página
└── pages/
    ├── Home.jsx
    ├── About.jsx
    ├── Declaration.jsx
    ├── Projects.jsx
    ├── Experience.jsx
    ├── Contact.jsx
    └── Creativity.jsx

public/
├── logo.png
├── Foto.png
├── Favicon.ico
├── gestor.png
├── media.png
├── Productshowcase.gif
├── pronostika.gif
└── resine.jpg
```

---

## Despliegue

El proyecto incluye configuración para **Vercel** (`vercel.json`). El build genera los archivos estáticos en `dist/`.

---

## Licencia

© Rodrigo Alejandro Loza Navarro — Todos los derechos reservados.
