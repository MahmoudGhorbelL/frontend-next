import 'bootstrap/dist/css/bootstrap.css';
import '/public/assets/css/style.css';
import '/public/assets/css/font-awesome.min.css';
import '/public/assets/css/responsive.css';
import { Inter } from 'next/font/google';
import { useEffect } from 'react';
import AuthProvider from '@/providers/AuthProvider';
import CartsProvider from '@/providers/CartsProvider';

const inter = Inter({ subsets: ['latin'] });

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" href="/assets/images/favicon.png" type="image/gif" />
        <title>Bostorek</title>
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <CartsProvider>
            <Component {...pageProps} />
          </CartsProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

export default MyApp;
