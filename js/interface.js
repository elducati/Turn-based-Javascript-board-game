// Display game rules with toggle button
$( document ).ready(function() {

    $("#game-rules").css( "display", "none" );

    $("#rules").on("click", function(){
        $("#game-rules").slideToggle(1000);
    });
});

/* Music volume buttons
<button id="volumeMute" class="btn-song float-right mt-2" onclick="mute()"><i class="fas fa-volume-mute"></i></button>
<button id="volumeUp" class="btn-song float-right mt-2 mr-2" onclick="play()"><i class="fas fa-volume-up"></i></button>
*/

const musicFond = document.getElementById("musicFond");

function play() {
    musicFond.play();
}

function mute() {
    musicFond.pause();
}