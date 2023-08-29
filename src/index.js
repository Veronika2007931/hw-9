// #1
// 
// let time = 0;

// const timerId = setInterval(()=>{
//   time += 1
//   if( time === 6){
//     clearInterval(timerId)
//     }else{
//       alert('hello')
// }}, 3000)
//  



// #4

const input = document.querySelector('.inputEl')
const button = document.querySelector('.button')

const value = input.value


button.addEventListener("click", vievAlert)

function vievAlert(){
    console.log(value)
//  setTimeout(() => {
//     alert('hello')
//     }, value);
}


// Не бачить input.value

// // №2

// const circle = document.querySelector('.box')

// function getNumber(){
// setInterval(()=>{

//     const randomColor = Math.floor(Math.random()*16777215).toString(16);
//     circle.style.backgroundColor = "#" + randomColor;

// }, 4000)
// }


// getNumber()


// №3

// const text =  document.querySelector(".alert")
// const button = document.querySelector('.button')
// const button2 = document.querySelector('.button2')
// const header = document.querySelector(".header")
// const timeText = document.querySelector(".mainText")

// let setTime = 0
// button.addEventListener("click", ()=>{
//     setTime += 1
//     text.textContent = setTime
// })

// button2.addEventListener('click', ()=>{
//     const min = 4
//     const max = 10
//     const number = Math.floor(Math.random() * (max - min) + min)
    
//     timeText.innerHTML= `Натисніть на кнопку ${number} разів `

//     timerId = setTimeout(() => {
// if(setTime === number){
//     header.textContent='Ви вийграли!'
//         }else{
//             header.textContent='Ви не встигли :(' 
//         }
//       }, 5000);
// })




