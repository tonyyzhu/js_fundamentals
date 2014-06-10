//JavaScript has objects but does not have class (and then use a new instance of the class as object)
var batwing = {
    status: "Ready",
    rescueBatman: function() {
        document.write("Locating his transponder ... Initiating launch ...");
    }
}

if (batwing.status === "Ready") {
    batwing.rescueBatman();
}