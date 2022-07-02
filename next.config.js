/** @type {import('next').NextConfig} */
const API_KEY = '10923b261ba94d897ac6b81148314a3f';

const BASE_PATH = 'https://api.themoviedb.org/3';

const nextConfig = {
    reactStrictMode: true,
    // async redirects() {
    //     return [
    //         {
    //             source: '/contact/:path*',
    //             destination: '/form/:path*',
    //             permanent: false,
    //         },
    //     ];
    // },
    async rewrites() {
        return [
            {
                source: '/api/movies',
                destination: `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`,
            },
            {
                source: '/api/movies/:id',
                destination: `${BASE_PATH}/movie/:id?api_key=${API_KEY}`,
            },
        ];
    },
};

module.exports = nextConfig;
