let randomNumber1=Math.random();
randomNumber1=Math.floor(randomNumber1*6)+1;

let randomDiceImage='dice'+randomNumber1+'.png';
let randomImageSource='images/'+randomDiceImage;

let dice1=document.querySelectorAll('img')[0];
dice1.setAttribute('src',randomImageSource);

let randomNumber2=Math.floor(Math.random()*6)+1;

let randomDiceImage2='dice'+randomNumber2+'.png';
let randomImageSource2='images/'+randomDiceImage2;

let dice2=document.querySelectorAll('img')[1];
dice2.setAttribute('src',randomImageSource2);

if(randomNumber1>randomNumber2){
    document.querySelector('h1').innerHTML='Player 1 Win🚩';
}
else if(randomNumber2>randomNumber1){
    document.querySelector('h1').innerHTML='Player 2 Win🚩';
}
else{
    document.querySelector('h1').innerHTML="Draw!";
}