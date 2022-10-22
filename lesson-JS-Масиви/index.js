// Створення масиву "Список покупок"

// для початку створюю функцію, яка буде обчислювати кінцеву вартість по кожному продукту
function accountFinalPrice() {
  return this.price * this.quantity;
}

// створюю перший продукт з зазначеними параметрами
const product1 = {
  name: 'juice',
  quantity: 2,
  isBought: false,
  price: 15,
  finalPrice: accountFinalPrice  // виводимо фінальну вартість покупки за допомогою функції що вказана вище
};

// створюю другий продукт з зазначеними параметрами
const product2 = {
  name: 'tomato',
  quantity: 5,
  isBought: true,
  price: 25,
  finalPrice: accountFinalPrice // виводимо фінальну вартість покупки за допомогою функції що вказана вище
};

// створюю третій продукт з зазначеними параметрами
const product3 = {
  name: 'potato',
  quantity: 10,
  isBought: true,
  price: 7,
  finalPrice: accountFinalPrice // виводимо фінальну вартість покупки за допомогою функції що вказана вище
};

// створюю четвертий продукт з зазначеними параметрами
const product4 = {
  name: 'potato',
  quantity: 10,
  isBought: false,
  price: 7,
  finalPrice: accountFinalPrice // виводимо фінальну вартість покупки за допомогою функції що вказана вище
};

