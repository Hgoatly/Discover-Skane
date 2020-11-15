//Hides Landing Page once 'enter' button is clicked

document.getElementById("main-content").style.display = "none";
document.getElementById("enter-link").addEventListener("click", function() {
document.getElementById("landing-page").style.display = "none";
document.getElementById("main-content").style.display = "block";

});

//Function for scroll to top buttons copied from 'w3Schools' website: 
//https://www.w3schools.com/howto/howto_js_scroll_to_top.asp 

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 
//End of copied code.


$(document).ready(function(){

//Toggle card pictures and maps to be shown and hidden.
    $("#maps-button-1").click(function(){
        $("#card-front-1").toggle();
        $("#card-back-1").toggle();
        });

    $("#maps-button-2").click(function(){
        $("#card-front-2").toggle();
        $("#card-back-2").toggle();
        });

    $("#maps-button-3").click(function(){
        $("#card-front-3").toggle();
        $("#card-back-3").toggle();
        });

    $("#maps-button-4").click(function(){
        $("#card-front-4").toggle();
        $("#card-back-4").toggle();
    });

     $("#maps-button-5").click(function(){
        $("#card-front-5").toggle();
        $("#card-back-5").toggle();
    });

     $("#maps-button-6").click(function(){
        $("#card-front-6").toggle();
        $("#card-back-6").toggle();
    });

     $("#maps-button-7").click(function(){
        $("#card-front-7").toggle();
        $("#card-back-7").toggle();
    });

    $("#maps-button-8").click(function(){
        $("#card-front-8").toggle();
        $("#card-back-8").toggle();
    });

    $("#maps-button-9").click(function(){
        $("#card-front-9").toggle();
        $("#card-back-9").toggle();
    });

    $("#accordion-maps-button-1").click(function(){
        $("#accordion-card-front-1").toggle();
        $("#accordion-card-back-1").toggle();
     });
    
    $("#accordion-maps-button-2").click(function(){
        $("#accordion-card-front-2").toggle();
        $("#accordion-card-back-2").toggle();
        });

     $("#accordion-maps-button-3").click(function(){
        $("#accordion-card-front-3").toggle();
        $("#accordion-card-back-3").toggle();
        });

     $("#accordion-maps-button-4").click(function(){
        $("#accordion-card-front-4").toggle();
        $("#accordion-card-back-4").toggle();
        });

     $("#accordion-maps-button-5").click(function(){
        $("#accordion-card-front-5").toggle();
        $("#accordion-card-back-5").toggle();
        });

     $("#accordion-maps-button-6").click(function(){
        $("#accordion-card-front-6").toggle();
        $("#accordion-card-back-6").toggle();
        });

    $("#accordion-maps-button-7").click(function(){
        $("#accordion-card-front-7").toggle();
        $("#accordion-card-back-7").toggle();
        });

    $("#accordion-maps-button-8").click(function(){
        $("#accordion-card-front-8").toggle();
        $("#accordion-card-back-8").toggle();
        });

    $("#accordion-maps-button-9").click(function(){
        $("#accordion-card-front-9").toggle();
        $("#accordion-card-back-9").toggle();
        });

//Toggles text on map buttons
     $(".map-buttons").click(function(){
         $(this).text($(this).text() == 'Hide Map' ? 'Show on Map' : 'Hide Map');
     });
});


