const p1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Display"),
};

const p2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Display"),
};

const resetButton = document.querySelector("#reset");
const pointSelect = document.querySelector("#playTo");
let winingScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winingScore) {
      isGameOver = true; // button을 더 누르게 되면 isGameOver이 false가 되기 때문에 작동하지 않음.
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true; // Bulma를 사용
      opponent.button.disabled = true;
    }
  }
  player.display.textContent = player.score;
}

p1Button.addEventListener("click", function () {
  updateScores(p1, p2);
});

p2Button.addEventListener("click", function () {
  updateScores(p2, p1);
});

pointSelect.addEventListener("change", function () {
  winingScore = parseInt(this.value);
  reset();
});

resetButton.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }
}
