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
