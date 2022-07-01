import { useState } from 'react';
import { useQuery } from 'react-query';
import Seo from '../components/Seo';
import { getMovie, IGetMoviesResult } from './api/fetchMoviedata';

export default function Home() {
    const { data, isLoading } = useQuery<IGetMoviesResult>(
        ['movie', 'nowPlaying'],
        getMovie,
    );
    console.log(data);

    return (
        <div>
            <Seo title='Home' />
            <h1>Hello</h1>
            {isLoading && <h1>Loading...'</h1>}
            {data?.results.map((movie) => (
                <>
                    <div key={movie.id}>{movie.title}</div>
                </>
            ))}
        </div>
    );
}
