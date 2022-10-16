// Варіант використання функції
// об'являємо фнкцію
function showMessage() {
  console.log('Привіт, друже!');
}
// запускаємо функцію
showMessage();

// Стрілочна функція
let getMessage = (text, name) => text + ', ' + name + '!';
console.log (getMessage('Привіт', 'друже'));


// Функція, яка виводить кількість переданих аргументів
function func1(a, b, c) {
  console.log(arguments.length);
}
// функція виведе 3, так як у функції задано 3 аргумента
func1(1, 2, 3)



// Функція, яка приймає два числа і повертає 
function number(num1, num2) {
  if (num1 < num2) return -1;
  if (num1 > num2) return 1;
  if (num1 === num2) return 0;
}
console.log(number(15, 7));


// Функція, що обчислює факторіал заданного числа
// Факторіал натурального числа це число помножене на себе самого -1, потім * на себе і -2, * на себе -3...
function factorial(num) {
  if (num === 1) {
      return 1;
  } else if (num === 0) {
      return 1;
  } else {
      return num * factorial(num - 1)
  }
}
console.log(factorial(7));


// Функція, яка приймає три окремі цифри ф виводить їх в одне число
function String(num1, num2, num3) {
  // метод перетворення числа в строку, кожного окремо
  return num1.toString() + num2.toString() + num3.toString();
}
console.log(String(1, 5, 9));


// функція, яка приймає довжину і ширину прямокутника і обчислює його площу
function calculate(num1, num2) {
    if (num1, num2) {
      area = num1 * num2;
      console.log(area);
    }
    if (num1) {
      area = num1 * num1;
      console.log(area);
    }  
    else {
      alert('Ви ввели не число');
    }
  }
  console.log(calculate(3,5));



