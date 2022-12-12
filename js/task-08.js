const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmitSendingForm);

function onSubmitSendingForm(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "") {
    alert("Будь ласка заповніть всі поля введення!");
  } else if (password.value === "") {
    alert("Будь ласка заповніть всі поля введення!");
  } else {
    console.log({
      email: email.value,
      password: password.value,
    });

    event.currentTarget.reset();
  }
}
