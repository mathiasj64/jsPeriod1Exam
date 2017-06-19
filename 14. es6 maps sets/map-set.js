// Map

var myMapObject = new Map();

var key  = "hej key";
myMapObject.set(key, "hej value");

myMapObject.get(key); // "hej value"

// Set
//Hvert objekt må kun forekomme 1 gang hver

var mySet = new Set();
mySet.add(1); //set {1}
mySet.add(5); //set {1, 5}
mySet.has(1); //true