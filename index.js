 function bubble(){
 var clutter=""; 
 for(var i=1;i<=114;i++)
{
      var rn= Math.floor(Math.random()*10)
    clutter+=`<div class="circle">${rn}</div>`;
}
document.querySelector(".pbottom").innerHTML = clutter;
 }


 var timer=60;
function runtimer(){
    
   var timer1 = setInterval(function(){
        if(timer > 0)
            {
        timer--;
        document.querySelector("#timer").textContent=timer;
            }
            else{
                clearInterval(timer1)
                
                document.querySelector(".pbottom").innerHTML="";
                document.querySelector(".pbottom").innerHTML="<h1>Game over</h1>";
                document.querySelector("#hitval").textContent= "";
                document.querySelector("#score").textContent= "";
            }
    },1000);
}
   var val;
function newhit(){
     val = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent= val;
}
 var score1=0;
 function scoreincrease(){
       score1+=10;
    document.querySelector("#score").textContent= score1;




 }
      document.querySelector(".pbottom").addEventListener("click",function(dets){
          var click=(Number(dets.target.textContent))
          if(val==click)
            {
              scoreincrease();  
              bubble();
              newhit();
            }
            else{

            }
      }
    );
runtimer();
bubble();
newhit();
scoreincrease();