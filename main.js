/* Game functions
-Player must guess a number between 1 and 10
-Player gets an certain amount of guess
-Notify player of guess remaining
-Notify the player of the correct answer is loose
-Let player choose to play again
*/

//  values
let min =1,
    max =10,
    winningNum =2,
    guessLeft = 3;

//UI elements
const game = document.querySelector('#game'),
     minNum = document.querySelector('.min-num'),
     maxNum = document.querySelector('.max-num'),
     guessBtn = document.querySelector('#guessbtn'),
     guessInput = document.querySelector('#guess-input'),
     message = document.querySelector('.message');

// min and max
     minNum.textContent = min;
     maxNum.textContent = max;
 
 //Listen for guess
   guessBtn.addEventListener('click',function(){
 //omvandlar string till int
    let guess = parseInt(guessInput.value);
  
//validate
if(isNaN(guess) || guess < min || guess > max){
  setMessage(`Please enter a number between ${min} and ${max}`, 'red');

}else{
}
//check if won
    if (guess === winningNum ){
 //won
    gameOver(true, `${winningNum}  is the winning number!`);

    }else{
// wrong number
    guessLeft -= 1;
  
  if(guessLeft === 0){
//game over
gameOver(false,`Game over!`);

       }else{
// game continues
//color
  guessInput.style.borderColor = 'blue';

// Clear input
guessInput.value = '';
//message
     setMessage(`${guess} is not correct, ${guessLeft}guesses left!`);
   }
 }
 }); 

 //Game over
 function gameOver(won,msg){
     let color;
     won === true? color = 'rgb(56, 189, 107)': color = 'red';
//   disable input
      guessInput.disabled = true;
//color
      guessInput.style.backgroundColor = color;
     
   //message 
    message.style.color = color;  
     setMessage(msg);
 }
 
 // message
     function setMessage(msg, color){
     message.style.color = color;
     message.textContent = msg;
 }