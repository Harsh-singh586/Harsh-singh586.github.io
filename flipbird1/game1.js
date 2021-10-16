var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
speed=85
or_speed=85
proc=0
level=0
var id;
active=0
var score = 0
function f1(speed){
    id = setInterval(frame, speed);
    }
function frame() {
    if (pos1 == 0) {
      m=rnd()
      var upper = m+"vw"
      var lower = (23-r)+"vw"
      a1.style.height=upper
      a2.style.height=lower
      a1.style.left = 90 + "vw";
      a2.style.left = 90 + "vw";
      pos1=90
    } else {
      pos1--;
      if(pos1==7)
      { 
         check(a1,a2);
        
      }
      else if(pos1==8)
      {
       save(a1,a2)
      }  
      a1.style.left = pos1 + "vw";
      a2.style.left = pos1 + "vw";
    }
   if (pos2 == 0) {
      m=rnd()
      var upper = m+"vw"
      var lower = (23-r)+"vw"
      b1.style.height=upper
      b2.style.height=lower
      b1.style.left = 90 + "vw";
      b2.style.left = 90 + "vw";
      pos2=90
    } else {
      pos2--; 
       if(pos2==7)
      { 
        check(b1,b2);
      }
      else if(pos2==8)
      {
       save(b1,b2)
      }   
      b1.style.left = pos2 + "vw";
      b2.style.left = pos2 + "vw";
  }
  if (pos3 == 0) {
      m=rnd()
      var upper = m+"vw"
      var lower = (23-r)+"vw"
      c1.style.height=upper
      c2.style.height=lower
      c1.style.left = 90 + "vw";
      c2.style.left = 90 + "vw";
      pos3=90
    } else {
      pos3--;
       if(pos3==7)
      { 
        check(c1,c2);
        
      }
       else if(pos3==8)
      {
       save(c1,c2)
      }    
      c1.style.left = pos3 + "vw";
      c2.style.left = pos3 + "vw";
    }
  if (pos4 == 0) {
      m=rnd()
      var upper = m+"vw"
      var lower = (23-r)+"vw"
      d1.style.height=upper
      d2.style.height=lower
      d1.style.left = 90 + "vw";
      d2.style.left = 90 + "vw";
      pos4=90
    } else {
      pos4--;
       if(pos4==7)
      {
       
       check(d1,d2);
      }
      else if(pos4==8)
      {
       save(d1,d2)
      }      
      d1.style.left = pos4 + "vw";
      d2.style.left = pos4 + "vw";
    }
}
function ins()
{
if(isMobile==false)
{
alert("Press u for UP and d for Down and f for fire")
}
else
{
alert("Press Respective Buttons")
document.getElementById("up").style.visibility="visible"
document.getElementById("dwn").style.visibility="visible"
document.getElementById("fire").style.visibility="visible"
}
}
function leng(l)
{
l1=l.length
if(l1==4)
{
l=parseInt(l[0]+l[1])
}
else{
l=parseInt(l[0])
}
return l
}
function save(s1,s2)
{
if(active==1)
{
s1.style.height=0
s2.style.height=0
active=0
proc--;
document.getElementById("protect").style.visibility="hidden"
document.getElementById("proc").innerHTML="LIFELINE:"+proc
}
}
function check(s1,s2)
{
upper_height=s1.style.height
lower_height=s2.style.height
upper_height=leng(upper_height)
lower_height=leng(lower_height)
bird_loc=document.getElementById("bird").style.top
bird_loc=leng(bird_loc)
if(upper_height<=bird_loc & 30-(bird_loc+4)>=lower_height)
{
score++
document.getElementById("score").innerHTML="SCORE:"+score;
if(score%5==0.0)
{
  speed=or_speed-parseInt(score/5)*5
  proc++
  level++
  document.getElementById("level").innerHTML="LEVEL:"+level
  document.getElementById("proc").innerHTML="LIFELINE:"+proc
  clearInterval(id)
  f1(speed)
}
}
else{
clearInterval(id)
document.getElementById("rld").style.visibility="visible"
document.getElementById("dwn").style.visibility="hidden"
document.getElementById("up").style.visibility="hidden"
document.getElementById("fire").style.visibility="hidden"
document.getElementById("myAudio").pause();
}
}
function rnd()
{
k=Math.floor(Math.random() * (18 - 5 + 1) + 5);
r=parseInt(k)
return r
}
function myMove() {
   document.getElementById("score").innerHTML="SCORE:"+score;
   document.getElementById("play").style.visibility="hidden"
   document.getElementById("myAudio").play(); 
   a1 = document.getElementById("a1");   
   a2 = document.getElementById("a2");
   b1 = document.getElementById("b1");   
   b2 = document.getElementById("b2");
   c1 = document.getElementById("c1");   
   c2 = document.getElementById("c2");
   d1 = document.getElementById("d1");   
   d2 = document.getElementById("d2");
   pos1 = 30;
   pos2 = 50;
   pos3 = 70;
   pos4 = 90;
  $("body").keypress(function(event)
      {
        if(event.which==117)
          {Up()
          }
        else if(event.which==100)
          {Down()}
        else if(event.which==102)
          {fire()}
      })
  score=0    
    f1(speed)
 }
function Down()
{
a=document.getElementById("bird").style.top
l=a.length
if(l==4)
{
b=a[0]+a[1];
}
else{
b=a[0];
}
var c=b;
c++;
c++;
c++;
c++;
if(c>=26)
{
document.getElementById("bird").style.top=26+"vw"
}
else
{
b++;
b=b+"vw";
document.getElementById("bird").style.top=b
}
}
function Up()
{
a=document.getElementById("bird").style.top
l=a.length
if(l==4)
{
b=a[0]+a[1];
}
else{
b=a[0]
}
var c=b;
if(c<=0)
{
document.getElementById("bird").style.top=0+"vw"
}
else
{
b--;
b=b+"vw";
document.getElementById("bird").style.top=b
}
}
function fire()
{
if(proc>0)
{
document.getElementById("protect").style.visibility="visible"
active=1
}
}