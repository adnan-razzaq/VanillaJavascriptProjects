const game = () => {
  let pScore = 0;
  let cScore = 0;

  //start of game
  const startGame = () => {
    const playBtn = document.querySelector(".play-btn");
    const introSection = document.querySelector(".intro");
    const matchSection = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introSection.classList.add("hide");
      matchSection.classList.add("show");
    });
  };
  // lets playmatch

  const playMatch = () => {
    const btnOptions = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    btnOptions.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        console.log(e.target.value);

        //Options
        const arrOptions = ["rock", "paper", "scissors"];
        const random = Math.floor(Math.random() * 3);
        //computer choice
        const computerchoice = arrOptions[random];
        //playerchoice
        const playerChoice = e.target.textContent;
        //show images according to choice
        playerHand.src = `./assests/${playerChoice}.png`;
        computerHand.src = `./assests/${computerchoice}.png`;
        //compareChoices
        compareChoice(playerChoice, computerchoice);
        if (pScore > 9 || cScore > 9) {
          stopMatch(pScore, cScore);
        }
      });
    });
    //function for updating score
    const updateScore = () => {
      const playerScore = document.querySelector(".player-score p");
      const computerScore = document.querySelector(".computer-score p");
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
    };
    // function for gmae rules
    const compareChoice = (playerChoice, computerchoice) => {
      const winner = document.querySelector(".winner");
      //checking for a tie
      if (playerChoice === computerchoice) {
        winner.textContent = " Its a tie";
        return;
      }
      if (playerChoice === "rock") {
        if (computerchoice === "scissors") {
          winner.textContent = "Player wins";
          pScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "computer wins";
          cScore++;
          updateScore();
          return;
        }
      }
      //2nd rule
      if (playerChoice === "scissors") {
        if (computerchoice === "paper") {
          winner.textContent = "Player wins";
          pScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "computer wins";
          cScore++;
          updateScore();
          return;
        }
      }
      //3rd rule
      if (playerChoice === "paper") {
        if (computerchoice === "rock") {
          winner.textContent = "Player wins";
          pScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "computer wins";
          cScore++;
          updateScore();
          return;
        }
      }
    };
  };

  const stopMatch = (pScore, cscore) => {
    const winner = document.querySelector(".winner");
    const introSection = document.querySelector(".intro");
    const matchSection = document.querySelector(".match");
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");

    if (pScore > cscore) {
      winner.textContent = "Player is winner";
    } else {
      winner.textContent = "Computer is Winner";
    }
    matchSection.classList.add("end");
    setTimeout(() => {
      pScore = 0;
      cScore = 0;
      introSection.classList.remove("hide");
      matchSection.classList.remove("end", "show");
      playerScore.textContent = 0;
      computerScore.textContent = 0;
    }, 2000);
  };

  startGame();
  playMatch();
};

game();
