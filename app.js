let user = 0;
let comp = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");

const compScorePara = document.querySelector("#comp-score");

const genCompChoice = ()=>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame =()=>{
    console.log("game was draw. ");
    msg.innerText ="Game is draw!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner =(userWin, userChoice, compChoice) =>{
    if(userWin){
        console.log("You Win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        user++;
        userScorePara.innerText = user;

    }else{
        console.log("You lose");
        msg.innerText =` You Lose!. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        comp++;
        compScorePara.innerText = comp;

    }
}

const playGame = (userChoice) =>{
    console.log("user choice = ", userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin ,userChoice, compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });

});
