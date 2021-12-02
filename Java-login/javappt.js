
let score = 0
let cscore = 0
let i= 0
document.getElementById("scorex").innerHTML = score;
document.getElementById("cscorex").innerHTML = cscore;

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
            document.getElementById("mensag").innerHTML = "Empatou!";
            }
            
            else if (compup === 'TESOURA' && playup === "PAPEL") {
                console.log('Perdeu');
                cscore++;
                console.log(cscore);
                console.log(score);
                document.getElementById("mensag").innerHTML = "Perdeu..."; 
            }
            else if (compup === 'TESOURA' && playup === "PEDRA" ) {
                console.log('Ganhou'); 
                score++;
                console.log(cscore);
                console.log(score);
                document.getElementById("mensag").innerHTML = "Ganhou!"; 
            }
            else if (compup === 'PEDRA' && playup === "PAPEL") {
                console.log('Ganhou');
                score++;
                console.log(cscore);
                console.log(score);
                document.getElementById("mensag").innerHTML = "Ganhou!";  
            }
            else if (compup === 'PEDRA' && playup === "TESOURA") {
                console.log('Perdeu');
                cscore++;
                console.log(cscore);
                console.log(score);
                document.getElementById("mensag").innerHTML = "Perdeu...";  
            }
            else if (compup === 'PAPEL' && playup === "PEDRA") {
                console.log('Perdeu');
                cscore++;
                console.log(cscore);
                console.log(score);
                document.getElementById("mensag").innerHTML = "Perdeu...";  
            }
            else if (compup === 'PAPEL' && playup === "TESOURA") {
                console.log('Ganhou');
                score++;
                console.log(cscore);
                console.log(score);
                document.getElementById("mensag").innerHTML = "Ganhou!";  
            }
            
            document.getElementById("scorex").innerHTML = score;
            document.getElementById("cscorex").innerHTML = cscore;
                    
        }
            
        
    
        