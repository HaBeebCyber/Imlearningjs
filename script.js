let display = document.getElementById('display')
function checkResult(){
    var myInput = Number(document.getElementById('score').value)
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

for (var i =0; i >= 10; i++ ){
    console.log(i)
}


//fizz buzz
//fizz = no divisible by 3
//buzz = no divisible by 5
//fizz buzz = no divisible by 3 and 5
//else = not applicable