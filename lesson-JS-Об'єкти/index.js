// Об'єкт з описом автомобіля
const auto = {
  made: 'Fiat',
  model: 'Doblo',
  year: 2021,
  speed: 80,
  fuilTank: 50,
  averageWaste: 5,
  drivers: ['Alexei', 'Dmitrii', 'Oleg'],

  // виводимо інформацію про авто
  conclusion: function () {
    console.log(auto)
  },

  // добавляємо ще одного водія до переліку водіїв
  addDriver: () => {
    auto.drivers.push('Vladimir')
    return auto.drivers[3] //повертає три водія, так як перший іде 0
  },

  // обчислення рівня пального
  refuel: function (tank) {
    if (tank < 50 / 2) {
      console.log(`Рівень пального: ${tank}л. Вам потрібно дозаправитися.`)
    } else {
      console.log(`Рівень пального в вашому авто: ${tank}л.`)
    }
  },

  // обчислення часу необхідного для подолання введеної користувачем відстані
  check: function () {
    let distance = prompt('Введіть скільки кілометрів ви б хотіли проїхати?')
    let necessaryTime = distance / auto.speed
    let time = prompt('Введіть за який час Ви б хотіли доїхати?')

    if (time >= 4) {
      return +necessaryTime.toFixed(1) + 1 //з урахуванням, що через кожні 4 години водій має відпочити 1 годину
    } else {
      return +necessaryTime.toFixed(1) //звичайний розрахунок
    }
  },

  // обчислення пального, необхідного для подолання заданої користувачем відстані
  fuil: function () {
    let distance = prompt('Скільки кілометрів Ви б хотіли проїхати?')
    let necessaryfuil = distance / auto.averageWaste
    return +necessaryfuil.toFixed(1)
  },
}
// виводимо інфо про авто в консоль
console.log(auto.conclusion())
// додатковий водій
console.log(auto.addDriver())
// виводимо рівень пального
console.log(auto.refuel(45))
// виводимо необхідний час на подолання заданої відстані
console.log(`Вам потрібно ${auto.check()}год, щоб проїхати дану відстань.`)
// виводимо необхідну кількість пального на подолання заданої відстані
console.log(`На цю поїздку ви затратите ${auto.fuil()} л пального`)

