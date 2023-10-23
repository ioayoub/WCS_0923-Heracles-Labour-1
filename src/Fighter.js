const MAX_LIFE = 100;

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

class Fighter {
  constructor(name, strength, dexterity) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
  }
  fight(defender) {
    const damage = getRandomInt(this.strength);
    const damageMitigated = Math.max(0, damage - defender.dexterity);

    defender.life = Math.max(0, defender.life - damageMitigated);

    console.log(
      `${this.name} ⚔️ ${defender.name} 💙 ${defender.name} : ${defender.life}`
    );
  }
  isAlive(defender) {
    if (defender.life === 0) {
      console.log(`💀 ${defender.name} is dead`);
      console.log(`🏆 ${this.name} wins (💙${this.life})`);
    }
  }
}

module.exports = Fighter;
