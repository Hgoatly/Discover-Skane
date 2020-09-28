//Hides Landing Page once 'enter' button is clicked
let mainContent = document.getElementById("main-content");
mainContent.style.display = "none";

function hideLandingPage() {
 let landingPage = document.getElementById("landing-page");
 landingPage.style.display = "none";
 mainContent.style.display = "block";
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
//Function for scroll to top buttons copied from 'w3Schools' website: 
//https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
//End of copied code.

function changeButtonColor() {
    document.getElementsByClassName("map-Buttons").style.backgroundColor = "#4f4646";
}

//Toggle card pictures and maps to be shown and hidden.
$(document).ready(function(){

    $("#maps-button-1").click(function(){
        $("#card-front-1").toggle();
        $("#card-back-1").toggle();
        
        })

    $("#maps-button-2").click(function(){
        $("#card-front-2").toggle();
        $("#card-back-2").toggle();

        })

    $("#maps-button-3").click(function(){
        $("#card-front-3").toggle();
        $("#card-back-3").toggle();
        })

    $("#maps-button-4").click(function(){
        $("#card-front-4").toggle();
        $("#card-back-4").toggle();
    })

     $("#maps-button-5").click(function(){
        $("#card-front-5").toggle();
        $("#card-back-5").toggle();
    })

     $("#maps-button-6").click(function(){
        $("#card-front-6").toggle();
        $("#card-back-6").toggle();
    })

     $("#maps-button-7").click(function(){
        $("#card-front-7").toggle();
        $("#card-back-7").toggle();
    })

    $("#maps-button-8").click(function(){
        $("#card-front-8").toggle();
        $("#card-back-8").toggle();
    })

    $("#maps-button-9").click(function(){
        $("#card-front-9").toggle();
        $("#card-back-9").toggle();
    })

     $(".map-buttons").click(function(){
         $(this).text($(this).text() == 'Hide Map' ? 'Show on Map' : 'Hide Map');
     })   
});