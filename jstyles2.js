let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");

b1.addEventListener('click', startTime);
b2.addEventListener('click', stopTime);
b3.addEventListener('click', resetTime); //Line 1-7: Initilized buttons and added eventListener and relevant functions to each buttons.

let timeInt;
var seconds = 3;

function startTime(){ //Line 12-21: This function is used to trigger the Start and Resume button of the Stopwatch.
    if (timeInt) return;
    timeInt = setInterval(function() {
        document.getElementById('watch').innerHTML = zeroAdd(seconds);
        seconds+=3;
        if (seconds > 30){
            clearInterval(timeInt);
            b1.style.pointerEvents = 'none';  //Disables Start and Pause button when timer hits 30
            b2.style.pointerEvents = 'none';
            document.getElementById('r').style.color = 'maroon';    
        }
    }, 1000);
}

function zeroAdd(t){  //Line 23-28: Adds 0 to the start of the count if the number displayed is less than 10.
    if (t<10){
        t = "0"+ t;
    }
    return t;
}

function resetTime(){  //Line 30-35: This function is used to trigger the Reset button of the Stopwatch.
    document.getElementById('watch').innerHTML = "00";
    stopTime() ;
    seconds = 0;
    b1.style.pointerEvents = 'auto';   //Enables Start and Pause button after resetting.
    b2.style.pointerEvents = 'auto';
    document.getElementById('r').style.color = 'black';
}

function stopTime(){  //Line 37-41: This function is used to trigger the Pause button of the Stopwatch.
    clearInterval(timeInt);
    timeInt = null;

}
