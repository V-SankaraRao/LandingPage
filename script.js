let t=document.getElementById("timer");
let min=59;
let time=59;
function timing(){
   time--;
   t.innerHTML="00:"+min+":"+time;
   if(time==0){
    time=59;
    min--;

   }
}
setInterval(timing,1000);