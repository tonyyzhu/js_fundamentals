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
    //$('#first, .chosen').addClass('highlight');
    // Works. Also: CSS comments is /*whatever*/, not //whatever.

    // Contains
    //$('li:contains("Three")').addClass('highlight');
    // amazing: $ inside $, then select "Three", then addClass...

    // Next: which is four:
    //$('li:contains("Three")').next().addClass('highlight');
    // Previous: which is Two:
    //$('li:contains("Three")').prev().addClass('highlight');
    // All Works!

    // Siblings of 3: 1, 2, 4, 5, 6:
    //$('li:contains("Three")').siblings().addClass('highlight');
    // BTW: () after siblings are important, otherwise it won't work.

    // Parents
    $('li:contains("Three")').parent().addClass('highlight');
    /* There are two different functions:
    1. parent() is parent of 'li', which is 'ul', so yellow hightlight is only unlisted items;
    2. parents() are parent of 'li' and all its ancesters, that includes the whole HTML tags, so the whole document are hightlighted with yellow background.
    */

});