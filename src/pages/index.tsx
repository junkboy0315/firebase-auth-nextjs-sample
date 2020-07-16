import Head from 'next/head';
import { LoginButton } from 'src/components/LoginButton';
import { LogoutButon } from 'src/components/LogoutButton';
import { Profile } from 'src/components/Profile';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LoginButton />
      <LogoutButon />
      <Profile />
    </div>
  );
}
