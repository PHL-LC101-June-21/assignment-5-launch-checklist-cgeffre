window.addEventListener("load", function() {

    // Validation checks that all fields have a valid input and posts data
    let formSection = document.getElementById("launchForm");
    launchForm.addEventListener("submit", function (event) {
        let pilotCheck = formSection.querySelector("input[name=pilotName]");
        let copilotCheck = formSection.querySelector("input[name=copilotName]");
        let fuelCheck = formSection.querySelector("input[name=fuelLevel]");
        let cargoCheck = formSection.querySelector("input[name=cargoMass]");
        let list = document.getElementById("faultyItems");
        if (pilotCheck.value === "" || copilotCheck.value === "" || fuelCheck.value === "" || cargoCheck.value === "") {
            alert("Please enter data for all fields.");
            event.preventDefault();
        } else {
        formSubmission(document, list, pilotCheck, copilotCheck, fuelCheck, cargoCheck);
        }
    });

    //Calls to fetch data and parse results
    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    console.log(listedPlanetsResponse);
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
    //Randomly select planet index from data and provide destination information
        let selected = pickPlanet(listedPlanets);
        addDestinationInfo(listedPlanets, selected);
     })
   
});