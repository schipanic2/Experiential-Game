/* global $ */
$(document).ready(function(){
    
    // showBackground("mountain");
    // showBackground("canyon");
    showBackground("volcano");



});



function showBackground(divID){
    divID = "#"+divID;
    var background = "";
    var imgs = [];
        $(divID).each(function(){
            $(this).children('img').each(function(i){
                if(i === 0){
                    background = $(this).attr('id');
                }else{
                    imgs.push($(this).attr('id'));
                }
            });
        });

    $("#"+background).fadeTo('slow',1 , function(){
        for (var i = 0; i < imgs.length; i++) {
            (function(index) {
                setTimeout(function() { 
                    $("#"+imgs[index]).addClass('animated fadeInUp');
                }, i * 550);
            })(i);
        }
        
    });    
}