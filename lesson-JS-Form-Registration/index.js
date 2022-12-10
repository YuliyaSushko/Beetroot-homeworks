// * Imports

import registration from "./js/registration.js";



// * Get DOM element
const registrationForm = document.getElementById('js-registration-form');



// * Event listeners(підписка на події)
registrationForm.addEventListener('submit',registration); 
registrationForm.addEventListener('reset', registration);

// // * Event listeners(підписка на події)
// registrationForm.addEventListener('submit', (event) => {
//   event.preventDefault();      // зупинка стандартної поведінки, сторінка не перезагружається
//   console.log(event);
  
// });   //add-додати event-подія listener-слфдкувач подій






// // * test
// class User {
//   _name ='Default name';

//   constructor(name) {
//     if (name) {
//     this._name = name;
//     // this.getName();
//   }
//   }
//   get name() {
//     console.log(this._name + '!!!');

//   }

//   set name(newName) {
//     this._name = newName.trim();              // trim()- метод, який образає по краях зайві пробіли
//     console.log(this._name + 'seter');
//   }


//   getName() {
//     console.log(`name is: ${this.name}`);    
//   }
//   static checkNameLength(name) {
//     console.log(name.length);
//   }
// }


// const user1 = new User('Arthur');
// const user2 = new User('Oleg');
// user1.name                            //запускаеться get    вийде Артур !!!
// user1.name = 'New update name';       //запускаємо set      вийде New update nameseter
// // console.log('user1: ', user1);     //якщо після всьго викликати консоль, то в user вже зміниться ім'я