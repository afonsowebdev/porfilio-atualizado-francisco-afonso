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

// Optional: autoplay
// setInterval(() => {
//   current = (current + 1) % testimonials.length;
//   showTestimonial(current);
// }, 5000);

/* Modo Dark */
const toggle = document.getElementById("toggle-dark");
const body = document.body;

// Verifica se já tem modo salvo no navegador
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
}

toggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Salva preferência
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
