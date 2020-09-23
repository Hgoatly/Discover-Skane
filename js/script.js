let y = document.getElementById("main-content");
y.style.display = "none";

function hideLandingPage() {
 let x = document.getElementById("landing-page");
 x.style.display = "none";
 y.style.display = "block";
}
/*
let lakeMap = document.getElementById("lake-map")
let lakes = document.getElementById("lakes");
lakeMap.style.display = "none";

function showMap() {

    let mapButtons = document.getElementsByClassName("map-buttons");
 /*   let hideMapButtons = document.getElementsByClassName("hide-map-buttons"); */

/*
if (lakeMap.style.display === "none") {
    lakeMap.style.display = "block";
    lakes.style.display = "none";
/*    mapButtons.style.display = "none";
    hideMapButtons.style.display = "block"; 
    mapButtons[0].innerHTML = "Hide Map"; */
/*
} else {
    lakeMap.style.display = "none";
    lakes.style.display = "block";
 /*   mapButtons.style.display = "block";
    hideMapButtons.style.display = "none"; */
  /*  mapButtons[0].innerHTML = "View on Map";
}
}

let nationalParksMap = document.getElementById("national-parks-map");
let nationalParks = document.getElementById("national-parks");
nationalParksMap.style.display = "none";

function showNationalParksMap() {

    if (nationalParksMap.style.display === "none") {
        nationalParksMap.style.display = "block";
        nationalParks.style.display = "none";
        mapButtons[0].innerHTML = "Hide Map"
    } else {
        nationalParksMap.style.display = "none";
        nationalParks.style.display = "block";
        mapButtons[0].innerHTML = "View on Map";
    }
}

let forestsMap = document.getElementById("forests-map");
let forests = document.getElementById("forests");
forestsMap.style.display = "none";

function showForestsMap() {

    if (forestsMap.style.display === "none") {
        forestsMap.style.display = "block";
        forests.style.display = "none";
        mapButtons[0].innerHTML = "Hide Map"
    } else {
        forestsMap.style.display = "none";
        forests.style.display = "block";
        mapButtons[0].innerHTML = "View on Map";
    }
}

*/
/*
const cards = document.querySelectorAll(".cards-single");

function flipCard() {
  this.classList.toggle("flip");
}
cards.forEach((card) => card.addEventListener("click", flipCard)); 
*/
/*
const cardFront = document.querySelectorAll(".card-front")

function showMap() {
  this.classList.toggle("hide");
}
*/

$(document).ready(function(){
    $("#maps-button-1").click(function(){
        $(".card-front").toggle();
        $(".card-back").toggle();
       
    })

    $(".map-buttons").click(function(){
        $(".map-buttons").text("Hide Map");
        
    })
});