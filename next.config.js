/** @type {import('next').NextConfig} */
// const API_KEY = process.env.API_KEY;

// const BASE_PATH = 'https://api.themoviedb.org/3';

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
        ];
    },
};

module.exports = nextConfig;
