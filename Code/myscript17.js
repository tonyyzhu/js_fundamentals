
$(function() {
    // Test js before development
    // alert('got here');  == Works fine, so comment off
    $("#tabs").tabs();
    // Below "Add" Method no longer available in JQuery 1.10.3. Was available in version 1.8.17:
    //$("#tabs").tabs().tabs("add","myC9JS16.html","Click-a-Bob");
    // This is a separation line =====
    // But, I still checked JQuery UI page and copy/implemented this datepicker function! Cool..
    //$("#datepicker").datepicker();   // after testing and it works, comment off to open way for further testing
    // This is a separation line =====
    // Below is copied from script17.js: JQuery UI API are on various quality due to its open-source nature
    // It is better to test before using, following its demo codes.
    // If it does not work:
    // a. download and experiment;
    // b. consider if you really need it or not;
    // c. hack into its source code and change it to your needs;
    // d. contact its author to see if they could help you for free or paid service, and if you could afford the price or not;
    $("#datepicker").datepicker({
      onSelect: function(dateText, inst) {
        $('#title').text("You picked: " + dateText);
      }
    });
    // It works!
    // BTW, Bob recommend the option d as most commonly used. Option c takes too much time.
    // Option a is everyone's method if it is no more than 15 minutes, then consider option b.
});