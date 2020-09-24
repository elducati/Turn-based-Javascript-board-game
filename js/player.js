import { weapon1 } from "./weapons.js";

class Player {
    constructor(name, nickname) {
        this.name = name;
        this.nickname = nickname;
        this.weapon = weapon1;
        this.life = 100;
        this.currentCell = null;
        this.defense = false;
    }

    // Method to move player and to change the previous cell property

    move(newCell) {
        this.currentCell.player = null;

        newCell.player = this;
        this.currentCell = newCell;

        $(".col").removeClass("accessible");
        $(`.${this.name}`).removeClass(this.name);
        $(newCell.element).addClass(this.name);
    }

    // Method to exchange the player weapon into the cell weapon

    changeWeapon(player) {
        this.player = player;
        let playerWeapon = this.player.weapon;

        if (this.currentCell.weapon !== null) {
            this.currentCell.element.removeClass(this.currentCell.weapon.name);
            this.currentCell.element.addClass(playerWeapon.name);
            this.player.weapon = this.currentCell.weapon;
            this.currentCell.weapon = playerWeapon;
        }
    }

    // Method to check if there is a player in cellsAround

    isPlayerAround(cellsAround) {
        for (let cell of cellsAround) {
            if (cell.player !== null) {
                return true;
            }
        }
        return false;
    }

    // Method to change the appearance of the player who is a target in the fight

    heroTarget(target) {
        this.target = target;

        $(`.${this.target.name}`).css("opacity", "0.5");
        $(`.${this.target.name}-attack-button, .${this.target.name}-defense-button`).off("click").css({visibility: "hidden"});
    }

    /*
    * Method to give the choice of to attack or defend.
    * No player can escape, so the function remembers itself by reversing attacker
    * and target and those until the life of one of the players is less than or equal to 0
    */

    heroDefense() {
        this.defense = false;

        $(`.${this.name}-defense-button`).css("visibility", "visible").on("click", () => {
            this.defense = true;
            this.target.fight(this);
        });
    }

    // Game over Modal

    endGameModal() {

        $("main").css({opacity: "0.15"}).addClass("fade");
        $(".modal-body").prepend(`<div class='${this.name}-bg'><div class='${this.name}-avatar'></div></div>`);

        $("#gameOverMessage").addClass("victory").text(`Le guerrier ${this.nickname} a gangé le Combat !`);
        $("#endGameModal").show();
    }

    gongSound() {
        // sound of finish
        let audioGong = new Audio("audio/MetalGong-SoundBible.com-1270479122.mp3");
        audioGong.play();
    }

    // Method to finish the game if one player has not life points - this.target.life <= 0
    // This method calls the modal with game over message - this.endGameModal();

    gameOver() {
        let playerPercentageLife = "." + this.target.name + "-percentage-life";

        if (this.target.life <= 0) {
            $(playerPercentageLife).text(`${this.target.nickname} a perdu le combat`).css({color: "red", fontWeight: "600"});

            $(`.${this.target.name}`).css("visibility", "hidden");
            $(".button-action").hide();

            this.gongSound();
            this.endGameModal();
        } else {
            $(playerPercentageLife).text(`${this.target.life}%`);
        }
    }

    // Method to calculate life points

    scoreLife() {

        // defense counts 50% damage less: this.weapon.damage / 2
        let lifeRemaining = (this.target.life -= this.target.defense ? this.weapon.damage / 2 : this.weapon.damage);

        // display barre-life and percentage-life
        $(`.${this.target.name}-barre-life`).css("width", `${lifeRemaining}%`);

        this.gameOver();
        this.target.fight(this);
    }

    fight(target) {
        this.defense = false;

        this.heroTarget(target);

        $(`.${this.name}`).css("opacity", "1");

        // attack-button : counts fight damages on click
        $(`.${this.name}-attack-button`).css({visibility: "visible"}).on("click", (e) => {
            this.scoreLife(target);
        });

        this.heroDefense(target);
        this.restart();
    }

    restart() { //replay the battle
        $(".restart, .close").on("click", () => {
            location.reload();
        });
    }

}

export let player1 = new Player("autobot", "Autobot");
export let player2 = new Player("deceptacon", "Deceptacon");

