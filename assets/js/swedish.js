$(document).ready(function(){

//Toggle between Swedish and English language when the relevant flag is clicked.
    $("#swedish").click(function(){
        $("#swedish-flag").toggle();
        $("#uk-flag").toggle();
        $(".english-content").toggle();
        $(".swedish-content").toggle();    
        })

})