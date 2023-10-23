const Fighter = require("./src/Fighter");

const heracles = new Fighter("🧔 Heracles", 20, 6);
const nemean = new Fighter("🦁 Nemean Lion", 11, 13);

let round = 0;

while (heracles.life > 0 && nemean.life > 0) {
  console.log(`🕦 Round #${round++}`);

  if (heracles.life > 0) {
    heracles.fight(nemean);
  }

  if (nemean.life > 0) {
    nemean.fight(heracles);
  }

  heracles.isAlive(nemean);
  nemean.isAlive(heracles);
}
