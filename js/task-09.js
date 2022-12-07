const body = document.querySelector("body");
const btn = document.querySelector(".change-color");
const span = document.querySelector(".color");

btn.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
  body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

  console.log((span.textContent = body.style.backgroundColor));
}
