// 'this' in JavaScript

var numbers = new Numbers([1, 3, 5, 10, 14, 20, 33, 50]);

// denne funktion dur ikke!

function Numbers(numbers) {
    var self = this; 
    self.nums = numbers;
    self.fives = [];
    self.nums.forEach(function (number) { // function(number) får sit eget 'this'
        if (number % 5 === 0) {
            self.fives.push(number); // derfor undefined..
        }
    });
}

// Problem løses med arrow function
function Numbers(numbers) {
    var self = this;  // ‘self’ bruges til at bibeholde en reference til det originale ‘this’, selvom konteksten ændres
    self.nums = numbers;
    self.fives = [];
    self.nums.forEach((number) => {
        if (number % 5 === 0) {
            self.fives.push(number);
        }
    });
}

// Videregive ’this’ værdi: call(), apply()
// Kalder en funktion med det samme

function add(c, d) {
  return this.a + this.b + c + d;
}

var o = {a: 1, b: 3};

add.call(o, 5, 7); // 1 + 3 + 5 + 7 = 16

add.apply(o, [10, 20]); // 1 + 3 + 10 + 20 = 34

// Videregive 'this' værdi: bind()
// Kalder funktionen senere med dens funktionens nuværende retur værdi