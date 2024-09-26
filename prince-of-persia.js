class Character {
  #name;
  #health;

  constructor(name, health) {
    this.#name = name;
    this.#health = health;
  }

  getName() {
    return this.#name;
  }

  attack() {
    console.log(`${this.#name} атакует!`);
  }
}

class Prince extends Character {
  attack() {
    console.log(`${this.getName()} наносит удар мечом!`);
  }
}

class Enemy extends Character {
  attack() {
    console.log(`${this.getName()} атакует с помощью заклинания!`);
  }
}

function executeAttack(character) {
  character.attack();
}

const prince = new Prince("Принц", 100);
const enemy = new Enemy("Враг", 80);

executeAttack(prince);
executeAttack(enemy);
