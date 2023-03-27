class Square {
    constructor(side) {
        this.side = side;
    }
    area(){
      return this.side * this.side;
    }
}

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area(){
       return this.width * this.height;
    }
}

class Circle {
    constructor(radius) {
         this.radius = radius;
    }
    area(){
        return Math.PI * this.radius * this.radius;
    }
}

class AreaCalculator {
   calculate(obj) {
       return obj.area()
   }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.prototype.calculate(square));
console.log(AreaCalculator.prototype.calculate(rectangle));
console.log(AreaCalculator.prototype.calculate(circle));