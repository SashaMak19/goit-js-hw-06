const input = document.querySelector("#validation-input");

input.addEventListener("blur", checkValidInput);

function checkValidInput(event) {
  if (
    event.currentTarget.value.length === Number.parseInt(input.dataset.length)
  ) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
  }

  //   console.log(input.value.length);
  //   console.log(Number.parseInt(input.dataset.length));
}
