const calculator = document.querySelector(".calculator");
const btnArr = document.querySelectorAll(".btn");
const input = document.querySelector(".input-number");
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
let userInput = "";

btnArr.forEach((btn) => {
  btn.addEventListener("click", function () {
    const value = this.innerText;
    userInput += value;
    input.value = userInput;
  });
});

calculator.addEventListener("submit", function (e) {
  e.preventDefault();
  const result = eval(userInput);
  userInput = String(result);
  input.value = userInput;
});

clearBtn.addEventListener("click", function () {
  userInput = "";
  input.value = userInput;
});

deleteBtn.addEventListener("click", function () {
  userInput = userInput.slice(0, -1);
  input.value = userInput;
});
