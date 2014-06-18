
$(function() {
    //alert('it works!'); //Just a simple test before doing anything else
    alert(AETRIS.planet.name);
});

/* The best practice of not 'polute the global namespace', is not to define a lot of
global variables, but just one object; then add all others as attributes to that object */
var AETRIS ={};
AETRIS.version = "1.2";
AETRIS.planet = {
    id:34,
    name: "Intempstesta Nox",
    meaning: "whatever you believe is necessary, meaningful and important"
};