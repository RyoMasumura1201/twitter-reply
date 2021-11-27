import { Box, Button, HStack, VStack, Center } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { memo } from 'react';
import { FaTwitter } from 'react-icons/fa';
import { User } from 'type';
const UserCard: React.VFC<User> = (props) => {
  const { id, name, username } = props;
  return (
    <HStack spacing='5' margin='0 auto'>
      <FaTwitter color='navy' size='30' />
      <VStack spacing='0.5'>
        <Text fontWeight='medium' fontSize='large'>
          {name}
        </Text>
        <Text>@{username}</Text>
      </VStack>
    </HStack>
  );
};

export default memo(UserCard);
