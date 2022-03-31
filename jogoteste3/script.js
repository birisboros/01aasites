let x = 0;
let y = 0;
let x1= 300;
let y1= 140; 
let x2;
let y2;

let moves = document.addEventListener('keydown', function(event){
    console.log(event.key);
    x2=x;
    y2 = y+10;
    document.getElementById("bloco").style.transform = "translate(" + x1 + "px," + y1 +"px)";
    if (event.key==='ArrowRight') {
        x= x+=10;
        
        if (x>440){x=440;}
        
        document.getElementById("personagem").style.transform = "translate(" + x + "px," + y +"px)";
        
        
        }
        
        
    if (event.key==='ArrowLeft') {
        x= x-10;
        if (x<0) {
            x=0;
        }   
        document.getElementById("personagem").style.transform = "translate(" + x + "px," + y +"px)";
        
        }
    if (event.key==='ArrowDown') {
        y= y+10;
        if (y>440) {y=440;
            
        }
        document.getElementById("personagem").style.transform = "translate(" + x + "px," + y +"px)";
        console.log(x);
        console.log(y);
        console.log(x1);
        console.log(y1);
        console.log(x2);
        console.log(y2);   
        }
        
    if (event.key==='ArrowUp') {
        y= y-10;
        if (y<0) {
            y=0;
        }
        document.getElementById("personagem").style.transform = "translate(" + x + "px," + y +"px)";
        
         }
         
    if (x==(x2+60) && y==y2) {
            y1=y+10;
           let y3= y+50; 
           document.getElementById("bloco").style.transform = "translate(" + x1 + "px," + y3 +"px)";
        }
    if (x==x2 && y==y2) {
            x2=x+10;
           let x3= x+70; 
           document.getElementById("bloco").style.transform = "translate(" + x3 + "px," + y2 +"px)";
        }
        
    } );
    