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
