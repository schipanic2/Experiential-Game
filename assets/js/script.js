/* global $ */
$(document).ready(function(){
    showBackground("mountain", 550);
    showQuestionView("mountain");

    $(document).on('click', '#mountain .question-option', function(){
        $('#mountain').fadeOut('slow');
        $('#canyon').fadeIn('fast');
        showBackground("canyon", 300);
        showQuestionView("canyon");
    });

    $(document).on('click', '#canyon .question-option', function(){
        $('#canyon').fadeOut('slow');
        $('#volcano').fadeIn('fast');
        showBackground("volcano", 300);
        showQuestionView("volcano");
    });

    $(document).on('click', '#volcano .question-option', function(){
        $('#volcano').fadeOut('slow');
        $('#ending').fadeIn('fast');
    });

});

function showBackground(divID, interval){
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
                }, i * interval);
            })(i);
        }
    });
}

function showQuestionView(divID){
    divID = "#"+divID;
    var $questionHeader = $(divID+">.question-view").find('h1');
    var $questionBox = $(divID+">.question-view").find('.question-box');
    var $questionOptions = $(divID+">.question-view").find('.question-option');    
    
    setTimeout(function(){
        setTimeout(function(){
            $questionHeader.addClass('animated fadeInUp');            
        }, 300);
        setTimeout(function(){
            $questionBox.addClass('animated fadeInUp');
        }, 1200);         
        setTimeout(function(){
            $.each($questionOptions, function (i) {
                $(this).removeClass('remove').hide();
                setTimeout(function() {
                    $(this).show().addClass('animated fadeInLeft');
                }.bind(this), i * 400);
            });            
        }, 1800);    
    }, 4200);
}