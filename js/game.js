import BoardGame from "./board.js";
import { player1, player2 } from "./players.js";
import { weapons } from "./weapons.js";

export default class Game {
    constructor(turnToPlay, gameBoard) {
        this.turnToPlay = turnToPlay;
        this.gameBoard = gameBoard;
    }

    // Method to initialize the game by creating the game grid, to place players, to display accessible cells

    init() {
        let height = 10;
        let width = 10;
        let players = [player1, player2];

        players.forEach((player) => this.playersDescription(player));

        this.board = new BoardGame(player1, player2, weapons);
        this.board.createGrid(width, height);

        this.board.getAccessibleCells(player1.currentCell, 3);
        this.gamePlay();
    }

    // Method to manage the game turns and launch other methods relating to the good functioning of the game

    gamePlay() {
        this.gameBoard = this;
        let self = this.gameBoard;

        //The .on() method attaches event handlers to the currently selected set of elements in the jQuery object.
        $("#board").on("click", ".accessible", function() {

            let cellsAround = self.board.getAdjacentCells(self.board.cells[$(this).data("x")][$(this).data("y")]);

            let boardCell = self.board.cells[$(this).data("x")][$(this).data("y")];
            let currentPlayer = self.turnToPlay ? player1 : player2;
            let nextPlayer = self.turnToPlay ? player2 : player1;

            self.playerActions(currentPlayer, boardCell, cellsAround);
            self.playersDescription(currentPlayer);
            self.board.getAccessibleCells(nextPlayer.currentCell, 3);
        });
    }

    // Method to manage the different players actions: to move, to change weapons, to prepare the fight

    playerActions(player, boardCell, cellsAround) {

        player.move(boardCell);
        player.changeWeapon(player);

        if (player.isPlayerAround(cellsAround)) {
            this.prepareClash();

            // using ternary operator : condition ? expression_1 : expression_2
            player.fight(this.turnToPlay ? player2 : player1);

        } else {
            this.turnToPlay = !this.turnToPlay;
        }
    }

    // Method to change the appearance of the board before the fight

    prepareClash() {

        $("#board div").not(".hero2, .hero1").css("opacity", "0.5");
        $("[class^='cell']").not(".hero2, .hero1", "obstacle").addClass("battle");
        $("#board").off("click");
        $(".cell").addClass("accessible");
        $(".fight-btn").css("display", "block");

        this.gongSound();
    }

    gongSound() {
        // sound of gong
        let audioEnd = new Audio("audio/MetalGong-SoundBible.com-1270479122.mp3");
        audioEnd.play();
    }

    // Method to display players stats

    playersDescription(player) {

        let playerName = "#" + player.name + "-name";
        let playerWeaponImage = "#" + player.name + "-weapon-image";
        let playerWeaponName = "#" + player.name + "-weapon-name";
        let playerWeaponInfos = "#" + player.name + "-weapon-infos";

        $(playerName).empty().append(`${player.nickname}`);
        $(playerWeaponImage).empty().append(`<div class="standard-size-img ${player.weapon.name}"></div>`);
        $(playerWeaponName).empty().append(`${player.weapon.nickname}`);
        $(playerWeaponInfos).empty().append(`${player.weapon.damage}`);
    }
}
