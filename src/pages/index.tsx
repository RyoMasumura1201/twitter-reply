import { Box } from '@chakra-ui/react';
import { LoginButton } from '@/components/LoginButton';
import { Layout } from '@/components/Layout';
import { signOut, useSession } from 'next-auth/client';

export default function Home() {
  const [session, loading] = useSession();

  return (
    <Layout>
      {!session && (
        <>
          {loading ? (
            <>Loading ...</>
          ) : (
            <>
              Not signed in <br />
              <LoginButton />
            </>
          )}
        </>
      )}
      {session && (
        <>
          Signed in as <img src={session.user.image ?? ''} width='50px' />
          {session.user.name} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </Layout>
  );
}
