import { Button } from '@chakra-ui/react';
import { FaTwitter } from 'react-icons/fa';
import { signOut } from 'next-auth/client';

export const LogoutButton: React.VFC = () => {
  return (
    <Button colorScheme='blue' leftIcon={<FaTwitter />} onClick={() => signOut()}>
      ログアウト
    </Button>
  );
};
