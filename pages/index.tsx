import { useQuery } from 'react-query';
import Seo from '../components/Seo';
import { getMovie } from './api/fetchMoviedata';

export default function Home() {
    const { data, isLoading } = useQuery(['movie', 'nowPlaying'], getMovie);
    console.log(data);

    return (
        <div>
            <Seo title='Home' />
            <h1>Hello</h1>
            <div>{data.page}</div>
        </div>
    );
}
