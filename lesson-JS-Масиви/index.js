// Створюю масив список покупок (shoppingList), кожен елемент якого містить назву продукту, кількість і куплений він чи ні, ціну зва одиницю товару
// створюю функцію, яка буда підраховувати кінцеву вартість кожного товару відносно ціни і кількості 

  
  let product1 = {
    name: 'Juice',
    count: 4,
    isBought: true,
    price: 18,
    sum: function () {
      let finalPrice = this.price * this.count;
      return finalPrice;
    } , 
  };
  console.log(`Вартість покупки становить ${product1.sum()} грн`)
  
  
  let product2 = {
    name: 'Coca-Cola',
    count: 15,
    isBought: true,
    price: 30,
    sum: function () {
      let finalPrice = this.price * this.count;
      return finalPrice;
    } , 
  };
  console.log(`Вартість покупки становить ${product2.sum()} грн`)
  

  let product3 = {
    name: 'Shweps',
    count: 7,
    isBought: false,
    price: 35,
    sum: function () {
      let finalPrice = this.price * this.count;
      return finalPrice;
    } , 
  };
  console.log(`Вартість покупки становить ${product3.sum()} грн`)
  

  let product4 = {
    name: 'Lemon',
    count: 6,
    isBought: false,
    price: 15,
    sum: function () {
      let finalPrice = this.price * this.count;
      return finalPrice;
    } , 
  };
  console.log(`Вартість покупки становить ${product4.sum()} грн`)
  
  let product5 = {
    name: 'Sushi',
    count: 8,
    isBought: false,
    price: 115,
    sum: function () {
      let finalPrice = this.price * this.count;
      return finalPrice;
    } , 
  };
  console.log(`Вартість покупки становить ${product5.sum()} грн`)
  

  let product6 = {
    name: 'Pizza',
    count: 1,
    isBought: false,
    price: 125,
    sum: function () {
      let finalPrice = this.price * this.count;
      return finalPrice;
    } , 
  };
  console.log(`Вартість покупки становить ${product6.sum()} грн`)
  

  const shoppingList = [product1, product2, product3, product4, product5, product6];
  // виводжу в консоль дані масиву
console.log('shoppingList: ', shoppingList);


// щоб відсортувати куплені товари від некупованих створюю const 
const sortedShoppingList = [...shoppingList]

// відсортовую товари
sortedShoppingList.sort((a, b) => {
  // якщо товар придбали він отримує 1
  if (a.isBought === true && b.isBought === false) {
    return 1
  }
  // якщо товар не придбаний -1
  if (a.isBought === false && b.isBought === true) {
    return -1
  }
  return 0
})

// сортую спочатку непридбані (a), а потім придбані товари
sortedShoppingList.sort((a, b) => a.isBought - b.isBought)
// виводжу в консоль результат
console.log(sortedShoppingList) 


// створюю функцію пошуку та придбання товару

function boughtProduct(productsArray, name) {
  // шукаю потрібний мені товар
  let findProduct = productsArray.find((product) => product.name === name); 
  // якщо товару немає
  if (findProduct === undefined) {
    console.log('Вибачте, сталася помилка');
    return;
  }
  // якщо товар знайдений присвоюю йому значення true як куплений
  findProduct.isBought = true; 
}
boughtProduct(shoppingList, 'Pizza');
console.log(boughtProduct(shoppingList, 'Pizza'));
console.log(shoppingList);

