var first=0;
var second=0;
var previous;
moves=0
correct=0
function f1(p,x1)
{
document.getElementById(p).setAttribute("src","hackcover.png")
document.getElementById(x1).setAttribute("src","hackcover.png")
document.getElementById(p).setAttribute("onclick","fn(this.id)")
first=0
second=0
previous=0
}
function f2(p1,x2)
{
document.getElementById(x2).setAttribute("src","matched.png")
document.getElementById(p1).setAttribute("src","matched.png")
document.getElementById(x2).setAttribute("onclick",0)
first=0
second=0
previous=0
correct=correct+2
if(correct==18)
{

}

}
function fn(x)
{
var im1=["a","c1","d2","f"];
var im2=['d1','b1','f1','e'];
var im3=['e1','c2','c',"b2"];
var im4=['b','a1','f2','d'];
var im5=['a2','e2'];
s=x;
if(im1.includes(x))
{
  document.getElementById(x).setAttribute("src","1.jpg")
  if(first==0)
    {
     first=1
     document.getElementById(x).setAttribute("onclick","0")
     previous=x
    }
  else
    {
     second=1
    }
}
else if(im2.includes(x))
{
  document.getElementById(x).setAttribute("src","2.jpg")
  if(first==0)
    {
     first=2
     document.getElementById(x).setAttribute("onclick","0")
     previous=x 
    }
  else
    {
     second=2
    }
}
else if(im3.includes(x))
{
  document.getElementById(x).setAttribute("src","3.jpg")
  if(first==0)
    {
     first=3
     document.getElementById(x).setAttribute("onclick","0")
     previous=x 
    }
  else
    {
     second=3
    }
}
else if(im4.includes(x))
{
  document.getElementById(x).setAttribute("src","4.jpg")
  if(first==0)
    {
     first=4 
     document.getElementById(x).setAttribute("onclick","0")
     previous=x
    }
  else
    {
     second=4
    }
}
else if(im5.includes(x))
{
  document.getElementById(x).setAttribute("src","5.jpg")
  if(first==0)
    {
     first=5
     previous=x 
     document.getElementById(x).setAttribute("onclick","0")
    }
  else
    {
     second=5
    }
}
if(first!=0 & second!=0 & first==second)
{
setTimeout('f2(previous,s)', 500);
}
else if(first!=0 & second!=0 & first!=second)
{
setTimeout('f1(previous,s)', 500); 
}
moves=moves+1
var m=moves.toString()
var mo="MOVES:"+m
document.getElementById("mov").innerHTML=mo

}