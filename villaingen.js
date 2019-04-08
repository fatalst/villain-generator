
$(document).ready(function() {
  var json = 'fantasy.json';
  randomizer(json);
  $( "#swt" ).click(function() {
    if(json === 'fantasy.json'){
      json = 'scifi.json';
      document.getElementById("swt").innerHTML = ('Switch to fantasy villains.');
    } else{
      json = 'fantasy.json';
      document.getElementById("swt").innerHTML = ('Switch to sci-fi villains.');
    }
    randomizer(json);
  });
  $( "#btn" ).click(function() {
    randomizer(json);
  });
});

function randomizer(json){
  $.getJSON(json, function(data) {
    document.getElementById("vil").innerHTML = (randomCharacteristic(data) + ' ' + randomPerson(data) + ' who has ' + randomBackstory(data) + ' and is now ' + randomCurrent(data) + ' in order to ' + randomGoal(data) + '.');
  });
  $.getJSON('words.json', function(data) {
    document.getElementById("btn").innerHTML = ('Not ' + randomAdj(data) + ' enough!');
  });
}

// randomly picks a characteristic from the json file and appends A or An to the front, depending on the first letter
function randomCharacteristic(data){
  var word = data.characteristic[Math.floor(Math.random() * data.characteristic.length)];
  var firstLetter = word.split("")[0].toLowerCase();
  if (firstLetter == "a" | firstLetter == "e" | firstLetter == "i" | firstLetter == "o" | firstLetter == "u"){
    return 'An ' + word;
  } else{
    return 'A ' + word;
  }
}

// randomly picks a person from the json file
function randomPerson(data){
  return data.people[Math.floor(Math.random() * data.people.length)];
}

// randomly picks a backstory from the json file
function randomBackstory(data){
  return data.backstories[Math.floor(Math.random() * data.backstories.length)];
}

// randomly picks a current story from the json file
function randomCurrent(data){
  return data.currentStories[Math.floor(Math.random() * data.currentStories.length)];
}

// randomly picks a goal from the json file
function randomGoal(data){
  return data.goals[Math.floor(Math.random() * data.goals.length)];
}

function randomAdj(data){
  return data.adj[Math.floor(Math.random() * data.adj.length)];
}