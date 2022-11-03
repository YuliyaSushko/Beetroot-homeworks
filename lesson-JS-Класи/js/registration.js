const innerText = (id, value) => (document.getElementById(id).innerText = value);

const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;  //  змінна для перевірки email

const items = {
  firstName: {
    id: 'js-registration-first-name-error',
    data: {
      noName: "Введіть ім'я",
      getMinLength: function(){
        return `Мінімально допустима довжина ім\'я - ${this.minLength} символа`;
      },
      minLength: 4,
    },
  },
};

const registration = (event) => {
  event.preventDefault(); //відміна стандартної поведінки форми, щоб не було перезагрузки сторінки

  const form = new FormData(event.target); //створення форми   /event-подія  /target-htmlулумент, на якому спрацювала ця подія
  console.log('form: ', form);

  const firstName = form.get('firstName'); //обробка форми
  console.log('firstName: ', firstName);

  // Перевірка імені
  if (!firstName) {
    innerText(items.firstName.id, items.firstName.data.noName); //скорочений варіант, коли не ввели ім'я
    return; //призупинить код
  } else if (firstName.length < items.firstName.data.minLength) {
    innerText(items.firstName.id, items.firstName.data.getMinLength());//скорочений варіант помилки при мін довжині строки
  } else {
    innerText(items.firstName.id, ''); //скорочений варіант, коли все введено вірно
  }

  // Перевірка пароля
  const password = form.get('password');

  // Перевірка email
  const email = form.get('email');

  if(!emailRegExp.test(email)) {
    // 
  }


  const reguestData = {
    firstName,
    password,
  
};
};

export default registration
