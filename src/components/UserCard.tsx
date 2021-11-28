import { VStack } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { memo } from 'react';
import { User } from 'type';
import axios from 'axios';
const UserCard: React.VFC<User> = (props) => {
  const { id, name, username } = props;
  const handleSearchTweets = () => {
    axios
      .get(`/api/twitter/likedTweets/${id}`)
      .then((res) => {
        console.log('成功した');
      })
      .catch((e) => {
        console.log('失敗した');
        console.log(e);
      });
  };
  return (
    <VStack
      spacing='0.5'
      onClick={handleSearchTweets}
      style={{ cursor: 'pointer' }}
      className='hover'
    >
      <Text fontWeight='medium' fontSize='large'>
        {name}
      </Text>
      <Text>@{username}</Text>
    </VStack>
  );
};

export default memo(UserCard);
