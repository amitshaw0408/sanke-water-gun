let playAgain = true;
let userChoice ;

// Generate Computer Choice :-
function genCompChoice () {
    const choice = ["sanke", "water", "gun"];
    const randomIdx = Math.floor(Math.random() * choice.length);
    return choice[randomIdx];
}




// Play Game Function :-
while(playAgain) {
    
    let compChoice = genCompChoice();
    console.log( "comuter =", compChoice);
    userChoice = prompt("Enter your choice between sanke, water, and gun");
    console.log("user =", userChoice);

    const playGame = (user, comp) => {
        user = userChoice;
        comp = compChoice;
    
        if 
        ((user === "gun" && comp === "water")) {
         (user === "snake" && comp === "gun")||
        (user === "water" && comp === "snake")||
            console.log("comp wins.");
        } 
        else if 
        ((user === "snake" && comp === "water")||
        (user === "water" && comp === "gun")||
        (user === "gun" && comp === "snake"))  {
            console.log("User win the game");
        } else if (user === comp) {
            console.log("match was tie");
        } else{
            console.log("please enter valid input");
        }
    }   
    playGame(userChoice, compChoice);
    playAgain = confirm("Do you want to play again");
}

//Smart-kids

// function smart () {
// if (userChoice !== "snake" || userChoice !== "water" || userChoice !== "gun") {
//     console.log("Please write the correct value... I am smarter than you.");
// }
// }

