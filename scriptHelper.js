require('isomorphic-fetch');

function addDestinationInfo(planet, selected) {
    document.getElementById("missionTarget").innerHTML  = ` 
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${planet[selected].name}</li>
                    <li>Diameter: ${planet[selected].diameter}</li>
                    <li>Star: ${planet[selected].star}</li>
                    <li>Distance from Earth: ${planet[selected].distance}</li>
                    <li>Number of Moons: ${planet[selected].moons}</li>
                </ol>
                <img src="${planet[selected].image}">
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
    if (validateInput(pilot) === "Is a Number") {
        alert("Invalid pilot input!");
        submitReady = false;
        event.preventDefault();
    } 
    if (validateInput(copilot) === "Is a Number") {
        alert("Invalid copilot input!"); 
        submitReady = false;
        event.preventDefault();   
    }
    if (validateInput(fuelLevel) === "Not a Number") {
        alert("Invalid fuel level input!");
        submitReady = false;
        event.preventDefault();  
    }    
    if (validateInput(cargoLevel) === "Not a Number") {
        alert("Invalid cargo level input!");
        submitReady = false;
        event.preventDefault();   
    }
    if (submitReady === true) {
        list.style.visibility = "visible";
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot.value} is ready for launch`;
        document.getElementById("copilotStatus").innerHTML = `Copilot ${copilot.value} is ready for launch`;
        if (fuelLevel.value < 10000) {
            document.getElementById("fuelStatus").innerHTML = `Not enough fuel`;
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
    planets = Math.floor(Math.random()*planets.length);
    return planets;
}

module.exports = {
addDestinationInfo: addDestinationInfo,
validateInput: validateInput,
formSubmission: formSubmission,
pickPlanet: pickPlanet,
myFetch: myFetch
}
