// Function to create a clock
var displayTime = function() {
    var time = moment().format('HH:mm:ss');
    $('#time').text(time);
    setInterval(displayTime, 1000);
};

exports.displayTimeModule = displayTime;