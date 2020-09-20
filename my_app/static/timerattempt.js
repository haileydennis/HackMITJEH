function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);

        display = document.querySelector('#timerDisplay');
}
document.getElementById("focussesh").addEventListener("click", function(){ startTimer(60*25)}); // MAKE SURE THIS ID CORRESPONDS TO THE BUTTON ID IN HTML
document.getElementById("shortbreak").addEventListener("click", function(){ startTimer(60*5)}); // SAME AS ABOVE
document.getElementById("longbreak").addEventListener("click", function(){ startTimer(60*15)});
