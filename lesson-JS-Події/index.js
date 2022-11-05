// Створюю html-сторінку для відображення/редагування тексту. при відкритті сторінки текст відображається за допомогою тега div.
// при натисканні ctrl+E, замість div з'являється еучефкуф з тим же текстом, який тепер можна редагувати. при натискані ctrl+S,
// замість textarea з'являеться div  зі зміненим текстом. Вимкнути поведінку за замовчуванням для цих поєднань клавіш

// Щоб було оптимізованіше і менше візуального коду, я окремо створюю дві константи, що приймають в себе наші елементи
const textarea = document.getElementById('js-textarea')
const block = document.getElementById('text-block')

textarea.style.display = 'none' //спочатку задаю textarea display none, щоб користувач її не бачив на початку

document.addEventListener('keydown', function (event) {
  textarea.innerHTML = block.innerHTML

  if (event.code === 'KeyE' && (event.ctrlKey || event.metaKey)) {
    // при цій комбінації відпрацію код для редагування тексту
    event.preventDefault()
    block.style.display = 'none'
    textarea.style.display = 'block'
  } else if (event.code === 'KeyS' && (event.ctrlKey || event.metaKey)) {
    // при цій комбінації відпрацію код для зберігання вже відредагованого тексту
    event.preventDefault()
    block.innerHTML = textarea.value
    block.style.display = 'block'
    textarea.style.display = 'none'
  }
})
