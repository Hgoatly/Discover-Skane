/*if (window.localStorage != "null") {
    var swedishLang = document.getElementsByClassName("swedish-content");
    var englishLang = document.getElementsByClassName("english-content");
    swedishLang = localStorage.getItem("language");
    englishLang = localStorage.getItem("language");

    flag.addEventListener("click", function() {
        localStorage.setItem("language", "swedishLang");
        localStorage.setItem("language", "englishLang");
    }, false);
} 
/*
let englishLang = document.getElementsByClassName("english-content");
let swedishLang = document.getElementsByClassName("swedish-content");
let swedishFlag = document.getElementById("swedish-flag");
let britishFlag = document.getElementById("british-flag");
// Check browser support
if (typeof(Storage) !== "undefined") {
  // Store
  swedishFlag.addEventListener("click", function() {
      localStorage.setItem("language", "swedishLang");
  })
 swedishFlag.addEventListener("click", function() {
  localStorage.setItem("language", "englishLang");
 })
  // Retrieve
  document.getElementsByClassName("english-content").innerHTML = localStorage.getItem("language");
  document.getElementsByClassName("swedish-content").innerHTML = localStorage.getItem("language");
  

} else {
  document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}
*/
const swedish = document.querySelectorAll(".swedish-content");
const english = document.querySelectorAll(".english-content"); 

 function setSwedish() {
             currentLanguage = localStorage.getItem("language") 
            localStorage.setItem("language", "swedish");
        }

        function setEnglish() {
           
             currentLanguage = sessionStorage.getItem("language");
            localStorage.setItem("language", "english");
            
        } 
  
$(document).ready(function(){

//Toggle between Swedish and English language when the relevant flag is clicked.
    $("#flag").click(function(){
        $(".english-content").toggle();
        $(".english-heading").toggle();
        $(".swedish-content").toggle();
        $(".swedish-heading").toggle();   
})
    //Toggle card pictures and maps to be shown and hidden.
    $("#maps-button-1-swedish").click(function(){
        $("#card-front-1").toggle();
        $("#card-back-1").toggle(); 
        })

    $("#maps-button-2-swedish").click(function(){
        $("#card-front-2").toggle();
        $("#card-back-2").toggle();
        })

    $("#maps-button-3-swedish").click(function(){
        $("#card-front-3").toggle();
        $("#card-back-3").toggle();
        })

    $("#maps-button-4-swedish").click(function(){
        $("#card-front-4").toggle();
        $("#card-back-4").toggle();
    })

     $("#maps-button-5-swedish").click(function(){
        $("#card-front-5").toggle();
        $("#card-back-5").toggle();
    })

     $("#maps-button-6-swedish").click(function(){
        $("#card-front-6").toggle();
        $("#card-back-6").toggle();
    })

     $("#maps-button-7-swedish").click(function(){
        $("#card-front-7").toggle();
        $("#card-back-7").toggle();
    })

    $("#maps-button-8-swedish").click(function(){
        $("#card-front-8").toggle();
        $("#card-back-8").toggle();
    })

    $("#maps-button-9-swedish").click(function(){
        $("#card-front-9").toggle();
        $("#card-back-9").toggle();
    })

    $("#accordion-maps-button-1-swedish").click(function(){
        $("#accordion-card-front-1").toggle();
        $("#accordion-card-back-1").toggle();
        })
    
    $("#accordion-maps-button-2-swedish").click(function(){
        $("#accordion-card-front-2").toggle();
        $("#accordion-card-back-2").toggle();
        })

     $("#accordion-maps-button-3-swedish").click(function(){
        $("#accordion-card-front-3").toggle();
        $("#accordion-card-back-3").toggle();
        })

     $("#accordion-maps-button-4-swedish").click(function(){
        $("#accordion-card-front-4").toggle();
        $("#accordion-card-back-4").toggle();
        })

     $("#accordion-maps-button-5-swedish").click(function(){
        $("#accordion-card-front-5").toggle();
        $("#accordion-card-back-5").toggle();
        })

     $("#accordion-maps-button-6-swedish").click(function(){
        $("#accordion-card-front-6").toggle();
        $("#accordion-card-back-6").toggle();
        })

    $("#accordion-maps-button-7-swedish").click(function(){
        $("#accordion-card-front-7").toggle();
        $("#accordion-card-back-7").toggle();
        })

    $("#accordion-maps-button-8-swedish").click(function(){
        $("#accordion-card-front-8").toggle();
        $("#accordion-card-back-8").toggle();
        })

    $("#accordion-maps-button-9-swedish").click(function(){
        $("#accordion-card-front-9").toggle();
        $("#accordion-card-back-9").toggle();
        })

      //Toggles text on map buttons
     $(".map-buttons-swedish").click(function(){
         $(this).text($(this).text() == 'Dölj Karta' ? 'Se på karta' : 'Dölj Karta');
     })  

})

