function randomizer(person, backstory, current){
  return (person + ' who ' + backstory + ' and is now ' + current);
}

var people = [
  'A vampire',
  'A lich',
  'A medusa',
  'A green dragon'
]

var backstories = [
  'was betrayed by a close friend',
  'was abandoned by their companions',
  'lost their lover in an attack',
  'used to be an adventerer',
  'was once a war hero',
  'was once a notorious criminal'
]

var currentStory = [
  'a serial killer',
  'trying to take over the world',
  'resurrecting an evil god',
  'trying to become a god'
]

console.log(randomizer(people[Math.floor(Math.random() * people.length)], backstories[Math.floor(Math.random() * backstories.length)], currentStory[Math.floor(Math.random() * currentStory.length)]));