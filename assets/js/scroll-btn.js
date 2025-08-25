const scrollToTopBtn = document.getElementById("scroll-up");
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });

  document.querySelectorAll(".menu-item.active").forEach((item) => {
    item.classList.remove("active");
  });

  document.querySelectorAll(".nav-link.active").forEach((link) => {
    link.classList.remove("active");
  });

  if (history.pushState) {
    history.pushState(
      "",
      document.title,
      window.location.pathname + window.location.search
    );
  }
});
