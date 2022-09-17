const startBtn = document.querySelector(".play");
const runBtn = document.querySelector(".run");

const startGame = () => {
  window.location.href = "../html/game-screen.html";
};

const run = () => {
  window.location.href = "../html/lose-screen.html";
};

startBtn.addEventListener("click", startGame);

runBtn.addEventListener("click", run);
