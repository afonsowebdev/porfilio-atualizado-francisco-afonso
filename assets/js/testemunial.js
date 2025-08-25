const testimonials = document.querySelectorAll(".testimonial");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
let current = 0;
let autoInterval = null;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.remove("active");
    if (i === index) testimonial.classList.add("active");
  });
}

// Avança automaticamente a cada 5 segundos (5000ms)
function startAutoSlide() {
  autoInterval = setInterval(() => {
    current = (current + 1) % testimonials.length;
    showTestimonial(current);
  }, 6000);
}

// Para o slide automático (caso queira reiniciar ao clicar)
function resetAutoSlide() {
  clearInterval(autoInterval);
  startAutoSlide();
}

// Botão next
nextBtn.addEventListener("click", () => {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
  resetAutoSlide(); // reinicia o automático
});

// Botão prev
prevBtn.addEventListener("click", () => {
  current = (current - 1 + testimonials.length) % testimonials.length;
  showTestimonial(current);
  resetAutoSlide(); // reinicia o automático
});

// Inicializa
showTestimonial(current);
startAutoSlide();


/* const testimonials = document.querySelectorAll(".testimonial");
let current = 0;
let autoInterval = null;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.remove("active");
    if (i === index) testimonial.classList.add("active");
  });
}

// Avança automaticamente a cada 6 segundos
function startAutoSlide() {
  autoInterval = setInterval(() => {
    current = (current + 1) % testimonials.length;
    showTestimonial(current);
  }, 6000);
}

// Inicializa
showTestimonial(current);
startAutoSlide();
 */