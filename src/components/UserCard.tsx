import { VStack, HStack } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';
import { memo, useState } from 'react';
import { User } from 'type';
import axios from 'axios';
import Image from 'next/image';
const UserCard: React.VFC<Readonly<User>> = (props) => {
  const { id, name, username, profile_image_url } = props;
  const [isLoading, setIsLoading] = useState(false);
  const handleSearchTweets = () => {
    setIsLoading(true);
    axios
      .get(`/api/twitter/likedTweets/${id}`)
      .then((res) => {
        console.log('成功した');
      })
      .catch((e) => {
        console.log('失敗した');
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <HStack
          onClick={handleSearchTweets}
          style={{ cursor: 'pointer' }}
          className='hover'
          spacing='5'
        >
          <Image
            src={profile_image_url}
            width='50px'
            height='50px'
            alt='userimage'
            className='user-image'
          />
          <VStack spacing='0.5'>
            <Text fontWeight='medium' fontSize='large'>
              {name}
            </Text>
            <Text>@{username}</Text>
          </VStack>
        </HStack>
      )}
    </>
  );
};

export default memo(UserCard);
