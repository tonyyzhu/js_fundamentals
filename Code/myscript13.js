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
/*
    var myElement = document.getElementById('second');

    var myNodeName = myElement.nodeName;
    // alert(myNodeName); // This is to get the HTML file DOM Object Name, which is "p" object here for ID = second

    if (myElement != null) {
        alert (myElement.innerHTML); //display HTML content inside <p> object for ID = second;
        // It is 'dangerous' to continue to use 'innerHTML' after HTML5 comes out.
        // People would rely on JQuery to replace 'innerHTML', due to various browser support.
    };

// innerHTML can also be used to change the content of HTML file when using the statements below:
    document.getElementById('second').innerHTML = "See how I set the text here?"
    // However, it is not an permanent change -- the HTML file itself did not save & store this change;
    // Only when THIS JS file is used and this statement is enabled, then this change is real/displayed.
*/

/*  LIST usage in JavaScript:
var listOfParagraphs = document.getElementsByTagName('p');

//alert(listOfParagraphs.length); //display how many Paragraphs the HTML file has

var secondParagraph = listOfParagraphs[1];

alert(secondParagraph.innerHTML);
*/

/* Navigator through the DOM Object Tree, using following examples:
var myElement = document.getElementById('second');
alert(myElement.parentNode.nodeName);   // Display the parent object name, which is 'body'
alert(myElement.firstChild);
alert(myElement.childNodes[0].nodeValue);
alert(myElement.lastChild.nodeType);
alert(myElement.nextSibling);
alert(myElement.nextSibling.nodeName);
alert(myElement.previousSibling);
*/

// Modify object's properties inside the DOM Tree:
var anchor = document.getElementById('myAnchor');
var anchorDestination = anchor.href;  // Not every browser allows you to refer to this property;
alert(anchorDestination);

anchor.href = "http://www.learnvisualstudio.net";
alert(anchor.href);

}