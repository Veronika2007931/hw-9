// #1
//  let time = 0;
//  function getTimer(){
//   const  timerId = setInterval(() => {
//     alert('hello')
//     //  const times = time + 1
//     //  console.log(times)
//     }, 4000);
 
   
//   if( timerId >= 5){
//     clearInterval(timerId)
//     }
//  }

// Як зробити так щоб після 5 повторів воно зупитялось

// #4

const input = document.querySelector('.inputEl')
const button = document.querySelector('.button')

const value = input.value
button.addEventListener("click", vievAlert)

function vievAlert(){
  const now = setInterval(() => {
    alert('hello')
    }, value);
}


// Не бачить input.value




