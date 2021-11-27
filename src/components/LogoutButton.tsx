import { Button } from '@chakra-ui/react';
import { FaTwitter } from 'react-icons/fa';
import { signOut } from 'next-auth/client';
import { memo } from 'react';

const LogoutButton: React.VFC = () => {
  return (
    <Button colorScheme='blue' leftIcon={<FaTwitter />} onClick={() => signOut()}>
      ログアウト
    </Button>
  );
};

export default memo(LogoutButton);
