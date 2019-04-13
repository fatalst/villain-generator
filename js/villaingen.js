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
    if(fantasy){
      fantasy = false;
      document.getElementById("swt").innerHTML = ('Switch to fantasy villains.');
    } else{
      fantasy = true;
      document.getElementById("swt").innerHTML = ('Switch to sci-fi villains.');
    }
    randomizer(json, fantasy);
  });

  $(document).on('click','#chara',function(){
    $.getJSON(json, function(data) {
      document.getElementById("chara").innerHTML = randomCharacteristic(data);
    });
  });

  $(document).on('click','#per',function(){
    $.getJSON(json, function(data) {
      document.getElementById("per").innerHTML = randomPerson(data, fantasy);
    });
  });

  $(document).on('click','#back',function(){
    $.getJSON(json, function(data) {
      document.getElementById("back").innerHTML = randomBackstory(data, fantasy);
    });
  });

  $(document).on('click','#current',function(){
    $.getJSON(json, function(data) {
      document.getElementById("current").innerHTML = randomCurrent(data, fantasy);
    });
  });

  $(document).on('click','#goal',function(){
    $.getJSON(json, function(data) {
      document.getElementById("goal").innerHTML = randomGoal(data, fantasy);
    });
  });

});

function randomizer(json, fantasy){
  $.getJSON(json, function(data) {
    document.getElementById("vil").innerHTML = ('<span id="chara">' + randomCharacteristic(data) +
      '</span> <span id="per">' + randomPerson(data, fantasy) + '</span> who <span id="back">' +
      randomBackstory(data, fantasy) + '</span> and is now <span id="current">' + randomCurrent(data, fantasy) +
      '</span> in order to <span id="goal">' + randomGoal(data, fantasy) + '</span>.');
  });
}

function randomPerson(data, fantasy){
  if(fantasy){
    return data.peopleF[chance.integer({min: 0, max: (data.peopleF.length-1)})];
  }else{
    return data.peopleS[chance.integer({min: 0, max: (data.peopleS.length-1)})];
  }
}

function randomBackstory(data, fantasy){
  if(fantasy){
    return data.backstoriesF[chance.integer({min: 0, max: (data.backstoriesF.length-1)})];
  }else{
    return data.backstoriesS[chance.integer({min: 0, max: (data.backstoriesS.length-1)})];
  }
}

function randomCurrent(data, fantasy){
  if(fantasy){
    return data.currentStoriesF[chance.integer({min: 0, max: (data.currentStoriesF.length-1)})];
  }else{
    return data.currentStoriesS[chance.integer({min: 0, max: (data.currentStoriesS.length-1)})];
  }
}

function randomGoal(data, fantasy){
  if(fantasy){
    return data.goalsF[chance.integer({min: 0, max: (data.goalsF.length-1)})];
  }else{
    return data.goalsS[chance.integer({min: 0, max: (data.goalsS.length-1)})];
  }
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