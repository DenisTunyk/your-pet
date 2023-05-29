import { FriendListItem } from 'components/FriendsListItem/FriendsListItem';
import { Item, List } from './FriendsList.styled';
import { useState } from 'react';
import { getFriends } from 'api/friends';
import { useEffect } from 'react';

export const FriendList = () => {
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
    <div>
      <List>
        {friends.map(item => (
          <Item key={item._id}>
            <FriendListItem {...item} />
          </Item>
        ))}
      </List>
    </div>
  );
};
