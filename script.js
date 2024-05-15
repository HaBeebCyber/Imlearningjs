let display = document.getElementById('display')
function checkResult(){
    let myInput = Number(document.getElementById('score').value)
    console.log(myInput);

    if (myInput > 0 && myInput < 40){
        display.innerHTML = `<span>you failed</span>`;
    }else if(myInput>=40){
        display.innerHTML = `<span>You tried</span>`;
    }
}

//Check Out
//Try and catch statement
//loops
//**For loop */
//**while loop */

for (let i =0; i >= 10; i++ ){
    console.log(i)
}


//fizz buzz
//fizz = no divisible by 3
//buzz = no divisible by 5
//fizz buzz = no divisible by 3 and 5
//else = not applicable

// concertination
let food = "Yam"
let stew = "Peppered snail stew"
let protein = "beans"

console.log (`I love to eat ${food} garnished with ${stew} and ${protein}`)