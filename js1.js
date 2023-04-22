let delay=500;
let Lev=1;
let count=1;
function Change_Loca()
  {
   btn.style.marginLeft =Math.random()*500+ "px";
    btn.style.marginTop = Math.random()*500 + "px";
    btn.style.backgroundColor = "rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")";
    btn.style.color = "rgb("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+")";
    btn.style.borderRadius = Math.random()*100 + "px";
  }

function Level_Up(btn)
{

    let message="Level"+(Lev);
   
   if(Lev >0 && Lev <= 6) 
   {
    if(count==3)
    {
      alert(message);
      Lev++;
      delay-=100;
      count=0;
    }
    if(Lev==6)
    {
      delay=0;
    }
    count++;
   }
      
  if(Lev > 6)
  {
    alert("You Win, press OK to play again");
    Lev=1;
  }
    

}