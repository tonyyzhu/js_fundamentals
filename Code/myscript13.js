window.onload = function() {
    var clickMeButton = document.getElementById('clickMe');
    clickMeButton.onclick = runTheExample;
}

function runTheExample() {
    alert('running the example');
}