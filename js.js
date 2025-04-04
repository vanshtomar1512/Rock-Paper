let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".images img");
const win = document.querySelector("#text");
const score1 = document.querySelector("#user-score");
const score2 = document.querySelector("#comp-score");

const winSound = new Audio("win.wav"); 
const loseSound = new Audio("lose.wav"); 
const clickSound = new Audio("click.wav");

const playSoundForDuration = (sound, duration) => {
    sound.play();
    setTimeout(() => {
        sound.pause();
        sound.currentTime = 0; 
    }, duration);
};

const compchoice = () => {
    const list = ["ROCK", "PAPER", "SCISSORS"];
    let idx = Math.floor(Math.random() * 3);
    return list[idx];
};

const draw = () => {
    console.log("game is draw");
    win.innerHTML = "It's a draw! Try again.";
    win.style.backgroundColor = "gray"; 
};

const showwinner = (userwin, userchoice, compuchoice) => {
    if (userwin) {
        console.log("u win");
        win.innerHTML = `You won by your ${userchoice} against Ex's ${compuchoice}!`;
        win.style.backgroundColor = "green"; 
        userscore++;
        score1.innerHTML = userscore;
        playSoundForDuration(winSound, 500);
    } else {
        console.log("u lost");
        win.innerHTML = `You lost by your ${userchoice} against Ex's ${compuchoice}!`;
        win.style.backgroundColor = "red"; 
        compscore++;
        score2.innerHTML = compscore;
        playSoundForDuration(loseSound, 500);
    }
};

const playGame = (userchoice) => {
    console.log(userchoice);
    const compuchoice = compchoice();
    console.log(compuchoice);

    if (userchoice === compuchoice) {
        draw();
        return;
    } else {
        let userwin;
        if (userchoice === "ROCK") {
            userwin = compuchoice === "PAPER" ? false : true;
        } else if (userchoice === "PAPER") {
            userwin = compuchoice === "SCISSORS" ? false : true;
        } else if (userchoice === "SCISSORS") {
            userwin = compuchoice === "ROCK" ? false : true;
        }
        showwinner(userwin, userchoice, compuchoice);
    }
};

choices.forEach((img) => {
    img.addEventListener("click", () => {
        playSoundForDuration(clickSound, 500);
        const userchoice = img.getAttribute("id");
        playGame(userchoice);
    });
});