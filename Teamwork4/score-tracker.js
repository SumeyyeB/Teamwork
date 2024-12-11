// HTML elementlerini seçme
const score1Display = document.getElementById("score1");
const score2Display = document.getElementById("score2");
const pointFor1 = document.getElementById("pointFor1");
const PointFor2 = document.getElementById("PointFor2");
const resetBtn = document.getElementById("reset");
const inputInput = document.getElementById("input");

// Skor değişkenleri
let score1 = 0;
let score2 = 0;
let input = parseInt(inputInput.value); // Kullanıcının belirlediği kazanma skoru
let isGameOver = false; // Oyun durumu

// Skor artırma fonksiyonu
function updateScore(player) {
  if (!isGameOver) {
    if (player === 1) {
      score1++;
      if (score1 === input) endGame(1);
    } else {
      score2++;
      if (score2 === input) endGame(2);
    }
    updateDisplay();
  }
}

// Skor ve renk güncelleme
function updateDisplay() {
  score1Display.textContent = score1;
  score2Display.textContent = score2;
}

// Oyunu bitirme
function endGame(winner) {
  isGameOver = true;
  if (winner === 1) {
    score1Display.classList.add("winner");
    score2Display.classList.add("loser");
  } else {
    score2Display.classList.add("winner");
    score1Display.classList.add("loser");
  }
  pointFor1.disabled = true;
  PointFor2.disabled = true;
}

// Reset işlemi
function resetGame() {
  score1 = 0;
  score2 = 0;
  isGameOver = false;
  updateDisplay();
  score1Display.classList.remove("winner", "loser");
  score2Display.classList.remove("winner", "loser");
  pointFor1.disabled = false;
  PointFor2.disabled = false;
}

// Olay dinleyiciler
pointFor1.addEventListener("click", () => updateScore(1));
PointFor2.addEventListener("click", () => updateScore(2));
resetBtn.addEventListener("click", resetGame);

// Kullanıcının kazanan skoru değiştirmesi
inputInput.addEventListener("input", () => {
  input = parseInt(inputInput.value);
  resetGame(); // Yeni skor ayarlandığında oyun sıfırlanır
});
