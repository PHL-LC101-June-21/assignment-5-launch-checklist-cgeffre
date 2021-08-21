window.addEventListener("load", function() {

    // Validation checks that all fields have a valid input and posts data
    let formSection = document.getElementById("launchForm");
    launchForm.addEventListener("submit", function (event) {
        let pilotCheck = formSection.querySelector("input[name=pilotName]");
        let copilotCheck = formSection.querySelector("input[name=copilotName]");
        let fuelCheck = formSection.querySelector("input[name=fuelLevel]");
        let cargoCheck = formSection.querySelector("input[name=cargoMass]");
        let list = document.getElementById("faultyItems");
        formSubmission(document, list, pilotCheck, copilotCheck, fuelCheck, cargoCheck);
        event.preventDefault();
    });
    

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});