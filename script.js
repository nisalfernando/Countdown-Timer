var endDate = new Date("Dec 25, 2019 12:00:00").getTime();

var timer = setInterval(function() {
    let now = new Date().getTime();
    let t = endDate - now;

    // Convert UTC time
    if (t >= 0) {
        // Counting remainings
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);

        document.querySelector("#timer-days").innerHTML =
            days + "<span class='label'>DAY(S)</span>";

        document.querySelector("#timer-hours").innerHTML =
            ("0" + hours).slice(-2) + "<span class='label'>HR(S)</span>";

        document.querySelector("#timer-mins").innerHTML =
            ("0" + mins).slice(-2) + "<span class='label'>MIN(S)</span>";

        document.querySelector("#timer-secs").innerHTML =
            ("0" + secs).slice(-2) + "<span class='label'>SEC(S)</span>";
    } else {
        document.querySelector("#timer").innerHTML = "The countdown is over!";
    }
}, 1000);
