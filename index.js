var randomnumber1=Math.floor((Math.random()*6)+1);
var randomnumber2=Math.floor((Math.random()*6)+1);
//var imgarray=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
var randomimagesource1="images/dice"+randomnumber1+".png";
var randomimagesource2="images/dice"+randomnumber2+".png";
document.querySelector("div .img1").setAttribute("src" ,randomimagesource1);
document.querySelector("div .img2").setAttribute("src" ,randomimagesource2);
if(randomnumber1>randomnumber2){
  document.querySelector(".container h1").textContent="👍player 1 wins👎";
}
else if(randomnumber2>randomnumber1){
  document.querySelector(".container h1").textContent="👎player 2 wins👍";
}
else{
  document.querySelector(".container h1").textContent="🤝DRAW🤝";
}
