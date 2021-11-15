import { Button } from '@chakra-ui/react';
import { FaTwitter } from 'react-icons/fa';
import { signIn } from 'next-auth/client';

export const LoginButton: React.VFC = () => {
  return (
    <Button colorScheme='blue' leftIcon={<FaTwitter />} onClick={() => signIn()}>
      ログイン
    </Button>
  );
};
