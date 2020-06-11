const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settingsBtn = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");
const playButton = document.getElementById("play");

// List of words for game
const words = [
  "sigh",
  "tense",
  "airplane",
  "ball",
  "pies",
  "juice",
  "warlike",
  "bad",
  "north",
  "dependent",
  "steer",
  "silver",
  "highfalutin",
  "superficial",
  "quince",
  "eight",
  "feeble",
  "admit",
  "drag",
  "loving",
];
let random;
let score = 0;
let time = 10;
let difficulty = difficultySelect.value;

// focus on text on start
text.focus();

/* Functions */

//generate random numbers
let randomNum = () => {
  return words[Math.floor(Math.random() * words.length)];
};
//add word to DOM
const addToDom = () => {
  random = randomNum();
  word.innerText = random;
};

// update the score
const updateScore = () => {
  score++;
  scoreEl.innerText = score;
};

const endgame = () => {
  endgameEl.innerHTML = `<h1>Time ran out</h1>
  <p>Your final score is ${score}</p>
  <button onClick="location.reload()">Reload</button>`;
  endgameEl.style.display = "flex";
};

/* EVENT LISTENERS */
text.addEventListener("input", (e) => {
  const insertedText = e.target.value;
  if (insertedText === random) {
    // add new word
    addToDom();
    //clear the fields
    e.target.value = "";
    if (difficulty === "hard") {
      time += 2;
    } else if (difficulty === "medium") {
      time += 3;
    } else {
      time += 5;
    }
    //update the score
    updateScore();
  }
});

settingsBtn.addEventListener("click", () => {
  settings.classList.toggle("hide");
});

settingsForm.addEventListener("change", (e) => {
  difficulty = e.target.value;
  time = 10;
  score = 0;
  text.focus();
});

playButton.addEventListener("click", () => {
  addToDom();
  const timecount = setInterval(() => {
    time--;
    timeEl.innerText = time;
    if (time === 0) {
      clearInterval(timecount);
      //end game
      endgame();
    }
  }, 1000);
});
