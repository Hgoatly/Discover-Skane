if (window.localStorage) {
    var swedishLang = document.getElementById("swedish")
}

$(document).ready(function(){

//Toggle between Swedish and English language when the relevant flag is clicked.
    $("#swedish").click(function(){
        $("#swedish-flag").toggle();
        $("#uk-flag").toggle();
        $(".english-content").toggle();
        $(".swedish-content").toggle();
        $(".english-heading").toggle();
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