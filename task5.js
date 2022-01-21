(() => {
  class Character {
    constructor(name) {
      this.name = name;
      this.speed = Math.floor(Math.random() * 4 + 1);
      this.power = Math.floor(Math.random() * 9 + 1);
      this.healt = 100;
    }
  }
  

  const heroeNames = ["SpiderMan", "IronMan", "Hulk", "BlackWidow", "Thor"];
  const villainNames = ["Thanos", "Killmonger", "Loki", "Magneto", "DoctorOctopus"];

  let heroes = heroeNames.map((heroe) => new Character(heroe));
  let villains = villainNames.map((villain) => new Character(villain));

  function printAttack(attacker, defender) {
    console.log(`${attacker.name}[${attacker.healt}] hits ${defender.name}[${defender.healt}] with ${attacker.power} power.`);
  }

  function printPersonDie(person) {
    console.log(`${person.name} Die`);
  }

  function attack(attackerList, defenderList) {
    const intervalIds = [];

    attackerList.forEach((attacker) => {
      const attackInterval = setInterval(() => {
        const attackerInList = attackerList.find(
          (a) => a.name === attacker.name
        );

        if (!attackerInList || attackerInList.healt <= 0) {
          clearInterval(attackInterval);

          return;
        }

        if (!defenderList.length) {
          intervalIds.forEach((id) => clearInterval(id));
          console.log(`Win`, attackerList.filter(attacker => attacker.healt > 0));
          return;
        }

        const randomDefenderIndex = Math.round(Math.random() * (defenderList.length - 1));

        const randomDefender = defenderList[randomDefenderIndex];

        randomDefender.healt -= attacker.power;

        printAttack(attacker, randomDefender);

        if (randomDefender.healt <= 0) {
          defenderList = defenderList.filter(
            (defender) => defender.name !== randomDefender.name
          );
          printPersonDie(randomDefender);
        }
      }, (1 / attacker.speed * 5)*1000);

      intervalIds.push(attackInterval);
    });
  }

  attack(villains, heroes);
  attack(heroes, villains);
})();