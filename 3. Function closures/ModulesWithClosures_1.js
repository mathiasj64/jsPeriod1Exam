//Man kan lave en privat virabel.

var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {changeBy(1);},
    decrement: function() {changeBy(-1);},
    value: function() { return privateCounter;}
  }
};
var counter1 = makeCounter();
var counter2 = makeCounter();

counter1.increment();
counter1.increment();
counter2.increment();

console.log(counter1.value());
console.log(counter2.value());





//EX 2





var makePerson = function() {
  var age = 0;
  var name = " ";
  return {
    setAge: function(val) {age = val;},
    setName: function(val) {name = val;},
    getInfo: function() { return name + ", " + age;}
  }
};
var person1 = makePerson();
var person2 = makePerson();

console.log(person1.getInfo());
person1.setAge(10);
person1.setName("Per");
console.log(person1.getInfo());