import { Auth0Provider } from '@auth0/auth0-react';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth0Provider
      domain="yuuniworks.us.auth0.com"
      clientId="9AlqzSS7ec7XzqheIAjxJqYjYwzO28ow"
      redirectUri="http://localhost:3000"
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
}

export default MyApp;
