
$(document).ready(function() {
  randomizer();
  $( "#btn" ).click(function() {
    randomizer();
  });
});

function randomizer(){
  $.getJSON('words.json', function(data) {
    document.getElementById("id01").innerHTML = (randomCharacteristic(data) + ' ' + randomPerson(data) + ' who ' + randomBackstory(data) + ' and is now ' + randomCurrent(data) + ' in order to ' + randomGoal(data) + '.');
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