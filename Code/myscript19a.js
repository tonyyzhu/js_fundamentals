$(function() {
    //alert('It works!');
    /*
        /$('#clickme').click(function() {
        $.getJSON('data19.json', function(data) { // function(data) here is called 'call back function', and data is called 'map'.
            var items = [];
            $.each(data, function(key, val) {  // each() function needs to be checked out before usage
                items.push('<li id=" ' + key + ' ">' + val + '</li>'); // Pay attention to " as double quotes and ' as single quotes. Otherwise it won't work.
            });
            $('<ul/>', {
                'class': 'interest-list', // create class called 'interest-list' as unordered list
                html: items.join('')    // use another method join(); line 7 used push() method.
            }).appendTo('body');    // used appendTo() method for 'body' tag.
        });
    });
  // The downside of $.getJSON() method, is if somehow you can't connect to 'data19.json' file, there will be no error message or warning message, or anything at all, that makes debugging really hard, if impossible;
  // So therefore it is better not to use it, unless it is the simplest case. Otherwise please use ajax() method, and I will comment out the whole method.
  */

  $.ajax({
    url: 'data19.json',
    dataType: 'json',
    success: function(data) {  // copy all above into here as success case
            $.getJSON('data19.json', function(data) {
            var items = [];
            $.each(data, function(key, val) {
                items.push('<li id=" ' + key + ' ">' + val + '</li>');
            });
            $('<ul/>', {
                'class': 'interest-list',
                html: items.join('')
            }).appendTo('body');
    },
    statusCode: {
        404: function() {
            alert('There was a problem with the server. Try again soon!');
        }
    }
  })


})