# Portfolio — Azael Pignanessi
## Instrucciones para Claude Code

Este documento contiene todo lo necesario para construir el portfolio de Azael Pignanessi desde cero. Seguí las instrucciones en orden y no omitas ningún detalle.

---

## Stack técnico

- HTML5 semántico
- CSS3 con variables CSS (para dark/light mode)
- JavaScript vanilla (ES modules)
- AOS (Animate On Scroll) vía CDN para animaciones de scroll
- Sin frameworks, sin build steps, sin npm

---

## Hosting

GitHub Pages. El repo se llamará `azael-p.github.io`. La URL final será `https://azael-p.github.io`.

---

## Estructura de archivos

```
azael-p.github.io/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   ├── foto.jpg              ← placeholder genérico por ahora
│   ├── cv-azael-pignanessi.pdf
│   └── favicon.svg
└── README.md
```

---

## Diseño general

### Estilo visual
- Inspirado en mcshannock.design: tipografía grande con carácter, layout asimétrico, animaciones sutiles, paleta contenida
- Minimalista con personalidad — no genérico, no template
- Dark mode como modo predeterminado
- Tipografía: una fuente display con carácter para títulos (ej. Syne, Space Grotesk NO, algo con personalidad) y una fuente legible para cuerpo (ej. DM Sans, Nunito Sans). Importar desde Google Fonts.
- Paleta dark mode: fondo muy oscuro (no negro puro, algo como #0d0d0d o #111), texto casi blanco, un color acento definido y consistente en todo el sitio (elegí uno que funcione bien: puede ser un verde lima, naranja quemado, azul eléctrico — lo que mejor quede con la tipografía elegida). Paleta light mode: fondo casi blanco, texto muy oscuro, mismo acento.
- No usar purple gradients ni Inter ni Roboto ni Arial

### Animaciones
- AOS para animaciones al hacer scroll (fade-up, fade-in) en todas las secciones excepto el hero
- El hero tiene su propia animación de entrada con CSS keyframes (staggered reveal: nombre → rol → CTA)
- Hover states en cards de proyectos y links
- Smooth scroll entre secciones
- Transición suave al cambiar dark/light y al cambiar idioma

### Toggles (navbar)
Dos botones en la navbar:
1. **Dark/Light toggle** — ícono de sol/luna. Cambia una clase `data-theme="dark|light"` en el `<html>`. Las variables CSS cambian según el tema. Guardar preferencia en localStorage.
2. **Idioma toggle** — texto "ES / EN". Cambia entre español e inglés swapeando todos los textos del sitio via atributos `data-i18n` en el HTML y un objeto de traducciones en JS. Guardar preferencia en localStorage. Idioma predeterminado: español.

---

## Navbar

- Fija en la parte superior (sticky), con blur backdrop leve al hacer scroll
- Logo/nombre a la izquierda: "AP" en el acento del sitio
- Links a la derecha: Sobre mí · Proyectos · Skills · Contacto
- Los dos toggles (tema e idioma) al final de la navbar
- En mobile: menú hamburguesa

---

## Secciones

### 1. Hero

- Foto circular a la izquierda (placeholder genérico `assets/foto.jpg`)
- A la derecha: saludo pequeño, nombre grande ("Azael Pignanessi"), rol, descripción corta, dos CTAs
- Layout asimétrico, no centrado
- Animación de entrada staggered con CSS keyframes

**Contenido (con traducciones):**

```
ES:
  saludo: "Hola, soy"
  nombre: "Azael Pignanessi"
  rol: "Full-Stack Developer"
  descripcion: "Desarrollador full-stack uruguayo. Construyo productos web reales — desde sitios para clientes hasta apps propias en producción. Estudiante de Informática en la Universidad de Montevideo."
  cta_primary: "Ver proyectos"
  cta_secondary: "Contactame"

EN:
  saludo: "Hi, I'm"
  nombre: "Azael Pignanessi"
  rol: "Full-Stack Developer"
  descripcion: "Uruguayan full-stack developer. I build real web products — from client websites to my own apps in production. Computer Science student at Universidad de Montevideo."
  cta_primary: "View projects"
  cta_secondary: "Contact me"
```

---

### 2. Sobre mí

**Contenido:**

```
ES:
  titulo: "Sobre mí"
  texto: "Soy estudiante de Licenciatura en Informática en la Universidad de Montevideo con experiencia real en entornos de trabajo exigentes. Trabajé en Mercado Libre analizando miles de transacciones, tomando decisiones críticas con métricas y minimizando fraudes — un contexto donde los datos importan de verdad. Fuera del trabajo, construyo productos propios: una PWA de gimnasio, un SaaS de catálogos para negocios uruguayos, y sitios para clientes reales. Me interesa resolver problemas concretos con código limpio y bien pensado."
  
EN:
  titulo: "About me"
  texto: "I'm a Computer Science student at Universidad de Montevideo with real experience in demanding work environments. I worked at Mercado Libre analyzing thousands of transactions, making critical decisions with internal metrics and minimizing fraud — a context where data actually matters. Outside of work, I build my own products: a gym PWA, a SaaS catalog platform for Uruguayan businesses, and websites for real clients. I'm interested in solving concrete problems with clean, well-thought-out code."
```

---

### 3. Proyectos

Tres cards en grid. Cada card tiene:
- Nombre del proyecto
- Descripción corta
- Stack (badges/pills)
- Botón "Ver demo" (link externo)
- Botón "Ver código" (link a GitHub) — solo si el repo es público
- Hover effect con elevación o borde acento

**Proyectos:**

#### reps.io
```
ES:
  nombre: "reps.io"
  descripcion: "PWA para seguimiento de entrenamientos. Creá programas, registrá series en tiempo real y visualizá tu progreso con gráficos. Arquitectura optimizada para el plan gratuito de Firebase: 49 tests, denormalización de datos y lógica derivada en cliente."
  stack: ["React 19", "Firebase", "Framer Motion", "Recharts", "PWA"]
  demo: "https://reps-io.web.app/"
  github: null  ← repo privado, no mostrar botón

EN:
  nombre: "reps.io"
  descripcion: "Workout tracking PWA. Create programs, log sets in real time and visualize your progress with charts. Architecture optimized for Firebase's free tier: 49 tests, data denormalization and client-side derived logic."
  stack: ["React 19", "Firebase", "Framer Motion", "Recharts", "PWA"]
  demo: "https://reps-io.web.app/"
  github: null
```

#### Galería Demo
```
ES:
  nombre: "Galería Demo"
  descripcion: "Plataforma SaaS de catálogos para negocios que venden por Instagram y WhatsApp. Incluye panel de administración, carga de imágenes en lote, optimización automática a WebP, sincronización en tiempo real y rate limiting."
  stack: ["Node.js", "Express", "Firebase", "Sharp", "Vanilla JS"]
  demo: "https://tienda-galeria-demo.onrender.com/"
  github: "https://github.com/azael-p/galeria-demo"

EN:
  nombre: "Gallery Demo"
  descripcion: "SaaS catalog platform for businesses that sell through Instagram and WhatsApp. Includes admin panel, batch image upload, automatic WebP optimization, real-time sync and rate limiting."
  stack: ["Node.js", "Express", "Firebase", "Sharp", "Vanilla JS"]
  demo: "https://tienda-galeria-demo.onrender.com/"
  github: "https://github.com/azael-p/galeria-demo"
```

#### Estudio Notarial Macías & Berriel
```
ES:
  nombre: "Estudio Notarial Macías & Berriel"
  descripcion: "Sitio web para cliente real en producción. Single-page con cinco secciones, hero animado, carrusel de reseñas de Google Maps actualizado automáticamente via GitHub Actions, y formulario conectado a Google Sheets."
  stack: ["HTML5", "CSS3", "JavaScript", "GitHub Actions", "Google Apps Script"]
  demo: "https://www.estudionotarialmb.uy/"
  github: null  ← no mostrar (repo privado del cliente)

EN:
  nombre: "Macías & Berriel Law Office"
  descripcion: "Website for a real client, live in production. Single-page with five sections, animated hero, Google Maps reviews carousel updated automatically via GitHub Actions, and a form connected to Google Sheets."
  stack: ["HTML5", "CSS3", "JavaScript", "GitHub Actions", "Google Apps Script"]
  demo: "https://www.estudionotarialmb.uy/"
  github: null
```

---

### 4. Skills

Grid visual de tecnologías agrupadas por categoría. No usar barras de progreso — solo íconos/badges con el nombre. Usar Devicons o SVGs simples vía CDN.

**Grupos:**

```
Frontend:
  HTML5, CSS3, JavaScript, React, jQuery

Backend:
  Node.js, Express.js

Bases de datos:
  PostgreSQL, Firebase Firestore

Lenguajes:
  Python, Java

Herramientas:
  Git, GitHub, Power BI, Tableau

EN equivalents:
  "Bases de datos" → "Databases"
  "Herramientas" → "Tools"
```

---

### 5. Certificaciones

Dos cards simples, una por certificación.

```
Certificación 1:
  nombre ES: "The Complete Full-Stack Web Development Bootcamp"
  nombre EN: "The Complete Full-Stack Web Development Bootcamp"
  plataforma: "Udemy"
  instructor: "Dr. Angela Yu"
  fecha ES: "Diciembre 2025"
  fecha EN: "December 2025"
  duracion: "62 horas"
  link: "https://www.udemy.com/certificate/UC-8ec5bb5a-2bb9-4c08-8a6a-fe7d8ccc2ec8/"

Certificación 2:
  nombre ES: "Data Analysis | SQL, Tableau, Power BI & Excel | Real Projects"
  nombre EN: "Data Analysis | SQL, Tableau, Power BI & Excel | Real Projects"
  plataforma: "Udemy"
  instructor: "Graeme Gordon"
  fecha ES: "Diciembre 2025"
  fecha EN: "December 2025"
  duracion: "12.5 horas"
  link: "https://www.udemy.com/certificate/UC-a3e23f19-be53-4662-9fd2-1890442a780c/"
```

---

### 6. Contacto

Sección simple, sin formulario. Solo links con íconos.

```
Email: pignanessiazael@gmail.com
GitHub: https://github.com/azael-p
LinkedIn: https://linkedin.com/in/azael-pignanessi-a43543220
WhatsApp: https://wa.me/59898238313

ES:
  titulo: "Contacto"
  subtitulo: "¿Tenés un proyecto en mente o querés hablar? Escribime."
  cv_label: "Descargar CV"

EN:
  titulo: "Contact"
  subtitulo: "Have a project in mind or want to talk? Reach out."
  cv_label: "Download CV"
```

El CV descargable está en `assets/cv-azael-pignanessi.pdf`.

---

## Footer

```
ES: "Diseñado y desarrollado por Azael Pignanessi · 2025"
EN: "Designed and developed by Azael Pignanessi · 2025"
```

---

## SEO y meta tags

Incluir en el `<head>` de `index.html`:

```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="Portfolio de Azael Pignanessi — Full-Stack Developer uruguayo. Proyectos en producción, desarrollo web y análisis de datos." />
<meta name="keywords" content="Azael Pignanessi, desarrollador web, full-stack, Uruguay, React, Node.js, Firebase" />
<meta name="author" content="Azael Pignanessi" />

<!-- Open Graph -->
<meta property="og:title" content="Azael Pignanessi — Full-Stack Developer" />
<meta property="og:description" content="Portfolio de Azael Pignanessi — desarrollador full-stack uruguayo con proyectos reales en producción." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://azael-p.github.io" />
<meta property="og:image" content="https://azael-p.github.io/assets/foto.jpg" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Azael Pignanessi — Full-Stack Developer" />
<meta name="twitter:description" content="Portfolio de Azael Pignanessi — desarrollador full-stack uruguayo." />

<title>Azael Pignanessi — Full-Stack Developer</title>
```

---

## Favicon

Crear un favicon SVG simple con las iniciales "AP" en el color acento del sitio. Guardarlo en `assets/favicon.svg` y referenciarlo en el `<head>`.

---

## Página 404

Crear un archivo `404.html` en la raíz (requerido por GitHub Pages) con:
- Mismo estilo visual que el portfolio
- Mensaje simple: "Esta página no existe" / "This page doesn't exist"
- Botón para volver al inicio

---

## Implementación del sistema de traducciones

Cada elemento de texto en el HTML debe tener un atributo `data-i18n="clave"`. En `main.js` definir un objeto con todas las traducciones:

```js
const translations = {
  es: { ... },
  en: { ... }
}
```

Al cambiar idioma, iterar todos los elementos con `data-i18n` y reemplazar su `textContent` con la traducción correspondiente. Guardar idioma activo en `localStorage`.

---

## Implementación del toggle dark/light

- Variable `data-theme` en el elemento `<html>`
- Variables CSS definidas en `:root[data-theme="dark"]` y `:root[data-theme="light"]`
- Dark mode es el predeterminado
- Al cargar la página, verificar `localStorage` para respetar preferencia guardada
- La transición entre temas debe ser suave (`transition: background-color 0.3s, color 0.3s`)

---

## AOS (Animate On Scroll)

Cargar via CDN:
```html
<link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css" />
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
```

Inicializar con:
```js
AOS.init({ duration: 700, once: true, offset: 80 });
```

Usar `data-aos="fade-up"` en las secciones y cards. El hero no usa AOS — usa su propia animación CSS.

---

## Notas finales para Claude Code

- Escribir CSS limpio con variables, sin !important innecesarios
- El JS debe estar bien organizado: separar la lógica de traducciones, la de tema, y la de AOS en funciones claras
- Testear que ambos toggles funcionen correctamente y que las preferencias persistan al recargar
- Asegurarse de que el sitio sea completamente responsive (mobile-first)
- No usar librerías adicionales más allá de AOS y Google Fonts
- La foto `assets/foto.jpg` es un placeholder — usar una imagen genérica de perfil por ahora
