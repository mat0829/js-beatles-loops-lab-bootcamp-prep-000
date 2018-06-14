function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++){
    array[i] = musicians[i] + " plays " + instruments[i]
  }
  return array
<<<<<<< HEAD
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] = facts[i]+'!!!';
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    ++number;
  }
  while (number < 15);
  return array;
=======
>>>>>>> e6eea3d9daa2f99517e0214ad8b173823dd5a996
}