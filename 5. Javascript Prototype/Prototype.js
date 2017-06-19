// Constructor function
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

Car.prototype.showCar = function(){
  console.log("A Beautiful " + this.year + " " + this.make + " " + this.model);
}

var car1 = new Car("Volvo", "V70", 2005);
car1.showCar();


// ES5 og prototype inheritance
var Shape = function (id, x, y) {
    this.id = id
    this.move(x, y)
}
Shape.prototype.move = function (x, y) {
    this.x = x
    this.y = y
}