// запит користувача на визначення категорії віку
const answerAge = +prompt('Введіть, будь ласка, скільки вам років?', 0);
if (answerAge >= 0 && answerAge <= 11){
  alert('Дитина');
}
if (answerAge >= 12 && answerAge <= 17){
  alert('Підліток');
}
if (answerAge >= 18 && answerAge <= 59){
  alert ('Дорослий');
}
else {
  alert ('Пенсіонер');
};

// запит користувача на виведення спецсимволів відповідно до клавіші
const answerNumber = prompt('Введіть, будь ласка, цифру від 0 до 9 ?', '');
switch (answerNumber) {
  case '1':
    console.log('!');
    break;
  case '2':
    console.log('@');
    break;
  case '3':
    console.log('#');
    break;
  case '4':
    console.log('$');
    break;
  case '5':
    console.log('%');
    break;
  case '6':
    console.log('^');
    break;
  case '7':
    console.log('&');
    break;
  case '8':
    console.log('*');
    break;
  case '9':
    console.log('(');
    break;
  case '0':
    console.log(')');
    break;
  default:
    console.log('Вибачте ви ввели невірне значення');
    break;
}

//  Підрахунок суми чисел введених користувачем
let total = 0;
let input;
do {
  input = +prompt('Введи число');
  if (isFinite(input)) {
    total += input;
    console.log(total);
  } else {
    alert('Было введено не число, попробуйте еще раз');
  }
} while (input !== 0);
alert(`Общая сумма чисел равна ${total}`);

// Виведення найбыльщого спыльного дыльника для двох чисел
const num1 = prompt('Введіть, будь ласка перще число','');
const num2 = prompt('Введите второе число','');
  while (num1!= 0 && num2!= 0)
    if(num1>num2){
    num3 = num1%num2;
    alert(`Найбільшим спільним дільником двох чисел є число ${num3}`);
    }
    else  {
    num4= num2%num1;
    alert(`Найбільшим спільним дільником двох чисел є число ${num4}`);
  }

// Виведення всіх дільників заданного числа
const number = +prompt('Введіть будь-яке число для знаходження всіх його дільників');
for (let i = 1; i <= number; i++) {
  if (number % i == 0) {
    alert(`Дільниками цього числа будуть ${i}`);
  }
}

// Визначення п'ятирозрядного числа чи являється воно паліндромом (числом або текст,що зліва направо і зправа наліво читається однаково)
const Number = +prompt('Введіть п\'ятирозрядне число для перевірки чи являється воно паліндромом');
const isPalindromeNumber = function (i) {
  if (i<0) return false;
  if (i % 10 === 0) return false;
  if (i < 10) return true;

  let rev = 0;

  while (i > rev) {
    console.log(i, rev);
    // відділяємо першу цифру від числа
    rev *= 10;
    // відділяємо другу цифру від числа
    rev += i % 10;
    // не враховуємо центральне число при будь-якій кількості цифр числа, не порівнюємо з реверсом
    i = Math.trunc(i /10)
  }
  console.log(i, rev);
  return i === rev || i === Math.trunc(rev/10)
};
console.log(isPalindromeNumber(Number));

//  Визначення суми покупки з урохуванням знижки відповідно
const answerPrice = +prompt('Введіть суму покупки для визначення вартості вашої покупки з урахуванням знижки');
if (answerPrice >= 200 && answerPrice < 300) {
  // обчислюємо суму знижки
  discountPrice = (answerPrice / 100) * 3;
  // обчислюємо загальну суму покупки
  sum = answerPrice - discountPrice;
  alert(`Сума до сплати з урахуванням вашої знижки становить ${sum}`);
}
else if  (answerPrice >= 300 && answerPrice < 500) {
  // обчислюємо суму знижки
  discountPrice = (answerPrice / 100) * 5;
  // обчислюємо загальну суму покупки
  sum = answerPrice - discountPrice;
  alert(`Сума до сплати з урахуванням вашої знижки становить ${sum}`);
}
else if (answerPrice >= 500) {
  // обчислюємо суму знижки
  discountPrice = (answerPrice / 100) * 7;
  // обчислюємо загальну суму покупки
  sum = answerPrice - discountPrice;
  alert(`Сума до сплати з урахуванням вашої знижки становить ${sum}`);
}


// запит користувача 10 чисел і прорахунок додатніх і від'ємних, що дорівнє 0, парні, непарні числа
let positive = [];
let negative = [];
let steamy = [];
let odd = [];
let nule = 0;
let answerNumber1
for (let i = 0; i < 10; i++) {
  answerNumber1 = +prompt('Введіть' + (i + 1) + ' чисел: ')
  // визначаємо додатні числа
  if (answerNumber1 > 0) {
    positive++
  }
  // визначаємо від'ємні числа
  else if (answerNumber1 < 0) {
    negative++
  }
  // визначаємо парні числа
  else if (answerNumber1 / 2 == 0) {
    steamy++
  }
  // визначаємо непарні числа
  else if (answerNumber1 / 2 !== 0) {
    odd++
  }
  // визначаємо числа рівні 0
  else if (answerNumber1 === 0) {
    nule++
  }
}

alert(`Числа додатні ${positive}`);
alert(`Числа від\'ємні ${negative}`);
alert(`Числа парні ${steamy}`);
alert(`Числа непарні ${odd}`);
alert(`Числа, що рівні 0: ${nule}`);

// Відображення днів тижня, що показує наступний день
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const nowDay = prompt(`Введіть день тижня ${days}`);
switch (nowDay) {
    case 'Sunday':
      alert('Monday');
      break;
    case 'Monday':
      alert('Tuesday');
      break;
    case 'Tuesday':
      alert('Wednesday');
      break;
    case 'Wednesday':
      alert('Thursday');
      break;
    case 'Thursday':
      alert('Friday');
      break;
    case 'Friday':
      alert('Saturday');
      break;
    case 'Saturday':
      alert('Sunday');
      break;
    // виводим дефолтне значення
    default:
      console.log('Вибачте ви ввели невірне значення');
      break;
  }
  