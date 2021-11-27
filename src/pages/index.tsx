import { Box, Button, VStack, Center } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import LoginButton from '@/components/LoginButton';
import { Layout } from '@/components/Layout';
import { useSession } from 'next-auth/client';
import LogoutButton from '@/components/LogoutButton';
import Image from 'next/image';
import axios from 'axios';
import { SessionWithUserId, User } from 'type';
import React, { useState } from 'react';
import UserCard from '@/components/UserCard';

export default function Home() {
  const [session, loading]: [SessionWithUserId, boolean] = useSession();
  const [userName, setUserName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [conversationPartner, setConversationPartner] = useState<User[]>([]);

  const handleUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
    console.log(userName);
  };

  const handleOnClick = () => {
    axios
      .get(`/api/twitter/users/${userName}`)
      .then((res) => {
        setConversationPartner([...conversationPartner, res.data[0].data[0]]);
        setErrorMessage('');
        console.log('成功');
        console.log(conversationPartner);
      })
      .catch((e) => {
        setErrorMessage('指定のユーザーは見つかりませんでした');
        console.log(e);
      });
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
            <Text>ユーザーを検索</Text>
            <Input
              placeholder='ユーザー名を入力してください'
              size='md'
              width='60%'
              value={userName}
              onChange={handleUserName}
            />
            <Button onClick={handleOnClick} ml={5} colorScheme='teal' size='md'>
              検索
            </Button>
            <Text color='red.400'>{errorMessage}</Text>

            <Box mt='5'>
              <Center>
                <VStack>
                  {conversationPartner.map(({ id, name, username }) => (
                    <UserCard name={name} username={username} id={id} key={id} />
                  ))}
                </VStack>
              </Center>
            </Box>
          </Box>

          <LogoutButton />
        </Box>
      )}
    </Layout>
  );
}
