import Game from "./game.js";

$(document).ready(function() {

    // Display the page without blinking
    $("body").fadeIn(2000);

    let game = new Game(true, true);

    game.init();

});