// Моє ім'я
const myName = `Yuliya`;

// Неправильні імена
// const my-name = 'Yulia';
// const my_name = 'Yulia';
// const MyName = 'Yulia';


// запрос на ім'я користувача
const name = prompt('Введіть своє ім\'я?');
let userName = name;
alert(`Привіт, ${userName}`);


// запрос на визначення віку користувача
const age = prompt("Введіть рік свого народження");
const now = new Date;
let year = new Date(now.getFullYear());
let userAge = year - age;
alert(`Вам ${userAge} років`);

// запрос на визначення площі квадрату
const areaSquare = prompt("Введіть довжину сторони квадрату для визначення площі квадрату");
let squareS = areaSquare * areaSquare;
alert(`Площа квадрату дорівнює ${squareS}`);

// запрос на визначення периметру квадрату
const square = prompt("Введіть довжину сторони квадрату для визначення периметру квадрату");
let perimetrSquare = square * 4;
alert(`Периметр квадрату рівен ${perimetrSquare}`);

// запрос на визначення площі кола через радіус
const circleRadius = prompt('Введіть радіус кола для визначення його площі');
let circleArea = Math.PI * circleRadius * circleRadius;
alert(`Площа квадрату рівна ${circleArea}`);

// запрос на визначення необхідної швидкісті
const distance = prompt('Введіть відстань, яку вам потрібно подолати');
const time = prompt('Введіть час, за який вам потрібно подолати цю відстань');
let speed = distance/time;
alert(`Щоб встигнути вчасно вам потрібно їхати із швидкістю ${speed} км/год`);

// запрос на конвертацію валюти з доллара в євро 
const dollar = prompt ('Введіть сумму в долларах');
const euro = 1.02;
let converter = dollar * euro;
alert(`Після конвертації валюти ви отримаєте ${converter} euro`);


