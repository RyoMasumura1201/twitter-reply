import { Button } from '@chakra-ui/react';
import { FaTwitter } from 'react-icons/fa';

export const LoginButton: React.VFC = () => {
  return (
    <Button colorScheme='blue' leftIcon={<FaTwitter />}>
      ログイン
    </Button>
  );
};
