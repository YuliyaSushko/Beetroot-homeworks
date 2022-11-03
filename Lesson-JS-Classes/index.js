// створюю класс, що описує коло, та має значення радіуса
class Circle {
  _radius = 'Default radius';       // задаю змінній дефолтне значення


  constructor(radius) {
    if (radius) {
      this._radius = radius;    //якщо radius існує, то воно приймає значення radius
    }
  }

  get circleRadius() {
    return `Радіус кола: ${this.circleR}`;    // виводить в консолі опис 'Радіус кола: 4'
  }

  set circleRadius(radius) {
    this.circleR = radius;                 //присвоюю circleR занчення radius
  }

  get circleDiameter() {
    return `Діаметр кола: ${this.circleR * 2}`;    //вичисляю діаметр за формулою
  }

  getCircleArea() {
    return `Площа кола: ${(Math.PI * (this.circleR * this.circleR)).toFixed(1)}`;  //вичисляю площу за формулою
  }

  getCircleLength() {
    return `Довжина кола: ${(2 * Math.PI * this.circleR).toFixed(1)}`;     //вичисляю довжину кола за формулою
  }
}

const circle1 = new Circle();         //створюю змінну circle1

circle1.circleR = 4;                  // задаю змінній значення радійса 4 для обробки через клас
console.log(circle1);                 //після виклику сетера
console.log(circle1.circleRadius);    //виклик гетера, який повертає радіус
console.log(circle1.circleDiameter);  //виклик гетера, який повертає діаметр
console.log(circle1.getCircleArea()); //виклик методу, який повертає площу
console.log(circle1.getCircleLength());//виклик методу, який повертає довжину кола