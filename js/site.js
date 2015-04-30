// A $( document ).ready() block.
$(document).ready(function() {

    // Log a message to the console 
    console.log("ready!");

    $('#man').animate({right: '25%', bottom: '73px'});
    
    
    setTimeout(function(){
    $('#man2').animate({left: '-12%'});
    }, 2000);
    
   setTimeout(function(){
    $('#man2').animate({left: '120%', bottom: '600px'});
    }, 3000);

});