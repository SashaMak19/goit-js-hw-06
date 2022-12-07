const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", changeSpanTextContent);

function changeSpanTextContent(event) {
  if (refs.input.value === "") {
    refs.span.textContent = "Anonymous";
  } else {
    refs.span.textContent = event.currentTarget.value;
  }

  console.log(event.currentTarget.value);
}

// // Another version

// const input = document.querySelector("#name-input");
// const output = document.querySelector("#name-output");

// input.addEventListener("input", onChangeCurrentTarget);

// function onChangeCurrentTarget(event) {
//   if (input.value.length === 0) {
//     output.textContent = "Anonymous";
//   } else {
//     output.textContent = event.currentTarget.value;
//   }

//   console.log(input.value.length);
// }
