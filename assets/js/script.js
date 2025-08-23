const testimonials = document.querySelectorAll(".testimonial");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
let current = 0;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.remove("active");
    if (i === index) testimonial.classList.add("active");
  });
}

nextBtn.addEventListener("click", () => {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
});

prevBtn.addEventListener("click", () => {
  current = (current - 1 + testimonials.length) % testimonials.length;
  showTestimonial(current);
});

// Modo Dark

const toggleDark = document.getElementById("toggle-dark");
const icon = document.getElementById("icon-dark");

toggleDark.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("modo-escuro", isDark);

  // Trocar ícone
  if (isDark) {
    icon.classList.remove("bx-sun");
    icon.classList.add("bx-moon");
  } else {
    icon.classList.remove("bx-moon");
    icon.classList.add("bx-sun");
  }
});

// Aplicar preferência salva ao carregar
window.addEventListener("DOMContentLoaded", () => {
  const preferencia = localStorage.getItem("modo-escuro");
  const icon = document.getElementById("icon-dark");

  if (preferencia === "true") {
    document.body.classList.add("dark-mode");
    icon.classList.remove("bx-sun");
    icon.classList.add("bx-moon");
  }
});

// Animation
// Detectar elementos visíveis ao rolar
const animatedElements = document.querySelectorAll(".animate-on-scroll");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        // Apenas uma vez: parar de observar depois
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

// Observar todos os elementos com a classe
animatedElements.forEach((el) => observer.observe(el));

// ====== Scroll para o topo ======
const scrollToTopBtn = document.getElementById("scroll-up");
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });

  document.querySelectorAll(".menu-item.active").forEach((item) => {
    item.classList.remove("active");
  });

  document.querySelectorAll(".nav-link.active").forEach((link) => {
    link.classList.remove("active");
  });

  // Remover hash da URL
  if (history.pushState) {
    history.pushState(
      "",
      document.title,
      window.location.pathname + window.location.search
    );
  }
});

/* Entrada e Saida de Texto */

const el = document.getElementById("hero__subtitle");
const parts = [
  { text: "Desenvolvedor ", class: "" },
  { text: "Full-Stack", class: "hero__span" },
  { text: " & ", class: "" },
  { text: "UI/UX", class: "hero__span" },
];

const typingSpeed = 80;
const deletingSpeed = 60;
const pauseEnd = 1200;
const pauseStart = 400;

let partIndex = 0; // em que parte do array estamos
let charIndex = 0; // em que letra da parte estamos
let deleting = false;

function typeLoop() {
  let html = "";

  for (let j = 0; j < partIndex; j++) {
    html += parts[j].class
      ? `<span class="${parts[j].class}">${parts[j].text}</span>`
      : parts[j].text;
  }

  if (!deleting) {
    const currentPart = parts[partIndex];
    const visible = currentPart.text.substring(0, charIndex);
    html += currentPart.class
      ? `<span class="${currentPart.class}">${visible}</span>`
      : visible;

    el.innerHTML = html;

    charIndex++;
    if (charIndex > currentPart.text.length) {
      partIndex++;
      charIndex = 0;
      if (partIndex >= parts.length) {
        deleting = true;
        partIndex = parts.length - 1;
        charIndex = parts[partIndex].text.length;
        setTimeout(typeLoop, pauseEnd);
        return;
      }
    }
    setTimeout(typeLoop, typingSpeed);
  } else {
    const currentPart = parts[partIndex];
    const visible = currentPart.text.substring(0, charIndex);
    html += currentPart.class
      ? `<span class="${currentPart.class}">${visible}</span>`
      : visible;

    el.innerHTML = html;

    charIndex--;
    if (charIndex < 0) {
      partIndex--;
      if (partIndex < 0) {
        deleting = false;
        partIndex = 0;
        charIndex = 0;
        setTimeout(typeLoop, pauseStart);
        return;
      }
      charIndex = parts[partIndex].text.length;
    }
    setTimeout(typeLoop, deletingSpeed);
  }
}

typeLoop();
