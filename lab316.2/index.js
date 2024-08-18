const app = document.getElementById('app')
//const gameBox = document.createElement('table')
const randomNum = Math.trunc(Math.random()*100+1)
console.log(Math.trunc);

console.log(randomNum);

//create prompt for user to guess
 let guess
 console.log(guess);
 let output = ''
 
window.alert('Pick a number betwixt 1-100')

do {
    guess = parseInt(window.prompt("pick a number betwixt 1-100"))
    if(randomNum === guess){
        output = 'Aww yis'

    }else{
        output = `Aww dangit, the random number was ${randomNum}`

    }
    window.alert(output)
} while (randomNum !== guess);