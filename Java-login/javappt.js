
let score = 0
let cscore = 0
document.getElementById("scorex").innerHTML = score;
document.getElementById("cscorex").innerHTML = cscore;
document.getElementById("mensag").innerHTML = "Melhor de 5 ganha!";

const buttons = document.querySelectorAll('input');

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        
        playRound(button.value)
    })
})

function playRound(playerSelection) {
    
   
        let myArray = ['Pedra', 'Papel', 'Tesoura']; 
        let computerPlay = myArray[(Math.random() * myArray.length) | 0];
        console.log(computerPlay);
        
      
        let computerSelection = computerPlay;
        
        let playup =playerSelection;
        
        console.log(playup);
        let compup =computerSelection.toUpperCase();
        console.log(compup);
        
        if (score === 5) {
            console.log('acabou ganhou');
            document.getElementById("mensag").innerHTML = "Acabou..Ganhou!!!!";
            }   
            else if (cscore === 5) {
            console.log('acabou perdeu');
            document.getElementById("mensag").innerHTML = "Acabou..Perdeu...";
            }
    
    
            else if (playup === compup) {
            console.log('Empatou');
            document.getElementById("mensag").innerHTML = "Empatou a rodada!";
            }
            
            else if (compup === 'TESOURA' && playup === "PAPEL") {
                console.log('Perdeu');
                cscore++;
                console.log(cscore);
                console.log(score);
                document.getElementById("mensag").innerHTML = "Perdeu a rodada..."; 
            }
            else if (compup === 'TESOURA' && playup === "PEDRA" ) {
                console.log('Ganhou'); 
                score++;
                console.log(cscore);
                console.log(score);
                document.getElementById("mensag").innerHTML = "Ganhou a rodada!"; 
            }
            else if (compup === 'PEDRA' && playup === "PAPEL") {
                console.log('Ganhou');
                score++;
                console.log(cscore);
                console.log(score);
                document.getElementById("mensag").innerHTML = "Ganhou a rodada!";  
            }
            else if (compup === 'PEDRA' && playup === "TESOURA") {
                console.log('Perdeu');
                cscore++;
                console.log(cscore);
                console.log(score);
                document.getElementById("mensag").innerHTML = "Perdeu a rodada...";  
            }
            else if (compup === 'PAPEL' && playup === "PEDRA") {
                console.log('Perdeu');
                cscore++;
                console.log(cscore);
                console.log(score);
                document.getElementById("mensag").innerHTML = "Perdeu a rodada...";  
            }
            else if (compup === 'PAPEL' && playup === "TESOURA") {
                console.log('Ganhou');
                score++;
                console.log(cscore);
                console.log(score);
                document.getElementById("mensag").innerHTML = "Ganhou a rodada!";  
            }
            
            document.getElementById("scorex").innerHTML = score;
            document.getElementById("cscorex").innerHTML = cscore;
                    
        }