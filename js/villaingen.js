// on load, set json to the fantasy terms, print the first random line
// & create button onclick events
$(document).ready(function() {
  var json = 'json/fantasy.json';
  randomizer(json);
  newButton();

  // when button is clicked, create new random line & button text
  $( "#btn" ).click(function() {
    randomizer(json);
    newButton();
  });

  //
  $( "#swt" ).click(function() {
    if(json === 'json/fantasy.json'){
      json = 'json/scifi.json';
      document.getElementById("swt").innerHTML = ('Switch to fantasy villains.');
    } else{
      json = 'fantasy.json';
      document.getElementById("swt").innerHTML = ('Switch to sci-fi villains.');
    }
    randomizer(json);
  });
});

function randomizer(json){
  var str1, str2;
  $.getJSON('json/words.json', function(data) {
    str1 = randomCharacteristic(data);
  });
  $.getJSON(json, function(data) {
    str2 = (' ' + data.people[chance.integer({min: 0, max: (data.people.length-1)})] +
        ' who has ' + data.backstories[chance.integer({min: 0, max: (data.backstories.length-1)})] +
        ' and is now ' + data.currentStories[chance.integer({min: 0, max: (data.currentStories.length-1)})] +
        ' in order to ' + data.goals[chance.integer({min: 0, max: (data.goals.length-1)})] + '.');
    document.getElementById("vil").innerHTML = str1 + str2;
  });
}

function newButton(){
  $.getJSON('json/words.json', function(data) {
    document.getElementById("btn").innerHTML = ('Not ' + data.adj[chance.integer({min: 0, max: (data.adj.length-1)})] + ' enough!');
  });
}

// randomly picks a characteristic from the json file and appends A or An to the front, depending on the first letter
function randomCharacteristic(data){
  var len = data.characteristic.length - 1;
  var word = data.characteristic[chance.integer({min: 0, max: len})];
  if (typeof word === 'undefined'){ word = data.characteristic[0]; }
  var firstLetter = word.split("")[0].toLowerCase();
  if (firstLetter == "a" | firstLetter == "e" | firstLetter == "i" | firstLetter == "o" | firstLetter == "u"){
    return 'An ' + word;
  } else{
    return 'A ' + word;
  }
}