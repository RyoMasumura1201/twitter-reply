import { VStack } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { memo } from 'react';
import { User } from 'type';
const UserCard: React.VFC<User> = (props) => {
  const { id, name, username } = props;
  return (
    <VStack spacing='0.5'>
      <Text fontWeight='medium' fontSize='large'>
        {name}
      </Text>
      <Text>@{username}</Text>
    </VStack>
  );
};

export default memo(UserCard);
