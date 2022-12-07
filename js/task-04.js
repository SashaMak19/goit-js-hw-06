const refs = {
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
  valueSpan: document.querySelector("#value"),
};

const counterValue = {
  value: 0,
};

refs.decrementBtn.addEventListener("click", onDecrementBtn);
refs.incrementBtn.addEventListener("click", onIncrementBtn);

function onDecrementBtn() {
  refs.valueSpan.textContent = counterValue.value -= 1;
  console.log(counterValue.value);
}

function onIncrementBtn() {
  refs.valueSpan.textContent = counterValue.value += 1;
  console.log(counterValue.value);
}

// Varsion 2

// const counterValue = {
//   value: 0,
//   onDecrementBtn() {
//     refs.valueSpan.textContent = this.value -= 1;
//   },

//   onIncrementBtn() {
//     refs.valueSpan.textContent = this.value += 1;
//   },
// };

// refs.decrementBtn.addEventListener(
//   "click",
//   counterValue.onDecrementBtn.bind(counterValue)
// );

// refs.incrementBtn.addEventListener(
//   "click",
//   counterValue.onIncrementBtn.bind(counterValue)
// );
