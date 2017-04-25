/* global $ */
$(document).ready(function(){
    var mountains = ["#ridge1",
                     "#ridge2",
                     "#ridge3",
                     "#ridge4",
                     "#sun"]; 

    var canyons = ["#coll1",
                  "#coll2",
                  "#coll3",
                  "#coll4",
                  "#coll5",
                  "#colr1",
                  "#colr2",
                  "#colr3",
                  "#colr4",
                  "#road"];
    
    var volcanos = ["#step1",
                    "#step2",
                    "#step3",
                    "#step4",
                    "#step5",
                    "#surf",
                    "#mtn1",
                    "#mtn2",
                    "#volcanoImg",
                    "#lava"
                   ];


    showBackground(mountains, "#mtn-background");
    // showBackground(canyons, "#cyn-background");
    // showBackground(volcanos, "#volcano-background");



});



function showBackground(array, backgroundID){
    console.log(array, backgroundID);
    $(backgroundID).fadeTo('slow',1 , function(){
        for (var i = 0; i < array.length; i++) {
            (function(index) {
                setTimeout(function() { 
                    console.log(array[index]); 
                    $(array[index]).addClass('animated fadeInUp');
                }, i * 550);
            })(i);
        }
    });    
}