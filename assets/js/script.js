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
    icon.classList.remove("bx-moon");
    icon.classList.add("bx-sun");
  } else {
    icon.classList.remove("bx-sun");
    icon.classList.add("bx-moon");
  }
});

// Aplicar preferência salva ao carregar
window.addEventListener("DOMContentLoaded", () => {
  const preferencia = localStorage.getItem("modo-escuro");
  const icon = document.getElementById("icon-dark");

  if (preferencia === "true") {
    document.body.classList.add("dark-mode");
    icon.classList.remove("bx-moon");
    icon.classList.add("bx-sun");
  }
});
