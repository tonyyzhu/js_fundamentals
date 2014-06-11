window.onload = function() {
    //var clickMeButton = document.getElementById('clickMe');
    //clickMeButton.onclick = runTheExample;
    //Better code below:

    document.getElementById('clickMe').onclick = runTheExample;

}

/*
function runTheExample() {
    alert('running the example');
}
*/

function runTheExample() {

    var myElement = document.getElementById('second');

    var myNodeName = myElement.nodeName;
    // alert(myNodeName); // This is to get the HTML file DOM Object Name, which is "p" object here for ID = second

    if (myElement != null) {
        alert (myElement.innerHTML); //display HTML content inside <p> object for ID = second;
        // It is 'dangerous' to continue to use 'innerHTML' after HTML5 comes out.
        // People would rely on JQuery to replace 'innerHTML', due to various browser support.
    };


}