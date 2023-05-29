import { useState, useEffect } from 'react';
import { getFriends } from 'api/friends';
import { FriendsListItem } from 'components/FriendsListItem/FriendsListItem';
import { Container, List, Title } from './FriendsList.styled';

export const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const result = await getFriends();
        setFriends([...result.data]);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchFriends();
  }, []);

  return (
    <Container>
      <Title>Our friends</Title>
      <List>
        {friends.map(friend => {
          const {
            _id: id,
            email,
            address,
            url,
            addressUrl,
            imageUrl,
            phone,
            title,
            workDays,
          } = friend;

          return (
            <FriendsListItem
              key={id}
              email={email}
              address={address}
              url={url}
              addressUrl={addressUrl}
              imageUrl={imageUrl}
              phone={phone}
              title={title}
              workDays={workDays}
            />
          );
        })}
      </List>
    </Container>
  );
};
