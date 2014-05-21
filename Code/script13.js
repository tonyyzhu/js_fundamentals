//document.getElementById('clickMe').onclick = runTheExample;

function runTheExample() {
 
  /*
  var myElement = document.getElementById('second');

  var myNodeName = myElement.nodeName;

  if (myElement != null) {
    alert(myElement.innerHTML);
    alert(myNodeName);
  }

  myElement.innerHTML = "See how I set the text here?";
  */

  /*
  var listOfParagraphs = document.getElementsByTagName('p');
  alert(listOfParagraphs.length);
  var secondParagraph = listOfParagraphs[1];
  alert(secondParagraph.innerHTML);
  */

  /*
  myElement = document.getElementById('main');
  //alert(myElement.parentNode.nodeName);
  //alert(myElement.childNodes[0].nodeName);
  alert(myElement.nextSibling.nodeName);
  */
  
  var anchor = document.getElementById('myAnchor');
  var anchorDestination = anchor.href;

  alert(anchorDestination);

  anchor.href = "http://www.learnvisualstudio.net";


}