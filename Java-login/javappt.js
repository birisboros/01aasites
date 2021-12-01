let score = 0
let cscore = 0
let i= 0



for (i = 0; (score || cscore)<5; i++){

let myArray = ['Pedra', 'Papel', 'Tesoura']; 
let computerPlay = myArray[(Math.random() * myArray.length) | 0];
console.log(computerPlay);

let playerSelection = prompt('Pedra, Papel ou Tesoura?', '');
let computerSelection = computerPlay;

let playup =playerSelection.toUpperCase();
console.log(playup);
let compup =computerSelection.toUpperCase();
console.log(compup);

if (playup === compup) {
    console.log('Empatou');}
    else if (compup === 'TESOURA' && playup === "PAPEL") {
        console.log('Perdeu');
        cscore++;
        console.log(cscore);
        console.log(score); 
    }
    else if (compup === 'TESOURA' && playup === "PEDRA" ) {
        console.log('Ganhou'); 
        score++;
        console.log(cscore);
        console.log(score); 
    }
    else if (compup === 'PEDRA' && playup === "PAPEL") {
        console.log('Ganhou');
        score++;
        console.log(cscore);
        console.log(score);  
    }
    else if (compup === 'PEDRA' && playup === "TESOURA") {
        console.log('Perdeu');
        cscore++;
        console.log(cscore);
        console.log(score);  
    }
    else if (compup === 'PAPEL' && playup === "PEDRA") {
        console.log('Perdeu');
        cscore++;
        console.log(cscore);
        console.log(score);  
    }
    else if (compup === 'PAPEL' && playup === "TESOURA") {
        console.log('Ganhou');
        score++;
        console.log(cscore);
        console.log(score);  
    }
    
    document.getElementById("score").innerHTML = score;
    document.getElementById("cscore").innerHTML = cscore;

    if (score === 5) {
    console.log('acabou ganhou');
    }   
    if (cscore === 5) {
    console.log('acabou perdeu');
    }

}
