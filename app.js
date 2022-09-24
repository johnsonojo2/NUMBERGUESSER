// Game Values

let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

//UI Elements

const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessInput = document.querySelector("#guess-input"),
  guessBtn = document.querySelector("#guess-btn"),
  message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }
  //   console.log(typeof parseInt(guessInput.value));
});
function setMessage(msg, color) {
  //   message.style.display = "block";
  //   message.style.transition = "display 10s";
  message.textContent = msg;
  message.style.color = color;
}
