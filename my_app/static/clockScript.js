setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();

    amPm = "AM";

    if (hour > 12) {
    hour -= 12;
    amPm = "PM"
    }
    if (hour == 0) {
    hour = 12;
    amPm = "AM"
    }

    min = min < 10 ? "0" + min : min;

    let currentTime = hour + ":" + min




    document.getElementById("clock").innerHTML = currentTime;
}

function showAMPM() {
let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();

    amPm = "AM";

    if (hour > 12) {
    hour -= 12;
    amPm = "PM"
    }
    if (hour == 0) {
    hour = 12;
    amPm = "AM"
    }

    let currentAMPM = amPm


    document.getElementById("AMPM").innerHTML = currentAMPM;

}


showTime();
showAMPM();