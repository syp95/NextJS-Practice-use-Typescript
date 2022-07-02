import axios from 'axios';

export interface IMovie {
    id: number;
    backdrop_path: string;
    poster_path: string;
    title: string;
    overview: string;
    name?: string;
}

export interface IGetMoviesResult {
    dates: {
        maximum: string;
        minimum: string;
    };
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
}

const API_KEY = '10923b261ba94d897ac6b81148314a3f';
const BASE_PATH = 'https://api.themoviedb.org/3';

export const getMovie = async () => {
    const { data } = await axios.get(
        `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`,
    );

    return data;
};

export const getMovieDetail = async (movieId?: any) => {
    const { data } = await axios.get(
        `${BASE_PATH}/movie/${movieId}?api_key=${API_KEY}`,
    );
    return data;
};
