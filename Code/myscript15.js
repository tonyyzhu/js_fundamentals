$ (function() {
    // This is to test if JQuery function works or not.
    //alert("Hi! This is to verify that JS file works correctly");
    // After verification, Just disable it. TDD method?

    // Verify by calling via id, and add class to verify CSS file class works or not:
    //$('#first').addClass('highlight');
    // Disable after verified

    // By element /  tag
    //$('p').addClass('highlight');
    // Disable after verified

    // By class
    //$('.chosen').addClass('highlight');
    // It is amazing that you can add class after selecting its old class...

    // use ',' to select more than one element for addClass, or Combination as Bob calls it:
    $('#first, .chosen').addClass('highlight');
    // But, .chosen class is not working after above example, why ??

    // Contains
   // $('li:contains("Three")').addClass('highlight');


});