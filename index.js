
//dicionario de opções de mãos
const handOptions = {
    "rock": "/assets/Rock.png",
    "paper": "/assets/Paper.png",
    "scissors": "/assets/Scissors.png"
  }

  let SCORE = 0;

const pickUserHand = (hand) => {
    console.log(hand);
    //esconder a página atual
    let hands = document.querySelector(".hands");
    hands.style.display = "none";
    //mostrar a próxima página com a mão que eu escolhi
    let contest = document.querySelector(".contest");
    contest.style.display = "flex";

    //pegar o que o usuario escolheu
    document.getElementById("userPickImage").src = handOptions[hand];

    let cpHand = pickComputerHand();
    referee(hand, cpHand);
}

const pickComputerHand = () => {
    let hands = ["rock", "paper", "scissors"]
    let cpHand = hands[Math.floor(Math.random() * hands.length)];

    console.log("CPHand", cpHand)
    
    //pegar o que o computador escolheu
    document.getElementById("computerPickImage").src = handOptions[cpHand];

    return cpHand;
}

const referee = (userHand, chHand) => {
    if(userHand == "paper" && cpHand == "scissors") {
        setDecision("YOU LOSE!")
        setDecision(SCORE - 1)
    } else if (userHand == "paper" && cpHand == "rock") {
        setDecision("YOU WIN!")
        setDecision(SCORE + 1)
    } else if (userHand == "paper" && cpHand == "paper") {
        setDecision("IT'S A TIE!")
        setDecision(SCORE + 1)
    }

    if(userHand == "rock" && cpHand == "paper") {
        setDecision("YOU LOSE!")
        setDecision(SCORE - 1)
    } else if (userHand == "rock" && cpHand == "scissor") {
        setDecision("YOU WIN!")
        setDecision(SCORE + 1)
    } else if (userHand == "rock" && cpHand == "rock") {
        setDecision("IT'S A TIE!")
        setDecision(SCORE + 1)
    }

    if(userHand == "scissors" && cpHand == "rock") {
        setDecision("YOU LOSE!")
        setDecision(SCORE - 1)
    } else if (userHand == "scissors" && cpHand == "paper") {
        setDecision("YOU WIN!")
        setDecision(SCORE + 1)
    } else if (userHand == "scissors" && cpHand == "scissors") {
        setDecision("IT'S A TIE!")
        setDecision(SCORE + 1)
    }
}

const setDecision = (decision) => {
    document.querySelector(".decision h1").innerText = decision;
}

const setScore = (score) => {
    document.querySelector(".score h1").innerText = score;
}