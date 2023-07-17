import axios from 'axios';

//Унікальний ключ доступу до API Pixabay
const KEY = '37030220-55e5b35e4370d44ae057df5d9';

//Ліміт отриманих об'ектів на сторінці
const pageLimit = 12;

axios.defaults.baseURL = 'https://pixabay.com/api/';

//Функція, що фетчить картинки
export const fetchImages = async (query, page) => {
  const { data } = await axios({
    params: {
      key: KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: pageLimit,
      page: page,
    },
  });
  return data.hits;
};
