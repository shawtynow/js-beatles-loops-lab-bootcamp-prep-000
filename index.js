// add solution here
function theBeatlesPlay(musician, instruments) {
  var array = [];
  for(var i = 0; i < musician.length; i++) {
    array[i] = (`${musician[i]} plays ${instruments[i]}`);
  }
  return array
}

function johnLennonFacts(facts) {
  var i = 0
  while(i < facts.length){
    facts[i] = facts[i] + '!!!'
    i++
  }
  return facts
}