let selectedColor = null;
let history = [];

function selectColor(color) {
  selectedColor = color;
  alert("Selected: " + color);
}

function getResultColor(num) {
  if (num === 5) return "VIOLET";
  else if ([1, 3, 7, 9].includes(num)) return "RED";
  else return "GREEN";
}

function placeBet() {
  if (!selectedColor) return alert("Pick a color!");
  const bet = parseInt(document.getElementById("bet").value);
  let num = Math.floor(Math.random() * 10);
  let resultColor = getResultColor(num);

  let win = selectedColor === resultColor;
  document.getElementById("result").innerText =
    `Result: ${resultColor} (${num}) → You ${win ? "Win ₹" + (bet * 2) : "Lose ₹" + bet}`;

  history.unshift(resultColor);
  document.getElementById("history").innerText = history.slice(0, 5).join(", ");

  startTimer(); // Start next round
}

let timeLeft = 60;
let timer;

function startTimer() {
  clearInterval(timer);
  timeLeft = 60;
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("countdown").innerText = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      placeBet(); // Auto play if time ends
    }
  }, 1000);
}
startTimer();