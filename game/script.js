
let turn = 1;
const btnText =  document.getElementById("btn1");
const newgame = document.getElementById("btn2");
newgame.style.display="none";
 
const random =  () =>{
    return  Math.floor(Math.random()*6) + 1;
} 



const call = () =>{
    if(turn === 1){
       number1 =  random();
        const play1dice = `images/${number1}.png`;
        document.getElementById('check1').setAttribute('src', play1dice);
       
        btnText.innerHTML = "player 2 turn"
        turn = 0;
       
     }else if(turn === 0){
        number2 =  random();
        const play2dice = `images/${number2}.png`;
        document.getElementById('check2').setAttribute('src', play2dice);
        btnText.style.display="none";
        newgame.style.display="block";
        btnText.innerHTML = "player 1 turn"
        turn = 1;
        winner();
        
     }
  
}
 const winner = () =>{
   if(number1 > number2){
       document.querySelector('h1').innerHTML = "Player 1 won 😎"
   }else if(number1 < number2){
           document.querySelector('h1').innerHTML = "Player 2 won 😎"
       }else{
           document.querySelector('h1').innerHTML = "DRAW 😯"
       }
 }

const newGame = () =>{
    window.location.reload();
//     btnText.style.display="block";
//     newgame.style.display="none";
//     const play2dice = `images/1.png`;
//     document.querySelector('h1').innerHTML = "JS LUDO"
// document.getElementById('check2').setAttribute('src', play2dice);
// const play1dice = `images/1.png`;
// document.getElementById('check1').setAttribute('src', play1dice);


}



btnText.addEventListener('click', call);
newgame.addEventListener('click', newGame);




