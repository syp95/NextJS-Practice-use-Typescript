import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { getMovieDetail } from '../api/FetchMovieData';

export default function Detail() {
    const router = useRouter();
    console.log(router);
    const { data, isLoading } = useQuery(
        ['movie', `movieDetail_${router.query.id}`],
        () => {
            getMovieDetail(router.query.id);
        },
    );
    console.log(data);

    return (
        <div>
            detail :{router.query.id} <h4>{router.query.title}</h4>
        </div>
    );
}
