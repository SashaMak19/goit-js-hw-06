const refs = {
  input: document.querySelector("input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxesDiv: document.querySelector("#boxes"),
};

refs.createBtn.addEventListener("click", () => createBoxes(refs.input.value));
refs.destroyBtn.addEventListener("click", destroyBoxes);

let collectionBoxes = [""];
let width = 30;
let height = 30;

function createBoxes(amount) {
  const markup = collectionBoxes
    .map(
      (box) =>
        `<div style="background-color: ${getRandomHexColor()}; width: ${width}px; height: ${height}px;"></div>`
    )
    .join("");

  refs.boxesDiv.insertAdjacentHTML("beforeend", markup);
  width += 10;
  height += 10;
}

function destroyBoxes() {
  refs.boxesDiv.innerHTML = "";
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
