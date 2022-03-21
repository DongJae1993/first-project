const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const resetButton = document.querySelector("#reset");
const pointSelect = document.querySelector("#playTo");

let winingScore = 3;

let p1Score = 0;
let p2Score = 0;
let isGameOver = false;

p1Button.addEventListener("click", function () {
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score === winingScore) {
      isGameOver = true; // button을 더 누르게 되면 isGameOver이 false가 되기 때문에 작동하지 않음.
      p1Display.classList.add("has-text-success");
      p2Display.classList.add("has-text-danger");
      p1Button.disabled = true; // Bulma를 사용
      p2Button.disabled = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === winingScore) {
      isGameOver = true; // button을 더 누르게 되면 isGameOver이 false가 되기 때문에 작동하지 않음.
      p2Display.classList.add("has-text-success");
      p1Display.classList.add("has-text-danger");
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    p2Display.textContent = p2Score;
  }
});

pointSelect.addEventListener("change", function () {
  winingScore = parseInt(this.value);
  reset();
});

resetButton.addEventListener("click", reset);
function reset() {
  p1Score = 0;
  p2Score = 0;
  isGameOver = false;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  p1Display.classList.remove("has-text-success", "has-text-danger");
  p2Display.classList.remove("has-text-success", "has-text-danger");
  p1Button.disabled = false;
  p2Button.disabled = false;
}
