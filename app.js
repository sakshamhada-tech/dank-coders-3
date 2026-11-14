const levels = {
  easy: { max: 50, attempts: 10 },
  medium: { max: 100, attempts: 7 },
  hard: { max: 200, attempts: 5 }
};

const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const resultScreen = document.getElementById("result-screen");
const card = document.querySelector(".card");

const difficultySelect = document.getElementById("difficulty");
const rangeText = document.getElementById("range-text");
const attemptsLeft = document.getElementById("attempts-left");
const guessInput = document.getElementById("guess-input");
const message = document.getElementById("message");

let secret, max, totalAttempts, attempts, bestScore = 0;

function show(screen) {
  [startScreen, gameScreen, resultScreen].forEach(s => s.classList.add("hidden"));
  screen.classList.remove("hidden");
}

function setMessage(text, type) {
  message.textContent = text;
  message.className = type;
}

function startGame() {
  const level = levels[difficultySelect.value];
  max = level.max;
  totalAttempts = level.attempts;
  attempts = totalAttempts;
  secret = Math.floor(Math.random() * max) + 1;

  rangeText.textContent = `Guess a number between 1 and ${max}`;
  attemptsLeft.textContent = attempts;
  guessInput.value = "";
  setMessage("", "");
  card.classList.remove("win", "lose");
  show(gameScreen);
  guessInput.focus();
}

function submitGuess() {
  const guess = Number(guessInput.value);

  if (guessInput.value === "" || !Number.isInteger(guess) || guess < 1 || guess > max) {
    setMessage(`Enter a whole number between 1 and ${max}`, "error");
    return;
  }

  attempts--;
  attemptsLeft.textContent = attempts;
  guessInput.value = "";
  guessInput.focus();

  if (guess === secret) {
    endGame(true);
  } else if (attempts === 0) {
    endGame(false);
  } else if (guess < secret) {
    setMessage("Too Low! Try a Higher Number", "warning");
  } else {
    setMessage("Too High! Try a Lower Number", "warning");
  }
}

function endGame(won) {
  const used = totalAttempts - attempts;
  // fewer attempts used = higher score
  const score = won ? (totalAttempts - used + 1) * 10 : 0;

  if (score > bestScore) bestScore = score;

  document.getElementById("result-title").textContent = won ? "🎉 You Win!" : "😢 You Lose!";
  document.getElementById("secret-reveal").textContent = secret;
  document.getElementById("attempts-used").textContent = used;
  document.getElementById("score").textContent = score;
  document.getElementById("best-score").textContent = bestScore;

  show(resultScreen);
  card.classList.add(won ? "win" : "lose");
}

document.getElementById("start-btn").addEventListener("click", startGame);
document.getElementById("guess-btn").addEventListener("click", submitGuess);
document.getElementById("again-btn").addEventListener("click", () => show(startScreen));
guessInput.addEventListener("keydown", e => {
  if (e.key === "Enter") submitGuess();
});