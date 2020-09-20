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
    else {
    amPm = "AM"
    }

    let currentTime = hour + ":" + min + amPm



    document.getElementById("clock").innerHTML = currentTime;
}

showTime();