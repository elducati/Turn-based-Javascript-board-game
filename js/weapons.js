export let weapons = [];

class Weapon {
    constructor(name, damage, nickname) {
        this.name = name;
        this.damage = damage;
        this.nickname = nickname;
    }
}

let weapon2 = new Weapon("gun", 20, "Gun");
let weapon3 = new Weapon("katana", 10, "Katana");
let weapon4 = new Weapon("machine-gun", 40, "Machine Gun");

export let weapon1 = new Weapon("rocket-launcher", 50, "Rocket Launcher");

weapons.push(weapon2, weapon3, weapon4);