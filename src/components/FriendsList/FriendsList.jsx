import { FriendListItem } from 'components/FriendsListItem/FriendsListItem';
import { List, ListItem, Titel } from './FriendsList.styled';
import { useState } from 'react';
import { getFriends } from 'api/friends';
import { useEffect } from 'react';

export const FriendList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const result = await getFriends();
        setData([...result.data]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFriends();
  }, []);

  return (
    <div>
      <Titel>Our friends</Titel>
      <List>
        {data.map(friend => (
          <ListItem key={friend._id}>
            <FriendListItem friend={friend} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
