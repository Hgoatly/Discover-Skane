let y = document.getElementById("main-content");
y.style.display = "none";

function hideLandingPage() {
 let x = document.getElementById("landing-page");
 x.style.display = "none";
 y.style.display = "block";
}

let lakeMap = document.getElementById("lake-map")
let lakes = document.getElementById("lakes");
lakeMap.style.display = "none";

function showMap() {

    let mapButtons = document.getElementsByClassName("map-buttons");
    let hideMapButtons = document.getElementsByClassName("hide-map-buttons");


if (lakeMap.style.display === "none") {
    lakeMap.style.display = "block";
    lakes.style.display = "none";
/*    mapButtons.style.display = "none";
    hideMapButtons.style.display = "block"; */
    mapButtons[0].innerHTML = "Hide Map"; 
} else {
    lakeMap.style.display = "none";
    lakes.style.display = "block";
 /*   mapButtons.style.display = "block";
    hideMapButtons.style.display = "none"; */
    mapButtons[0].innerHTML = "Show on Map";
}
}
/*
let mapButtons = document.getElementsByClassName("map-buttons");
let hideMapButtons = document.getElementsByClassName("hide-map-buttons");

function hideMapButtons() {
    if (mapButtons.style.display === "none") {
        hideMapButtons.style.display = "block";
    } else {
        hideMapButtons.style.display = "none";
    }
}
*/
