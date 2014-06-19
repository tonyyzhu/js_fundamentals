$(function() {
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
            });
     },
    statusCode: {
        404: function() {   //This one won't work, because 404 error message only comes from a Web Server, and currently all files are on HDD instead.
            alert('There was a problem with the server. Try again soon!');
        }
      }
  })
})