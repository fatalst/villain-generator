'use strict';
let jsonData = require('./words.json');

function randomCharacteristic(){
  return jsonData.characteristic[Math.floor(Math.random() * jsonData.characteristic.length)];
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


console.log(randomizer());