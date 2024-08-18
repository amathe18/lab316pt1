const randomNum = Math.floor(Math.random() *100 + 1)

console.log(randomNum);

window.alert(guessNumber(randomNum))

function guessNumber(randomNum){
    let guess = parseInt(window.prompt('Pick a number betw 1-100'))
    console.log(guess);
    let attempt = 1
    let returnMessage
    
    if(! isNaN(guess)){
        while(guess !== randomNum && attempt < 10){
            if(guess < randomNum){
                returnMessage = 'too low'
            }else{
                returnMessage = 'too high'
            }
            attempt ++
            guess = parseInt(window.prompt(`${returnMessage},Pick a number betw 1-100`))
            console.log(returnMessage);
            console.log(attempt);
            
        }

    }else{
        returnMessage = 'Please enter valid number'
    }

    if (guess === randomNum){
        returnMessage = 'Youre psychic or something'

    }else{
        returnMessage = 'haha nope'
    }

    console.log(returnMessage);
    return returnMessage;
    
          
    
}   
