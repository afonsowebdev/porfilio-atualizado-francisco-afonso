document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".header__nav-item");
  const navLinks = document.querySelectorAll(".header__nav-link");

  const sections = Array.from(document.querySelectorAll("section[id]"));
  const hero = document.getElementById("hero");
  if (hero) sections.unshift(hero);

  function setActive(item) {
    navItems.forEach((i) => i.classList.remove("active"));
    if (item) item.classList.add("active");
  }

  function scrollSpy() {
    let closestSection = null;
    let minDistance = Number.POSITIVE_INFINITY;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const distance = Math.abs(rect.top);
      if (distance < minDistance) {
        minDistance = distance;
        closestSection = section;
      }
    });

    if (closestSection) {
      const id = closestSection.id;
      const activeLink = document.querySelector(
        `.header__nav-link[href="#${id}"]`
      );
      const li = activeLink ? activeLink.closest(".header__nav-item") : null;
      setActive(li);
    }
  }

  // Atualiza ativo ao rolar
  window.addEventListener("scroll", scrollSpy);

  // Executa no carregamento da página
  scrollSpy();

  // Clique no menu
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const li = link.closest(".header__nav-item");
      setActive(li);
    });
  });
});
