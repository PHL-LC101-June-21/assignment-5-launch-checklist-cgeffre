require('isomorphic-fetch');

function addDestinationInfo(planet) {
    document.getElementById("missionTarget").innerHTML  = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${planet[0].name}</li>
                    <li>Diameter: ${planet.diameter}</li>
                    <li>Star: ${planet.star}</li>
                    <li>Distance from Earth: ${planet.distance}</li>
                    <li>Number of Moons: ${planet.moons}</li>
                </ol>
                <img src="${planet.image}">
                `    
}

function validateInput(testInput) {
    if (testInput.value === "") {
        return "Empty";
    } else if (isNaN(testInput.value) === true) {
        return "Not a Number";
    } else if (typeof Number(testInput.value) === "number") {
        return "Is a Number";
    }
}

// Validates data and updates HTML
function formSubmission(doc, list, pilot, copilot, fuelLevel, cargoLevel) {
    let submitReady = true;
    if (validateInput(pilot) === "Empty" || validateInput(pilot) === "Is a Number") {
        alert("Invalid pilot input!");
        submitReady = false;
        event.preventDefault();
    } 
    if (validateInput(copilot) === "Empty" || validateInput(copilot) === "Is a Number") {
        alert("Invalid copilot input!"); 
        submitReady = false;
        event.preventDefault();   
    }
    if (validateInput(fuelLevel) === "Empty" || validateInput(fuelLevel) === "Not a Number") {
        alert("Invalid fuel level input!");
        submitReady = false;
        event.preventDefault();  
    }    
    if (validateInput(cargoLevel) === "Empty" || validateInput(cargoLevel) === "Not a Number") {
        alert("Invalid cargo level input!");
        submitReady = false;
        event.preventDefault();   
    }
    if (submitReady === true) {
        list.style.visibility = "visible";
        document.getElementById("pilotStatus").innerHTML = `${pilot.value} is Ready`;
        document.getElementById("copilotStatus").innerHTML = `${copilot.value} is Ready`;
        if (fuelLevel.value < 10000) {
            document.getElementById("fuelStatus").innerHTML = `Not enough fuel!`;
            document.getElementById("launchStatus").innerHTML = `Shuttle Not Ready For Launch`;
            document.getElementById("launchStatus").style.color = "red";
        }
        if (cargoLevel.value > 10000) {
        document.getElementById("cargoStatus").innerHTML = `Too much cargo for liftoff`;
        document.getElementById("launchStatus").innerHTML = `Shuttle Not Ready For Launch`;
        document.getElementById("launchStatus").style.color = "red";
        }
        if (cargoLevel.value < 10001 && fuelLevel.value > 9999) {
        document.getElementById("launchStatus").innerHTML = `Shuttle Ready For Launch`;
        document.getElementById("launchStatus").style.color = "green";
        }
    }
}

async function myFetch () {
    json = [];
    let planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        json = response.json();
    });
    return json;
}

function pickPlanet(planets) {
    let planet = Math.floor(Math.random()*planets.length);
    return planet;
}

module.exports = {
addDestinationInfo: addDestinationInfo,
validateInput: validateInput,
formSubmission: formSubmission,
pickPlanet: pickPlanet,
myFetch: myFetch
}
