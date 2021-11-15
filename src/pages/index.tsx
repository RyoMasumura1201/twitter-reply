import { Box } from '@chakra-ui/react';
import { LoginButton } from '@/components/LoginButton';
import { Layout } from '@/components/Layout';
import { useSession } from 'next-auth/client';
import { LogoutButton } from '@/components/LogoutButton';

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
          <LogoutButton />
        </>
      )}
    </Layout>
  );
}
