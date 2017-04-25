/* global $ */
$(document).ready(function(){
    
    showBackground("mountain");
    // showBackground("canyon");
    // showBackground("volcano");

});

function showBackground(divID){
    divID = "#"+divID;
    var backgroundID = "";
    var imgArray = [];
    
    $(divID+">img").each(function(i){
        if(i === 0){
            backgroundID = $(this).attr('id');
        }else{
            imgArray.push($(this).attr('id'));
        }
    });

    $("#"+backgroundID).fadeTo('slow',1 , function(){
        for (var i = 0; i < imgArray.length; i++) {
            (function(index) {
                setTimeout(function() { 
                    $("#"+imgArray[index]).addClass('animated fadeInUp');
                }, i * 550);
            })(i);
        }
        
    });    
}