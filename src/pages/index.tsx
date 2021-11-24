import { Box, Button } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { LoginButton } from '@/components/LoginButton';
import { Layout } from '@/components/Layout';
import { useSession } from 'next-auth/client';
import { LogoutButton } from '@/components/LogoutButton';
import Image from 'next/image';
import axios from 'axios';
import { SessionWithUserId } from 'type';

export default function Home() {
  const [session, loading]: [SessionWithUserId, boolean] = useSession();

  const handleOnClick = () => {
    axios
      .get('/api/tweets')
      .then((res) => {
        console.log('成功');
        // console.log(res);
      })
      .catch((e) => {
        console.log('失敗');
        console.log(e);
      });
    console.log(session.user);
  };

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
          <Box marginBottom='5'>
            <Image
              src={session.user.image ?? ''}
              width='50px'
              height='50px'
              alt='userimage'
              className='user-image'
            />
            <Text>{session.user.name}</Text>
          </Box>

          <Box marginBottom='5'>
            <Text>会話したユーザーを検索</Text>
            <Input placeholder='ユーザー名を入力してください' size='md' width='60%' />
            <Button onClick={handleOnClick} ml={5} colorScheme='teal' size='md'>
              検索
            </Button>
          </Box>

          <LogoutButton />
        </Box>
      )}
    </Layout>
  );
}
