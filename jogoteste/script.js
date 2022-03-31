let x = 0;
let y = 0;
let x1= 300;
let y1= 140; 
let x2= 240;
let y2= 200;




let moves = document.addEventListener('keydown', function(event){
    console.log(event.key);
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
            
        }
        
    if (event.key==='ArrowUp') {
        y= y-10;
        if (y<0) {
            y=0;
        }
        document.getElementById("personagem").style.transform = "translate(" + x + "px," + y +"px)";
        
         }
         
         if (x==x1 && y==y1) {
            y1=y+10;
           let y3= y+70; 
           document.getElementById("bloco").style.transform = "translate(" + x1 + "px," + y3 +"px)";
        }
        if (x==x2 && y==y2) {
            x2=x+10;
           let x3= x+70; 
           document.getElementById("bloco").style.transform = "translate(" + x3 + "px," + y2 +"px)";
        }
        
    } );

    
    
   