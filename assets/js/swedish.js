//Save language selection to local storage.
window.onload = function getSiteLang() {
      currentLanguage = localStorage.getItem("language");
      return siteLang;
};

const swedish = document.querySelectorAll(".swedish-content, .swedish-heading");
const english = document.querySelectorAll(".english-content, .english-heading");
let siteLang = "english"; 

function setSwedish() {
  currentLanguage = localStorage.getItem("language");
  localStorage.setItem("language", "swedish");
  siteLang = "swedish";
}

function setEnglish() {
currentLanguage = localStorage.getItem("language");
localStorage.setItem("language", "english");
siteLang = "english";
}


$(document).ready(function () {
  //Toggle between Swedish and English language when the relevant flag is clicked.
  $("#flag").click(function () { 
    $(".english-content").toggle();
    $(".english-heading").toggle();
    $(".swedish-content").toggle();
    $(".swedish-heading").toggle();

    //Resets the cards so that they show pictures rather than maps when the flag is clicked in case the language 
    //is changed once a map is already visible. This ensures that the 'Show/Hide Map' text aligns with the correct content.
    $("#card-front-1").show();
    $("#card-back-1").hide();
    $("#card-front-2").show();
    $("#card-back-2").hide();
    $("#card-front-3").show();
    $("#card-back-3").hide();
    $("#card-front-4").show();
    $("#card-back-4").hide();
    $("#card-front-5").show();
    $("#card-back-5").hide();
    $("#card-front-6").show();
    $("#card-back-6").hide();
    $("#card-front-7").show();
    $("#card-back-7").hide();
    $("#card-front-8").show();
    $("#card-back-8").hide();
    $("#card-front-9").show();
    $("#card-back-9").hide();
    $("#accordion-card-front-1").show();
    $("#accordion-card-back-1").hide();
    $("#accordion-card-front-2").show();
    $("#accordion-card-back-2").hide();
    $("#accordion-card-front-3").show();
    $("#accordion-card-back-3").hide();
    $("#accordion-card-front-4").show();
    $("#accordion-card-back-4").hide();
    $("#accordion-card-front-5").show();
    $("#accordion-card-back-5").hide();
    $("#accordion-card-front-6").show();
    $("#accordion-card-back-6").hide();
    $("#accordion-card-front-7").show();
    $("#accordion-card-back-7").hide();
    $("#accordion-card-front-8").show();
    $("#accordion-card-back-8").hide();
    $("#accordion-card-front-9").show();
    $("#accordion-card-back-9").hide();
   });

   //Change the placholder text on the Search Box and Contact Form to Swedish when Swedish Flag is clicked
   $("#swedish-flag").click(function(){
    $("#pac-input").attr('placeholder', 'Sök på Karta');
    $("#fullname").attr('placeholder', 'Namn');
    $("#suggestions").attr('placeholder', 'Dina rekommendationer');
   });


   //Change the placholder text on the Search Box and Contact Form to English when British Flag is clicked
   $("#british-flag").click(function(){
    $("#pac-input").attr('placeholder', 'Search the Map');
    $("#fullname").attr('placeholder', 'Name');
    $("#suggestions").attr('placeholder', 'Your recommendations');
    });

  //Toggle card pictures and maps to be shown and hidden when 'Show on Map/Hide Map' is clicked.
  $("#maps-button-1-swedish").click(function () {
    $("#card-front-1").toggle();
    $("#card-back-1").toggle();
  });

  $("#maps-button-2-swedish").click(function () {
    $("#card-front-2").toggle();
    $("#card-back-2").toggle();
  });

  $("#maps-button-3-swedish").click(function () {
    $("#card-front-3").toggle();
    $("#card-back-3").toggle();
  });

  $("#maps-button-4-swedish").click(function () {
    $("#card-front-4").toggle();
    $("#card-back-4").toggle();
  });

  $("#maps-button-5-swedish").click(function () {
    $("#card-front-5").toggle();
    $("#card-back-5").toggle();
  });

  $("#maps-button-6-swedish").click(function () {
    $("#card-front-6").toggle();
    $("#card-back-6").toggle();
  });

  $("#maps-button-7-swedish").click(function () {
    $("#card-front-7").toggle();
    $("#card-back-7").toggle();
  });

  $("#maps-button-8-swedish").click(function () {
    $("#card-front-8").toggle();
    $("#card-back-8").toggle();
  });

  $("#maps-button-9-swedish").click(function () {
    $("#card-front-9").toggle();
    $("#card-back-9").toggle();
  });

  $("#accordion-maps-button-1-swedish").click(function () {
    $("#accordion-card-front-1").toggle();
    $("#accordion-card-back-1").toggle();
  });

  $("#accordion-maps-button-2-swedish").click(function () {
    $("#accordion-card-front-2").toggle();
    $("#accordion-card-back-2").toggle();
  });

  $("#accordion-maps-button-3-swedish").click(function () {
    $("#accordion-card-front-3").toggle();
    $("#accordion-card-back-3").toggle();
  });

  $("#accordion-maps-button-4-swedish").click(function () {
    $("#accordion-card-front-4").toggle();
    $("#accordion-card-back-4").toggle();
  });

  $("#accordion-maps-button-5-swedish").click(function () {
    $("#accordion-card-front-5").toggle();
    $("#accordion-card-back-5").toggle();
  });

  $("#accordion-maps-button-6-swedish").click(function () {
    $("#accordion-card-front-6").toggle();
    $("#accordion-card-back-6").toggle();
  });

  $("#accordion-maps-button-7-swedish").click(function () {
    $("#accordion-card-front-7").toggle();
    $("#accordion-card-back-7").toggle();
  });

  $("#accordion-maps-button-8-swedish").click(function () {
    $("#accordion-card-front-8").toggle();
    $("#accordion-card-back-8").toggle();
  });

  $("#accordion-maps-button-9-swedish").click(function () {
    $("#accordion-card-front-9").toggle();
    $("#accordion-card-back-9").toggle();
  });

  //Toggle text on map buttons
  $(".map-buttons-swedish").click(function () {
    $(this).text($(this).text() == "Dölj Karta" ? "Se på karta" : "Dölj Karta");
  }); 
  
});

