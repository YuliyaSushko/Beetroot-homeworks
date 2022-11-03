// 


const playList = [
  {
    author: 'LED ZEPPELIN',
    song: 'STAIRWAY TO HEAVEN',
  },

  {
    author: 'QUEEN',
    song: 'BOHEMIAN RHAPSODY',
  },

  {
    author: 'LYNYRD SKYNYRD',
    song: 'FREE BIRD',
  },

  {
    author: 'DEEP PURPLE',
    song: 'SMOKE ON THE WATER',
  },

  {
    author: 'JIMI HENDRIX',
    song: 'ALL ALONG THE WATCHTOWER',
  },

  {
    author: 'AC/DC',
    song: 'BACK IN BLACK',
  },

  {
    author: 'QUEEN',
    song: 'WE WILL ROCK YOU',
  },

  {
    author: 'METALLICA',
    song: 'ENTER SANDMAN',
  },
]

const showSongsList = arr => {        //створюю константу, яка буде приймати в собі масив
  let list = '';
  for(item of arr) {
      list += `Автор: ${item.author} - Пісня: ${item.song}; `;     //повертає список авторів і пісень, але не можу зробити щоб був вниз список 
  }
  return list;     //повертає саме список в тому вигляді що прописано вище
}

const btnShow = document.querySelector('.button-show');      //створюю константу, що витягує данні з документу
const btnClose = document.querySelector('.button-close');    //створюю константу, що витягує данні з документу
const songsList = document.querySelector('.songs-list');     //створюю константу, що витягує данні з документу

btnShow.addEventListener('click', function() {               //створюю функцію, що спрацьовує при кліку на кнопку відкрити
  songsList.innerHTML = showSongsList(playList);
  btnShow.style.display = 'none';                            //при цьому кнопка  'відкрити' пропадає
  btnClose.style.display = 'block';                           
});

btnClose.addEventListener('click', function() {             //створюю функцію, що спрацьовує при кліку на кнопку 'закрити'
  songsList.innerHTML = '';
  btnShow.style.display = 'block';
  btnClose.style.display = 'none';                          //сама кнопка 'закрити' пропадає
});
