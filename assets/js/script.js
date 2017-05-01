/* global $ */
$(document).ready(function(){
    $("body").removeClass("hide").hide().fadeIn('slow');
    
    playAudio("//gamesounds.xyz/Public%20Domain/Cinematic/Forest%20Night.mp3");
    showBackground("mountain", 550);
    showQuestionView("mountain");

    $(document).on('click', '#mountain .question-option', function(){
        $('#mountain').fadeOut('slow');
        $('#canyon').fadeIn('fast');
        pauseAudio();
        playAudio("//gamesounds.xyz/Public%20Domain/Cinematic/Space%20Explorers.mp3");
        showBackground("canyon", 300);
        showQuestionView("canyon");
    });

    $(document).on('click', '#canyon .question-option', function(){
        $('#canyon').fadeOut('slow');
        $('#volcano').fadeIn('fast');
        pauseAudio();
        playAudio("//gamesounds.xyz/Public%20Domain/Cinematic/Stratosphere.mp3");         
        showBackground("volcano", 300);
        showQuestionView("volcano");
    });

    $(document).on('click', '#volcano .question-option', function(){
        $('#volcano').fadeOut('slow');
        $('#snow').fadeIn('fast');
        pauseAudio();
        playAudio("//gamesounds.xyz/Public%20Domain/Cinematic/Epilogue.mp3");
        showBackground("snow", 300);
        showQuestionView("snow");
        $('#tryagainBtn').fadeIn('fast');
    });

    $(document).on('click', '#tryagainBtn', function(){
        location.reload();
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
            $questionBox.removeClass('remove');
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

var audioElement = document.createElement('audio');

function playAudio(audioSrc)
{
    audioElement.setAttribute('src', audioSrc);
	audioElement.load;
	audioElement.play();
}

function pauseAudio()
{
	audioElement.pause();
}

/* function similar to sleep() in Java
http://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
  console.log('Taking a break...');
  await sleep(2000);
  console.log('Two second later');
}

demo();
*/