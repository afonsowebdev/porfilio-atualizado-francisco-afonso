
  const testimonials = document.querySelectorAll('.testimonial');
  const nextBtn = document.getElementById('next');
  const prevBtn = document.getElementById('prev');
  let current = 0;

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.remove('active');
      if (i === index) testimonial.classList.add('active');
    });
  }

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % testimonials.length;
    showTestimonial(current);
  });

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + testimonials.length) % testimonials.length;
    showTestimonial(current);
  });

  // Optional: autoplay
  // setInterval(() => {
  //   current = (current + 1) % testimonials.length;
  //   showTestimonial(current);
  // }, 5000);

