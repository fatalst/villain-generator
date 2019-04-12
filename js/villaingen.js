// on load, set json to the fantasy terms, print the first random line
// & create button onclick events
$(document).ready(function() {
  var json = 'json/words.json';
  var fantasy = true;
  randomizer(json, fantasy);
  newButton(json);

  // when button is clicked, create new random line & button text
  $( "#btn" ).click(function() {
    randomizer(json, fantasy);
    newButton(json);
  });

  //
  $( "#swt" ).click(function() {
    if(fantasy == true){
      fantasy = false;
      document.getElementById("swt").innerHTML = ('Switch to fantasy villains.');
    } else{
      fantasy = true;
      document.getElementById("swt").innerHTML = ('Switch to sci-fi villains.');
    }
    randomizer(json, fantasy);
  });
});

function randomizer(json, fantasy){
  $.getJSON(json, function(data) {
    var chara = randomCharacteristic(data, fantasy);
    var per, back, current, goal;
    if(fantasy == true){
      per = data.peopleF[chance.integer({min: 0, max: (data.peopleF.length-1)})];
      back = data.backstoriesF[chance.integer({min: 0, max: (data.backstoriesF.length-1)})];
      current = data.currentStoriesF[chance.integer({min: 0, max: (data.currentStoriesF.length-1)})];
      goal = data.goalsF[chance.integer({min: 0, max: (data.goalsF.length-1)})];
    } else{
      per = data.peopleS[chance.integer({min: 0, max: (data.peopleS.length-1)})];
      back = data.backstoriesS[chance.integer({min: 0, max: (data.backstoriesS.length-1)})];
      current = data.currentStoriesS[chance.integer({min: 0, max: (data.currentStoriesS.length-1)})];
      goal = data.goalsS[chance.integer({min: 0, max: (data.goalsS.length-1)})];
    }
    document.getElementById("vil").innerHTML = (chara + ' ' + per + ' who has ' + back + ' and is now ' + current + ' in order to ' + goal + '.');
  });
}

function newButton(json){
  $.getJSON(json, function(data) {
    document.getElementById("btn").innerHTML = ('Not ' + data.adj[chance.integer({min: 0, max: (data.adj.length-1)})] + ' enough!');
  });
}

// randomly picks a characteristic from the json file and appends A or An to the front, depending on the first letter
function randomCharacteristic(data){
  var len = data.characteristic.length - 1;
  var word = data.characteristic[chance.integer({min: 0, max: len})];
  var firstLetter = word.split("")[0].toLowerCase();
  if (firstLetter == 'a' || firstLetter == 'e' || firstLetter == 'i' || firstLetter == 'o' || firstLetter == 'u'){
    return 'An ' + word;
  } else{
    return 'A ' + word;
  }
}