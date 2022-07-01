import axios from 'axios';

export const getMovie = async () => {
    const API_KEY = '10923b261ba94d897ac6b81148314a3f';
    const BASE_PATH = 'https://api.themoviedb.org/3';

    const { data } = await axios.get(
        `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`,
    );

    return data;
};
