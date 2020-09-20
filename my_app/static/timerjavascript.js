var countDownTime = -1;
var seshOn = 0;
var sBreakOn = 0;
var lBreakOn = 0;
var timerOn = 0;
var prevState = -1;  // stores the last state the timer was in, denoting 0 - sesh, 1 - short break, 2 - long break

document.getElementById("focussesh").addEventListener("click", function(){ countdown(25)}); // MAKE SURE THIS ID CORRESPONDS TO THE BUTTON ID IN HTML
document.getElementById("shortbreak").addEventListener("click", function(){ countdown(5)}); // SAME AS ABOVE
document.getElementById("longbreak").addEventListener("click", function(){ countdown(15)}); // SAME AS ABOVE

// MAKE SURE THE "timerDisplay" ID is given to the tag that will contain the countdown time

function countdown(inverval){
  // setting or pausing the timer
  if (seshOn == 1 || sBreakOn == 1 || lBreakOn == 1 ){
    // pause the counter
    minutes = countdown
    seconds = 0
    let freshDisplay = minutes + ":00"
    document.getElementById("timerDisplay").innerHTML = freshDisplay

  } else {
    if (!((interval == 25 && prevState == 0) || (interval == 5 && prevState == 1) || (interval == 15 && prevState == 2))) { // if the current state is not the same and the previous
      // restart the counter using interval as the set time
      var now = new Date().getTime();
      countDownTime = new Date(now.getTime+ interval*60000);
      timerOn = 1;
    }

    // update the countdown every second
    if (timerOn == 1) {
      var x = setInterval(function() {
        now = Date.getTime();
        var distance = countDownTime - now;

        // convert the distance to hours, minutes, etc
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // display the result in the element with id "timerDisplay"
        let timerDisplay = minutes + ":" + seconds
        document.getElementById("timerDisplay").innerHTML = timerDisplay;

        if (distance < 0){
          clearInterval(x);
          let timerDisplay = "00:00"
        }

      }, 1000);

    }

  }

}