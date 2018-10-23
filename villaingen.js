function randomizer(){
  var attribute = attributes[Math.floor(Math.random() * attributes.length)];
  var person = people[Math.floor(Math.random() * people.length)];
  var backstory = backstories[Math.floor(Math.random() * backstories.length)];
  var current = currentStory[Math.floor(Math.random() * currentStory.length)];
  var goal = goals[Math.floor(Math.random() * goals.length)];
  return (attribute + ' ' + person + ' who ' + backstory + ' and is now ' + current + ' in order to ' + goal);
}

var attributes = [
  'A sexy',
  'A cold-hearted',
  'A mysterious',
  'A sympathetic',
  'An unassuming',
  'A hot-headed',
  'A sadistic',
  'A beautiful',
  'A rude',
  'A fanatical',
  'A brainwashed'
]

var people = [
  'vampire',
  'lich',
  'medusa',
  'green dragon',
  'red dragon',
  'sky giant',
  'king',
  'sorcerer',
  'paladin',
  'warlock',
  'crime lord',
  'cult leader',
  'kobold'
]

var backstories = [
  'was betrayed by a close friend',
  'was abandoned by their companions',
  'lost their lover in a bandit attack',
  'used to be an adventerer',
  'was once a war hero',
  'was once a notorious criminal',
  'was almost killed by a hero',
  'once betrayed a close friend',
  'escaped a monster attack',
  'was abanded by their god'
]

var currentStory = [
  'a serial killer',
  'trying to take over the world',
  'resurrecting an evil god',
  'trying to become a god',
  'running a cult',
  'running a crime organization',
  'corrupting the innocent',
  'spying on their enemies'
]

var goals = [
  'get rich',
  'get revenge',
  'save the world',
  'save their lover',
  'save their child',
  'save themself',
  'stop someone worse',
  'become powerful',
  'defeat a rival',
  'enact their final plan',
  'resurrect their lover',
  'resurrect their family',
  'kill their enemies'
]


console.log(randomizer());