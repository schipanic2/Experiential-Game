/* global $ */
$(document).ready(function(){
    showBackground("mountain", 550);
    showQuestionView("mountain", 600);
    // showBackground("canyon", 400);
    // showBackground("volcano", 500);

});

function showBackground(divID, timeoutInterval){
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

    $("#"+backgroundID).fadeTo('slow', 1 , function(){
        for (var i = 0; i < imgArray.length; i++) {
            (function(index) {
                setTimeout(function() { 
                    $("#"+imgArray[index]).addClass('animated fadeInUp');
                }, i * timeoutInterval);
            })(i);
        }
    });
}

function showQuestionView(divID, timeoutInterval){
    divID = "#"+divID;
    var $questionHeader = $(divID+">.question-view").find('h1');
    var $questionBox = $(divID+">.question-view").find('.question-box');
    var $questionOptions = $(divID+">.question-view").find('.question-option');
    $questionHeader.addClass('animated fadeInUp');
    $questionBox.addClass('animated fadeInUp');
    
    $.each($questionOptions, function (i) {
        setTimeout(function() {
            $(this).addClass('animated fadeInLeft');
        }.bind(this), i * timeoutInterval);
    });    
    
}