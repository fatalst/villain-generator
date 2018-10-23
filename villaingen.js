var jsonData = require('./words.json');

function randomCharacteristic(){
  var word = jsonData.characteristic[Math.floor(Math.random() * jsonData.characteristic.length)];
  var firstLetter = word.split("")[0].toLowerCase();
  if (firstLetter == "a" | firstLetter == "e" | firstLetter == "i" | firstLetter == "o" | firstLetter == "u"){
    return 'An ' + word;
  } else{
    return 'A ' + word;
  }
}

function randomPerson(){
  return jsonData.people[Math.floor(Math.random() * jsonData.people.length)];
}

function randomBackstory(){
  return jsonData.backstories[Math.floor(Math.random() * jsonData.backstories.length)];
}

function randomCurrent(){
  return jsonData.currentStories[Math.floor(Math.random() * jsonData.currentStories.length)];
}

function randomGoal(){
  return jsonData.goals[Math.floor(Math.random() * jsonData.goals.length)];
}

function randomizer(){
  return (randomCharacteristic() + ' ' + randomPerson() + ' who ' + randomBackstory() + ' and is now ' + randomCurrent() + ' in order to ' + randomGoal() + '.');
}

console.log("\n\n\n\n\n\n\n\n" + "YOUR VILLAIN IS:\n" + randomizer() + "\n\n\n\n\n\n\n\n");

// console.log(randomizer());
// console.log(randomizer());
// console.log(randomizer());
// console.log(randomizer());
// console.log(randomizer());
// console.log(randomizer());