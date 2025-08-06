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

/* // Alternar modo dark
const toggleDark = document.getElementById("toggle-dark");

toggleDark.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Salvar preferência no localStorage
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("modo-escuro", isDark);
});

// Aplicar preferência salva
window.addEventListener("DOMContentLoaded", () => {
  const preferencia = localStorage.getItem("modo-escuro");
  if (preferencia === "true") {
    document.body.classList.add("dark-mode");
  }
}); */

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

/* // Scroll suave personalizado
const linksInternos = document.querySelectorAll('a[href^="#"]');

linksInternos.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = this.getAttribute("href");

    if (href.length > 1) {
      // Ignora href="#"
      const destino = document.querySelector(href);
      if (!destino) return;

      destino.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
 */

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
