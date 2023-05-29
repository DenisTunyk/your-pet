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
      <List>
        {data.map(friend => {
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
            <FriendListItem
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
    </div>
  );
};
