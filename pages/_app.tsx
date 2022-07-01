import { AppProps } from 'next/app';
import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import Layout from '../components/Layout';
import '../styles/globals.css';
import { ReactQueryDevtools } from 'react-query/devtools';

declare module 'react-query/types/react/QueryClientProvider' {
    interface QueryClientProviderProps {
        children?: React.ReactNode;
    }
}

declare module 'react-query/types/react/Hydrate' {
    interface HydrateProps {
        children?: React.ReactNode;
    }
}

export default function MyApp({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(() => new QueryClient());
    console.log(queryClient);

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Hydrate state={pageProps.dehydratedState}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </Hydrate>
                <ReactQueryDevtools
                    initialIsOpen={false}
                    position='bottom-right'
                />
            </QueryClientProvider>
        </>
    );
}
