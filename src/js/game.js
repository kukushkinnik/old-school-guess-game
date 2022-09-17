const input = document.querySelector(".guess");
const guessBtn = document.querySelector(".guess-btn");
const randomNum = Math.floor(Math.random() * 100 + 1);
const status = document.querySelector(".status");
const wrong = new Audio("../assets/bruh.mp3");

let attempts = 7;

const game = (e) => {
  e.preventDefault();
  let value = +input.value;

  if (isNaN(value) || value === 0) {
    changeStatus("Told ya");
    wrong.play();
  } else {
    gameLogic(value, randomNum);
    input.value = "";
    console.log(value);
  }
};

function gameLogic(value, randomNum) {
  if (value !== randomNum && attempts === 1) {
    input.disabled = true;
    changeStatus("You lost!", "../html/lose-screen.html");
  } else if (value === randomNum && attempts === 4) {
    input.disabled = true;
    changeStatus("Secret unlocked!", "../html/secret.html");
  } else if (value === randomNum && attempts >= 0) {
    input.disabled = true;
    changeStatus("You won!", "../html/win-screen.html");
  } else if (value > randomNum) {
    changeStatus("Too big");
  } else {
    changeStatus("Too low");
  }
  attempts -= 1;
  healthBarRender();
}

function healthBarRender() {
  const healthBar = document.querySelector(".health-bar-list ");
  healthBar.removeChild(healthBar.firstElementChild);
}

function changeStatus(text, link = undefined) {
  status.innerHTML = text;

  setTimeout(() => {
    if (link !== undefined) {
      window.location.href = link;
    }
  }, 500);
}

guessBtn.addEventListener("click", game);
