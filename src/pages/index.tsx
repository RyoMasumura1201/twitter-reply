import { Box } from '@chakra-ui/react';
import { LoginButton } from '@/components/LoginButton';
import { Layout } from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <Box textAlign='center'>
        <LoginButton />
      </Box>
    </Layout>
  );
}
