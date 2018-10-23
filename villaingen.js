// pullin in json file
var jsonData = require('./words.json');

// randomly picks a characteristic from the json file and appends A or An to the front, depending on the first letter
function randomCharacteristic(){
  var word = jsonData.characteristic[Math.floor(Math.random() * jsonData.characteristic.length)];
  var firstLetter = word.split("")[0].toLowerCase();
  if (firstLetter == "a" | firstLetter == "e" | firstLetter == "i" | firstLetter == "o" | firstLetter == "u"){
    return 'An ' + word;
  } else{
    return 'A ' + word;
  }
}

// randomly picks a person from the json file
function randomPerson(){
  return jsonData.people[Math.floor(Math.random() * jsonData.people.length)];
}

// randomly picks a backstory from the json file
function randomBackstory(){
  return jsonData.backstories[Math.floor(Math.random() * jsonData.backstories.length)];
}

// randomly picks a current story from the json file
function randomCurrent(){
  return jsonData.currentStories[Math.floor(Math.random() * jsonData.currentStories.length)];
}

// randomly picks a goal from the json file
function randomGoal(){
  return jsonData.goals[Math.floor(Math.random() * jsonData.goals.length)];
}

// combines all the randomization into one sentence, returns the full line
function randomizer(){
  // currently split into a variable for testing reasons
  var line = (randomCharacteristic() + ' ' + randomPerson() + ' who ' + randomBackstory() + ' and is now ' + randomCurrent() + ' in order to ' + randomGoal() + '.');
  return line;
}

// prints to the console
console.log("\n\n\n\n\n\n\n\nYOUR VILLAIN IS:\n" + randomizer() + "\n\n\n\n\n\n\n\n");

// console.log(randomizer());
// console.log(randomizer());
// console.log(randomizer());
// console.log(randomizer());
// console.log(randomizer());
// console.log(randomizer());