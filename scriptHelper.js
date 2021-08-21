require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
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

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot) === "Empty" || validateInput(pilot) === "Is a Number") {
        alert("Invalid pilot input!");
        event.preventDefault();
    }
    if (validateInput(copilot) === "Empty" || validateInput(copilot) === "Is a Number") {
        alert("Invalid copilot input!"); 
        event.preventDefault();   
    }
    if (validateInput(fuelLevel) === "Empty" || validateInput(fuelLevel) === "Not a Number") {
        alert("Invalid fuel level input!");  
        event.preventDefault();  
    }    
    if (validateInput(cargoLevel) === "Empty" || validateInput(cargoLevel) === "Not a Number") {
        alert("Invalid cargo level input!");
        event.preventDefault();   
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports = {
addDestinationInfo: addDestinationInfo,
validateInput: validateInput,
formSubmission: formSubmission,
pickPlanet: pickPlanet,
myFetch: myFetch
}
