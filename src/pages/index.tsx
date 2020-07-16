import Head from 'next/head';
import { LoginButton } from 'src/components/LoginButton';
import { LogoutButton } from 'src/components/LogoutButton';
import { Profile } from 'src/components/Profile';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LoginButton />
      <LogoutButton />
      <Profile />
    </div>
  );
}
