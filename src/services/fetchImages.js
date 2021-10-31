import axios from "axios";
export default function FetchImages(searchImages, page = 1) {
    const BASE_URL = 'https://pixabay.com/api/';
    const KEY = '23141875-b38ef2a229822d56efda8eea3';
    return axios
        .get(`${BASE_URL}?q=${searchImages}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .catch(err => console.log(err));
    }

