class Character {
  constructor(name) {
    this.name = name;
    this.speed = Math.floor(Math.random() * 4 + 1);
    this.power = Math.floor(Math.random() * 9 + 1);
    this.healt = 100;
  }
}

const heroeNames = ["SpiderMan", "IronMan", "Hulk", "BlackWidow", "Thor"];
const villainNames = ["Thanos","Killmonger","Loki","Magneto","DoctorOctopus"];

let heroes = new Array();
let villains = new Array();
  
heroeNames.forEach((item) => {
  const heroCharacter = new Character(item);
  heroes.push(heroCharacter);
});
villainNames.forEach((item) => {
  const villainsCharacter = new Character(item);
  villains.push(villainsCharacter);
});

let enemy1 = villains[Math.round(Math.random()*villains.length)];

console.log(villains.indexOf(enemy1)+1)


function Attack (){
  heroes.forEach(function(item){
          let time = setInterval(() => {
              let enemy1 = villains[Math.floor(Math.random()*villains.length)];
              enemy1.healt-=item.power;
              console.log(`${item.name}[${item.healt}] hits ${enemy1.name}[${enemy1.healt}] with ${item.power} power.`);
              if(enemy1.healt<=0){
                  villains.splice(villains.indexOf(enemy1)+1,1)
                  console.log(villains.length)
                  console.log(`${enemy1.name} Die`)
              }
          },(1/item.speed*5)*1000);
      })
 
  villains.forEach(function(item){
      let time2 = setInterval(() => {
          let enemy2= heroes[Math.floor(Math.random()*heroes.length)];
          enemy2.healt -= item.power;
          console.log(`${item.name}[${item.healt}] hits ${enemy2.name}[${enemy2.healt}] with ${item.power} power.`);
          if(enemy2.healt <= 0){
              heroes.splice(heroes.indexOf()+1,1)
              console.log(heroes.length)
              console.log(`${enemy2.name} Die`)
          }

      }, (1/item.speed*5)*1000);
  })
}
Attack();

/*function Attack (){
    heroes.forEach(function(item){
            let enemy1 = villains[Math.floor(Math.random()*villains.length)];
            let time = setInterval(() => {
                enemy1.healt-=item.power;
                console.log(`${item.name}[${item.healt}] hits ${enemy1.name}[${enemy1.healt}] with ${item.power} power.`);
                if(enemy1.healt<=0){
                    villains.splice(villains.indexOf(enemy1)+1,1)
                    console.log(villains.length)
                    console.log(`${enemy1.name} Die`)
                }
            },(1/item.speed*5)*1000);
        })
   
    villains.forEach(function(item){
        let enemy2= heroes[Math.floor(Math.random()*heroes.length)];
        let time2 = setInterval(() => {
            enemy2.healt -= item.power;
            console.log(`${item.name}[${item.healt}] hits ${enemy2.name}[${enemy2.healt}] with ${item.power} power.`);
            if(enemy2.healt <= 0){
                heroes.splice(heroes.indexOf()+1,1)
                console.log(heroes.length)
                console.log(`${enemy2.name} Die`)
            }

        }, (1/item.speed*5)*1000);
    })
}

Attack()

/*for (i = 0; i < 5; i++) {
  var target1 = heroes[Math.floor(Math.random() * heroes.length)];
  var target2 = villains[Math.floor(Math.random() * villains.length)];

  function attack(char1, char2) {
    //Villains Attack
    let time = setInterval(() => {
      char1.healt -= char2.power;
      console.log(
        `${char2.name}[${char2.healt}] hits ${char1.name}[${char1.healt}] with ${char2.power} power.`,
      );
      if (char1.healt <= 0) {
        clearInterval(time)
        delete heroes[heroes.indexOf(char1)]
        console.log(`${char1.name} dies.`);
      }
    }, (1 / char2.speed) * 5 * 1000);

    //Heroes Attack
   let time2 = setInterval(() => {
      char2.healt -= char1.power;
      console.log(
        `${char1.name}[${char1.healt}] hits ${char2.name}[${char2.healt}] with ${char1.power} power.`,
      );
      if (char2.healt <= 0) {
        clearInterval(time2)
        heroes.splice(heroes.indexOf(char2),1)
        console.log(heroes.length)
        console.log(`${char2.name} dies.`);
      }
    }, (1 / char1.speed) * 5 * 1000);
  }

  attack(target1, target2);

  console.log(heroes,villains)
}




/*create 2 arrays: heroes and villains.
fill those arrays with 10 characters(objects) with these properties:
  name: somehow generate a random name,
  speed: random number from 1 to 5, 1 means 5 seconds and 5 means the 1-second interval between each attack  // aysinqn 1-5000ms , 2-4000ms , 3 - 3000ms , 4 -2000ms, 5-1000ms
  health: equal to 100
  power: random number from 1 to 10,


villains and heroes will attack each other.


all characters start to attack at the same time(first can start villains). Each character hits a random enemy on his turn and the enemy's health decreases by the amount of the character's power.
When a character dies he/she are removed from the array.
Every character makes his next attack after (1/speed * 5 ) seconds.


Write a program to emulate the battle.
Each Attack should be logged.
example:
Thor[90] hits Thanos[100]  with a power of 4.6
Iron-Man dies


At the end of the battle log which team won and stayed characters' health
example:
Heroes win
[Black-Widow[10]  Spider-Man[20] Dr.Strange[5]]*/

