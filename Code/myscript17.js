
$(function() {
    // Test js before development
    // alert('got here');  == Works fine, so comment off
    $("#tabs").tabs();
    // Below "Add" Method no longer available in JQuery 1.10.3. Was available in version 1.8.17:
    //$("#tabs").tabs().tabs("add","myC9JS16.html","Click-a-Bob");
    $("#datepicker").datepicker();
    // But, I still checked JQuery UI page and copy/implemented this datepicker function! Cool..
});