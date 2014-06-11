window.onload = function() {
    //var clickMeButton = document.getElementById('clickMe');
    //clickMeButton.onclick = runTheExample;
    //Better code below:

    document.getElementById('clickMe').onclick = runTheExample;

}

function runTheExample() {
    alert('running the example');
}