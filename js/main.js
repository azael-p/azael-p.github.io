const translations = {
  es: {
    nav_about: "Sobre mí",
    nav_projects: "Proyectos",
    nav_skills: "Skills",
    nav_contact: "Contacto",
    hero_greeting: "Hola, soy",
    hero_role: "Full-Stack Developer",
    hero_description: "Desarrollador full-stack uruguayo. Construyo productos web reales — desde sitios para clientes hasta apps propias en producción. Estudiante de Informática en la Universidad de Montevideo.",
    hero_cta_primary: "Ver proyectos",
    hero_cta_secondary: "Contactame",
    about_title: "Sobre mí",
    about_text: "Soy estudiante de Licenciatura en Informática en la Universidad de Montevideo con experiencia real en entornos de trabajo exigentes. Trabajé en Mercado Libre analizando miles de transacciones, tomando decisiones críticas con métricas y minimizando fraudes — un contexto donde los datos importan de verdad. Fuera del trabajo, construyo productos propios: una PWA de gimnasio, un SaaS de catálogos para negocios uruguayos, y sitios para clientes reales. Me interesa resolver problemas concretos con código limpio y bien pensado.",
    projects_title: "Proyectos",
    project1_name: "reps.io",
    project1_description: "PWA para seguimiento de entrenamientos. Creá programas, registrá series en tiempo real y visualizá tu progreso con gráficos. Arquitectura optimizada para el plan gratuito de Firebase: 49 tests, denormalización de datos y lógica derivada en cliente.",
    project2_name: "Galería Demo",
    project2_description: "Plataforma SaaS de catálogos para negocios que venden por Instagram y WhatsApp. Incluye panel de administración, carga de imágenes en lote, optimización automática a WebP, sincronización en tiempo real y rate limiting.",
    project3_name: "Estudio Notarial Macías & Berriel",
    project3_description: "Sitio web para cliente real en producción. Single-page con cinco secciones, hero animado, carrusel de reseñas de Google Maps actualizado automáticamente via GitHub Actions, y formulario conectado a Google Sheets.",
    project_btn_demo: "Ver demo",
    project_btn_code: "Ver código",
    skills_title: "Skills",
    skill_frontend: "Frontend",
    skill_backend: "Backend",
    skill_databases: "Bases de datos",
    skill_languages: "Lenguajes",
    skill_tools: "Herramientas",
    certifications_title: "Certificaciones",
    cert1_name: "The Complete Full-Stack Web Development Bootcamp",
    cert1_duration: "62 horas",
    cert1_date: "Diciembre 2025",
    cert2_name: "Data Analysis | SQL, Tableau, Power BI & Excel | Real Projects",
    cert2_duration: "12.5 horas",
    cert2_date: "Diciembre 2025",
    cert_platform: "Udemy",
    cert_instructor: "Dr. Angela Yu",
    cert2_instructor: "Graeme Gordon",
    cert_btn_view: "Ver certificado",
    contact_title: "Contacto",
    contact_subtitle: "¿Tenés un proyecto en mente o querés hablar? Escribime.",
    contact_cv: "Descargar CV",
    footer_text: "Diseñado y desarrollado por Azael Pignanessi · 2025",
    stat_projects: "Proyectos en producción",
    stat_meli: "Experiencia en Mercado Libre",
    stat_uni: "Universidad de Montevideo"
  },
  en: {
    nav_about: "About me",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_contact: "Contact",
    hero_greeting: "Hi, I'm",
    hero_role: "Full-Stack Developer",
    hero_description: "Uruguayan full-stack developer. I build real web products — from client websites to my own apps in production. Computer Science student at Universidad de Montevideo.",
    hero_cta_primary: "View projects",
    hero_cta_secondary: "Contact me",
    about_title: "About me",
    about_text: "I'm a Computer Science student at Universidad de Montevideo with real experience in demanding work environments. I worked at Mercado Libre analyzing thousands of transactions, making critical decisions with internal metrics and minimizing fraud — a context where data actually matters. Outside of work, I build my own products: a gym PWA, a SaaS catalog platform for Uruguayan businesses, and websites for real clients. I'm interested in solving concrete problems with clean, well-thought-out code.",
    projects_title: "Projects",
    project1_name: "reps.io",
    project1_description: "Workout tracking PWA. Create programs, log sets in real time and visualize your progress with charts. Architecture optimized for Firebase's free tier: 49 tests, data denormalization and client-side derived logic.",
    project2_name: "Gallery Demo",
    project2_description: "SaaS catalog platform for businesses that sell through Instagram and WhatsApp. Includes admin panel, batch image upload, automatic WebP optimization, real-time sync and rate limiting.",
    project3_name: "Macías & Berriel Law Office",
    project3_description: "Website for a real client, live in production. Single-page with five sections, animated hero, Google Maps reviews carousel updated automatically via GitHub Actions, and a form connected to Google Sheets.",
    project_btn_demo: "View demo",
    project_btn_code: "View code",
    skills_title: "Skills",
    skill_frontend: "Frontend",
    skill_backend: "Backend",
    skill_databases: "Databases",
    skill_languages: "Languages",
    skill_tools: "Tools",
    certifications_title: "Certifications",
    cert1_name: "The Complete Full-Stack Web Development Bootcamp",
    cert1_duration: "62 hours",
    cert1_date: "December 2025",
    cert2_name: "Data Analysis | SQL, Tableau, Power BI & Excel | Real Projects",
    cert2_duration: "12.5 hours",
    cert2_date: "December 2025",
    cert_platform: "Udemy",
    cert_instructor: "Dr. Angela Yu",
    cert2_instructor: "Graeme Gordon",
    cert_btn_view: "View certificate",
    contact_title: "Contact",
    contact_subtitle: "Have a project in mind or want to talk? Reach out.",
    contact_cv: "Download CV",
    footer_text: "Designed and developed by Azael Pignanessi · 2025",
    stat_projects: "Projects in production",
    stat_meli: "Experience at Mercado Libre",
    stat_uni: "Universidad de Montevideo"
  }
};

