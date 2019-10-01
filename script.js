var endDate = new Date("Dec 25, 2019 12:00:00").getTime();

var timer = setInterval(function() {
    let now = new Date().getTime();
    let t = endDate - now;

    // Convert UTC time
    if (t >= 0) {
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    }
}, 1000);
