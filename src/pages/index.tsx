import { Box } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';
import { LoginButton } from '@/components/LoginButton';
import { Layout } from '@/components/Layout';
import { useSession } from 'next-auth/client';
import { LogoutButton } from '@/components/LogoutButton';
import Image from 'next/image';
export default function Home() {
  const [session, loading] = useSession();

  return (
    <Layout>
      <Box textAlign='center'>
        {!session && (
          <>
            <Text marginBottom='30'>あなたとユーザーとの会話を検索できます</Text>
            {loading ? (
              <Spinner />
            ) : (
              <>
                <LoginButton />
              </>
            )}
          </>
        )}
      </Box>
      {session && (
        <Box textAlign='center'>
          <Image
            src={session.user.image ?? ''}
            width='50px'
            height='50px'
            alt='userimage'
            className='user-image'
          />
          <Text>{session.user.name}</Text>
          <LogoutButton />
        </Box>
      )}
    </Layout>
  );
}
