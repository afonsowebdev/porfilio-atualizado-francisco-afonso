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
