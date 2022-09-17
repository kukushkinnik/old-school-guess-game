const tryBtn = document.querySelector(".try-agn");

const tryAgain = () => {
  window.location.href = "../html/game-screen.html";
};

tryBtn.addEventListener("click", tryAgain);
