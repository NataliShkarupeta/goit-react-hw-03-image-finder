const Base_Url=`https://pixabay.com/api/`;
const Api_key=`32192746-459981941dda650b5aa171a9f`;

export const fetchApi = (value, page) => {
  return fetch(
    `${Base_Url}?key=${Api_key}&image_type=photo&orientation=horizontal&page=${page}&per_page=12&q=${value}`
  );
};
