import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import theme from '../src/theme';
import Layout from '../src/components/layout';
import '../styles/style.css';
import { Suspense, useState, useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        {pageLoaded ? <Component {...pageProps} /> : <div>Loading...</div>}
      </Layout>
    </ChakraProvider>
  );
}
