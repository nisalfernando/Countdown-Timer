var endDate = new Date("Dec 25, 2019 12:00:00").getTime();

var timer = setInterval(function() {
    let now = new Date().getTime();
    let t = endDate - now;
}, 1000);
