import { Box } from '@chakra-ui/react';
import { LoginButton } from '@/components/LoginButton';
import { Layout } from '@/components/Layout';
import { useSession } from 'next-auth/client';
import { LogoutButton } from '@/components/LogoutButton';
import Image from 'next/image';
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
          Signed in as{' '}
          <Image src={session.user.image ?? ''} width='50px' height='50px' alt='userimage' />
          {session.user.name} <br />
          <LogoutButton />
        </>
      )}
    </Layout>
  );
}
