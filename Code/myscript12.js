
//JavaScript has objects but does not have class (and then use a new instance of the class as object)
var batwing = {
    status: "Ready",
    rescueBatman: function() {
        document.write("Locating his transponder ... Initiating launch ...");
    }
}
/*
if (batwing.status === "Ready") {
    batwing.rescueBatman();
}
*/

var utilities = {
    printAllMembers: function(targetObject) {
        for (i in targetObject) {
            document.write("<br />" + targetObject[i]);
        }
    }
}

//utilities.printAllMembers(batwing);

var i_am_empty = {};

//utilities.printAllMembers(i_am_empty);

var planet = {
    id: 34,
    name: "Imtempesta Nox",
    faction: {
        factionId: 2,
        name: "Nex",
        notification: function() {
            document.write("Nex alliance ... unite!");
        }
    },
    cities: [
        {locationId: 15, name: "Gladius"},
        {locationId: 16, name: "Chalybs"},
        {locationId: 17, name: "Ensis"}
    ]
};

/* Complex Example below:
planet.faction.notification();
document.write("<br /> " + planet.cities[1].name);
*/

// rename the planet
document.write("<br />" + planet.name);
planet.name = "Vultus";
document.write("<br />" + planet.name);