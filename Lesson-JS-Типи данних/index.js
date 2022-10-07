// Додавання чисел і виведення математично правильної відповіді
let number1 = 0.1;
let number2 = 0.2;
let sum = number1 + number2;
// Відповідь буде фіксована на 1 цифру після коми
console.log(`${sum.toFixed(1)}`);


// Додавання рядка на число
let line = '1';
let number = 2;
let suma = +line + number; 
//  + перед line перетворює на числовий вираз
console.log(`${suma}`);


// Розрахунок кількості файлів на обсяг флешки в Гб
const amountMemory = +prompt("Введіть об\'єм пам\'яті вашої флешки в Гб");
let memory = amountMemory * 1024;
let amountFile = memory / 820;
let remainderMemory = memory%820;
alert(`На вашій флешці поміститься ${amountFile.toFixed(0)} файлів і залишок пам\'яті становить ${remainderMemory} Mb`);


// Розрахунок кількості шоколадок за наявні кошти
const money = +prompt("Введіть кількість грошей в вашому гаманці в грн");
const price = +prompt("Введіть вартість однієї шоколадки в грн");
let cost = Math.floor(money / price);
let remainder = money%price;
alert(`За ваші кошти ви можете придбати ${cost.toFixed(0)} шоколадок і отримаєте сдачу ${remainder} грн`);


// Розрахунок відсотків по депозиту за 2 місяці при відсотковій ставці 5% річних
const moneyDep = +prompt("Введіть суму коштів, яку ви плануєте покласти на депозит в грн");
const procent = 5 / 10012;
let deposit = (2 * moneyDep * procent) / 100;
alert(`За 2 місяці при відсотковій ставці 5% річних ви отримаєте ${deposit.toFixed(2)} грн`);


//  Що повернуть вирази
(2 && 0 && 3);
// якщо хоч один із цмх запросів буде false, то весь вираз видасть false
(2 || 0 || 3)
// якщо хоч одне значення true то буде true
(2 && 0 || 3)
//  тут два варіанти: або 2 разом з 0 будуть true(false) або 3 буде true(false)
