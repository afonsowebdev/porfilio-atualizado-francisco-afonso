const el = document.getElementById("hero__subtitle");

const texts = [
  { text: "Desenvolvedor ", class: "" },
  { text: "Full-Stack", class: "hero__span" },
  { text: " & ", class: "" },
  { text: "UI/UX", class: "hero__span" },
];

let partIndex = 0;
let charIndex = 0;
let deleting = false;

let typingSpeed = 80;
let deletingSpeed = 60;
let pauseEnd = 1200;
let pauseStart = 400;

function typeLoop() {
  let html = "";

  for (let j = 0; j < partIndex; j++) {
    html += texts[j].class
      ? `<span class="${texts[j].class}">${texts[j].text}</span>`
      : texts[j].text;
  }

  const currentPart = texts[partIndex];
  const visible = currentPart.text.substring(0, charIndex);
  html += currentPart.class
    ? `<span class="${currentPart.class}">${visible}</span>`
    : visible;

  el.innerHTML = html;

  if (!deleting) {
    charIndex++;
    if (charIndex > currentPart.text.length) {
      partIndex++;
      charIndex = 0;
      if (partIndex >= texts.length) {
        deleting = true;
        partIndex = texts.length - 1;
        charIndex = texts[partIndex].text.length;
        setTimeout(typeLoop, pauseEnd);
        return;
      }
    }
    setTimeout(typeLoop, typingSpeed);
  } else {
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
      charIndex = texts[partIndex].text.length;
    }
    setTimeout(typeLoop, deletingSpeed);
  }
}

typeLoop();
