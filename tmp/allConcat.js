var Calculator = require('./../js/pingpong.js').calculatorModule;
$(document).ready(function () {
    $('#ping-pong-form').submit(function (event) {
        event.preventDefault();
        var goal = $('#goal').val();
        var simpleCalculator = new Calculator('hot pink');
        var output = simpleCalculator.pingPong(goal);
        output.forEach(function (element) {
            $('#solution').append("<li>" + element + "</li>");
        });
    });
});

$(document).ready(function () {
    $('form#signup').submit(function (event) {
        event.preventDefault();
        var email = $('input#email').val();
        $('form#signup').hide();
        $('#solution').prepend('<p>Thank you ' + email + ' has been added to our list!</p>');
    });
});

var displayTime = require('./../js/time.js').displayTimeModule;

$(document).ready(function() {
        displayTime();
});



var Weather = require('./../js/weather.js').weatherModule;

var displayHumidity = function(city, humidityData) {
  $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%");
};

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getWeather(city, displayHumidity);
  });
});
