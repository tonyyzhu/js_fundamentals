/*
document is the entire DOM
ready: when DOM is loaded and ready
function(): event handler function: when DOM ready, exec the function()
which is alert "this works!"

// First and full formal usage of jQuery:
jQuery(document).ready(function() {
    // start up code goes here
    alert("this works!");
})

// use '$' sign as shortcut of 'jQuery'
$(document).ready(function() {
    // start up code goes here
    alert("this works!");
})


// further simplifying -- omitting those commonly used keywords to shorten codes:
$(function() {
    // start up code goes here
    alert("this works!");
})
*/

/*
//JQuery grammer:
//below is JQuery objects (which is the objects of DOM):
$('.importantText')
$('#myFirstParagraph')
$('p')

// Create HTML on the fly and then pass it onto DOM:
$('<div id="badge"><img src="badge.gif" alt="Badge earned for Achievement"></div>')

$.myCustomMethod = function() {alert('hi');};

// Use JQuery namespace instead of Global namespace, <so that they don't 'polute' the global namespace>
$.listBox = {
    show: function() {};
    hide: function() {};
    position: function() {};
    initiate: function() {};
};

 */

// At Least Read Core API Reference Document from www.jQuery.com;
// before you can use it efficiently
$(function() {
    $("#title").text("Yay, I can now get at the H1 immediately!");
    // change h2 tag content
    $("#first").html("<h2>Great quotes</h2>");
    //append and prepend work INSIDE the given selection
    $("#first").prepend("<h2>Great Great quotes again</h2>");
    $("#first").append("<h3>... for your to ponder ...</h3>");
    //before, after, insertBefore, insertAfter work OUTSIDE the given selection

    // change web link object's target address via JQuery
    $("#myAnchor").attr("href", "http://channel9.msdn.com");

    // add reference to CSS file object 'standout'
    $("#title").addClass("standout");

})
