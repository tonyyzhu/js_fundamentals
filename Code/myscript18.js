
$(function() {
    //alert('it works!'); //Just a simple test before doing anything else
    //alert(AETRIS.planet.name);

    /*
    $('#clickMe').click(function() {
        $('#main').append('You should only see this if you click the plus!');
    });
    // Above works when user browser's Javascript turned on,
    // but not when it was turned off. So it is not 'gracful degradation'.
    // The solution is to add the line in HTML body but outside &. under 'Main':
    // <p id="message">You should see this whether JavaScript is on or off.</p>,
    // so that they will see it no matter Js is on or off. Then add extra on top if Js is on.
    */

    // Below is the right way to do it;
    // Principle is there anyway...
     $('#main').append("<img src='plus-8.png' alt='Click me to see the paragraph' id='clickMe' />"); // Add symble using Js

    $('#clickMe').toggle(function() { //toggle between '+' and '-'
     $('#message').show('fast');
     $('#clickMe').attr('src', 'minus-8.png'); // Show message when clicked

    }, function() {
     $('#message').hide('slow');
     $('#clickMe').attr('src', 'plus-8.png'); // Hide message when double-clicked
    });

  $('#message').hide();  // Hide message by default | not clicked

});

/* The best practice of not 'polute the global namespace', is not to define a lot of
global variables, but just one object; then add all others as attributes to that object
var AETRIS ={};
AETRIS.version = "1.2";
AETRIS.planet = {
    id:34,
    name: "Intempstesta Nox",
    meaning: "whatever you believe is necessary, meaningful and important"
};
*/