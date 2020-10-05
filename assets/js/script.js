//Hides Landing Page once 'enter' button is clicked
let mainContent = document.getElementById("main-content");
mainContent.style.display = "none";

function hideLandingPage() {
 let landingPage = document.getElementById("landing-page");
 landingPage.style.display = "none";
 mainContent.style.display = "block";
}

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

    $("#accordian-maps-button-1").click(function(){
        $("#accordian-card-front-1").toggle();
        $("#accordian-card-back-1").toggle();
        
        })
    
    $("#accordian-maps-button-2").click(function(){
        $("#accordian-card-front-2").toggle();
        $("#accordian-card-back-2").toggle();
        
        })

//Toggles text on map buttons
     $(".map-buttons").click(function(){
         $(this).text($(this).text() == 'Hide Map' ? 'Show on Map' : 'Hide Map');
     })
}),

function sendMail(contactForm) {
    emailjs.send("outlook", "find_my_coffee", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "cafe_signup": contactForm.cafeinfo.value
    })
    .then(
        function(response) {
            console.log("SUCCESS!", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
        return false;
         }

