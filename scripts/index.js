class Creature {
    static number = 0;
    #id;
    name;
    healthPoints;
  
    constructor(name, healthPoints) {
      this.#id = Creature.number++;
      this.name = name;
      this.healthPoints = healthPoints;
    }
  
    get id() {
      return this.#id;
    }
  
    defeat() {
      console.log(`\n${this.name} был уничтожен.`);
    }
    print(){
        console.log(`id: ${this.#id + 1}\nИмя: ${this.name}\nОчки здоровья: ${this.healthPoints}`);
    }
}

class Player extends Creature {
    #lvl;
  
    constructor(name, healthPoints, lvl) {
      super(name, healthPoints);
      this.#lvl = lvl;
    }
  
    get lvl() {
      return this.#lvl;
    }
  
    attack(other, damage) {
      other.healthPoints -= damage;
  
      if (other.healthPoints <= 0) {
        other.defeat();
        this.#lvl++;
        return true;
      }
  
      return false;
    }

    print() {
        super.print();
        console.log(`Уровень: ${this.#lvl}`);
      }
}

class Enemy extends Creature {
    attack(other, damage) {
      other.healthPoints -= damage;
  
      if (other.healthPoints <= 0) {
        other.defeat();
        return true;
      }
  
      return false;
    }
}

function randomIntFromInterval() { 
    return Math.floor(Math.random() * (15 - 5 + 1) + 5)
}

const player = new Player('Player', 100, 1);
player.print();
console.log('');

const enemy = new Enemy('Enemy', 100);
enemy.print();
console.log('');

let kickRambo; 
let kickTeasle;

alert(`Вы играете за: ${player.name}.`);

while (true) {

    alert(`Нажмите "Ok"или "Enter" для нанесения атаки.`);
    console.log(`${player.name} атакует. Сила атаки: ${kickRambo = randomIntFromInterval()}`);
    if (player.attack(enemy, kickRambo)) {
      console.log(`Победил: ${player.name}!\nОставшиеся очки здоровья: ${player.healthPoints}`);
      break;
    }
  
    console.log(`${enemy.name} атакует. Сила атаки: ${kickTeasle = randomIntFromInterval()}`);
    if (enemy.attack(player, kickTeasle)) {
      console.log(`Победил: ${enemy.name}!\nОставшиеся очки здоровья: ${enemy.healthPoints}`);
      break;
    }
}

console.log('');
console.log(`${player.name} текущий yровень: ${player.lvl}`);