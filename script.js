var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false;

function start(){
    timer = true;
    stopWatch();
}

function stop(){
    timer = false;
}

function reset(){
    timer = false;
    //logic
    hr = 0;
    min = 0;
    sec = 0;
    count = 0; 
     
    //display from string "00"
    document.getElementById("Hr").innerHTML = "00";
    document.getElementById("Min").innerHTML = "00";
    document.getElementById("Sec").innerHTML = "00";
    document.getElementById("Count").innerHTML = "00";

}

// Main Function

function stopWatch(){
    if(timer == true){
        setTimeout("stopWatch()",10);   // Main 
        count += 1;

        //Second Logic
        if(count == 100){
            sec += 1; // Increment Second value
            count = 0;
        }
        //Minute Logic
        if(sec == 60){
            min += 1;
            sec = 0;
        }
        //Hour Logic
        if(min == 60){
            hr += 1;
            min = 0;
            sec = 0;
        }

        // Show Two Digit then use Convert String
        var hrString = hr;
        var minString = min;
        var secString = sec;
        var countString = count;

        if(hr < 10){
            hrString = "0" + hrString
        }
        if(min < 10){
            minString = "0" + minString
        }
        if(sec < 10){
            secString = "0" + secString
        }
        if(count < 10){
            countString = "0" + countString
        }
        document.getElementById("Hr").innerHTML = hrString;
        document.getElementById("Min").innerHTML = minString;
        document.getElementById("Sec").innerHTML = secString;
        document.getElementById("Count").innerHTML = countString;   // Display This code

        
    }

}