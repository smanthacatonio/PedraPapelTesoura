

const pickUserHand = (hand) => {
    console.log(hand);
    //esconder a página atual
    let hands = document.querySelector(".hands");
    hands.style.display = "none";
    //mostrar a próxima página com a mão que eu escolhi
    let contest = document.querySelector(".contest");
    contest.style.display = "flex";

}