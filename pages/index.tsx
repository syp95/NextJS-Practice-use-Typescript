import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import Seo from '../components/Seo';
import { getMovie, IGetMoviesResult } from './api/FetchMovieData';

export default function Home() {
    const { data, isLoading } = useQuery<IGetMoviesResult>(
        ['movie', 'nowPlaying'],
        getMovie,
        {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            keepPreviousData: true,
        },
    );
    console.log(data);
    const router = useRouter();
    const onClick = (id: Number) => {
        router.push(`/movies/${id}`);
    };

    return (
        <>
            <div className='container'>
                <Seo title='Home' />

                {isLoading ? (
                    <h1>Loading...</h1>
                ) : (
                    data?.results.map((movie) => (
                        <div className='movie' key={movie.id}>
                            <img
                                onClick={() => onClick(movie.id)}
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            />
                            <h4>
                                <Link href={`/movies/${movie.id}`}>
                                    <a>{movie.title}</a>
                                </Link>
                            </h4>
                        </div>
                    ))
                )}
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

export const getServerSideProps: GetServerSideProps = async () => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(
        ['movie', 'nowPlaying'],
        async () => await getMovie(),
    );

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
};
