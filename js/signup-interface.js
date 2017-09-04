$(document).ready(function () {
    $('form#signup').submit(function (event) {
        event.preventDefault();
        var email = $('input#email').val();
        $('form#signup').hide();
        $('#solution').prepend('<p>Thank you ' + email + ' has been added to our list!</p>');
    });
});
