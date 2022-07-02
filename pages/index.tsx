import { useState } from 'react';
import { useQuery } from 'react-query';
import Seo from '../components/Seo';
import { getMovie, IGetMoviesResult } from './api/FetchMovieData';

export default function Home() {
    const { data, isLoading } = useQuery<IGetMoviesResult>(
        ['movie', 'nowPlaying'],
        getMovie,
    );
    console.log(data);

    return (
        <>
            <div className='container'>
                <Seo title='Home' />

                {isLoading && <h1>Loading...'</h1>}
                {data?.results.map((movie) => (
                    <div className='movie' key={movie.id}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        />
                        <h4>{movie.title}</h4>
                    </div>
                ))}
            </div>
            <style jsx>{`
                .container {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    padding: 20px;
                    gap: 20px;
                }
                .movie img {
                    max-width: 100%;
                    border-radius: 12px;
                    transition: transform 0.2s ease-in-out;
                    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                }
                .movie:hover img {
                    transform: scale(1.05) translateY(-10px);
                }
                .movie h4 {
                    font-size: 18px;
                    text-align: center;
                }
            `}</style>
        </>
    );
}