let currentLang = localStorage.getItem("lang") || "es";
let currentTheme = localStorage.getItem("theme") || "dark";

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  currentTheme = theme;
  localStorage.setItem("theme", theme);
}

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  const langLabel = document.getElementById("langLabel");
  langLabel.textContent = lang.toUpperCase();

  const cvLink = document.getElementById("cvLink");
  cvLink.href = lang === "es" ? "assets/cv-es.pdf" : "assets/cv-en.pdf";
}

function initTheme() {
  applyTheme(currentTheme);
}

function initLanguage() {
  applyLanguage(currentLang);
}

function initAOS() {
  if (typeof AOS !== "undefined") {
    AOS.init({ duration: 700, once: true, offset: 80 });
  }
}

function initNavbarScroll() {
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

function initMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  navLinks.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

function initThemeToggle() {
  const themeToggle = document.getElementById("themeToggle");
  themeToggle.addEventListener("click", () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(newTheme);
  });
}

function initLangToggle() {
  const langToggle = document.getElementById("langToggle");
  langToggle.addEventListener("click", () => {
    const newLang = currentLang === "es" ? "en" : "es";
    applyLanguage(newLang);
  });
}

function initScrollProgress() {
  const bar = document.getElementById("scroll-progress");
  if (!bar) return;

  function update() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = progress + "%";
  }

  window.addEventListener("scroll", update, { passive: true });
  update();
}

function initCursor() {
  if (window.matchMedia("(hover: none)").matches) return;

  const dot = document.getElementById("cursor-dot");
  const ring = document.getElementById("cursor-ring");
  if (!dot || !ring) return;

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;
  let rafId = null;

  function moveDot(x, y) {
    dot.style.left = x + "px";
    dot.style.top = y + "px";
  }

  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + "px";
    ring.style.top = ringY + "px";
    rafId = requestAnimationFrame(animateRing);
  }

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    moveDot(mouseX, mouseY);
  });

  animateRing();

  document.querySelectorAll("a, button").forEach((el) => {
    el.addEventListener("mouseenter", () => ring.classList.add("cursor--hover"));
    el.addEventListener("mouseleave", () => ring.classList.remove("cursor--hover"));
  });

  document.addEventListener("mouseleave", () => {
    dot.style.opacity = "0";
    ring.style.opacity = "0";
  });

  document.addEventListener("mouseenter", () => {
    dot.style.opacity = "1";
    ring.style.opacity = "1";
  });
}

function initCardTilt() {
  const cards = document.querySelectorAll(".project-card:not(.cert-card)");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(800px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLanguage();
  initAOS();
  initNavbarScroll();
  initMobileMenu();
  initThemeToggle();
  initLangToggle();
  initScrollProgress();
  initCursor();
  initCardTilt();
});
