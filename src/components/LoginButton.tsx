import { Button } from '@chakra-ui/react';
import { FaTwitter } from 'react-icons/fa';
import { signIn } from 'next-auth/client';
import { memo } from 'react';

const LoginButton: React.VFC = () => {
  return (
    <Button colorScheme='blue' leftIcon={<FaTwitter />} onClick={() => signIn()}>
      ログイン
    </Button>
  );
};

export default memo(LoginButton);
