var player1Random = Math.floor(Math.random()*6) + 1;
var randomImg = "dice" + player1Random + ".png";
var pl1folder = "images/" + randomImg;
 document.getElementsByClassName('img1')[0].setAttribute('src',pl1folder);






var player2Random = Math.floor(Math.random()*6) + 1;
var randomImg2 = "dice" + player2Random + ".png";
var pl2folder = "images/"+ randomImg2;
document.getElementsByClassName('img2')[0].setAttribute('src',pl2folder);

if(player1Random > player2Random){
    document.querySelector('h1').innerHTML = " 🚩 Player1 Win";
}else if(player2Random > player1Random){
    document.querySelector('h1').innerHTML = "  Player2 Win 🚩";
}else{
    document.querySelector('h1').innerHTML = "  Draw";

}