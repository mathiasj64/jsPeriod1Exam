class Shape {
    constructor (id, x, y) {
        this.id = id
        this.move(x, y)
    }
    move (x, y) {
        this.x = x
        this.y = y
    }
}

class Rectangle extends Shape {
    constructor (id, x, y, width, height) {
        super(id, x, y)
        this.width  = width
        this.height = height
    }
}
class Circle extends Shape {
    constructor (id, x, y, radius) {
        super(id, x, y)
        this.radius = radius
    }
}

var circle1 = new Circle(1, 5, 5, 10)
var rectangle1 = new Rectagle(1, 5, 5, 20, 20)

console.log(circle1);
circle1.move(15,15);
console.log(circle1);
