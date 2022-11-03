const user = {
  name: 'Yuliya',
}

JSON.stringify(user)

// console.log('JSON.stringify(user): ', JSON.stringify(user));

const userString = JSON.stringify(user);
localStorage.setItem('user', userString)



// class User {
//   _name = 'Default user name';    //  в любої сутності завжди є дефолтне ім'я
//   _age= 18;
//   changeNameCount = 0;  //скільки разів користувач міняв ім'я

//   constructor(name) {
//     if (name) {
//       this._name = name;     //якщо ім'я існує то приймається це значення
//     }    
//   }

//   get name() {
//     return 'Yuliya';
//   }

//   set name (newName) {
//     this.changeNameCount += 1;
//     this._name = newName;
//   }



//   get age() {
//     return `${this._age} років`;    //дописує слово років при виведенні інформ про вік
//   }

  

// }

// // const user1 = new User('Arthur');    //видасть Артур
// // console.log('user1: ', user1.name);
// // const user2 = new User('');
// // console.log('user2: ', user2.name);   //видасть дефолтне им'я



// const user = new User();

// console.log('user.name: ', user.name);