import { AppProps } from 'next/app';
import { Authenticator } from 'src/features/auth/Authenticator';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Authenticator>
      <Component {...pageProps} />
    </Authenticator>
  );
}

export default MyApp;
