import { FriendListItem } from 'components/FriendsListItem/FriendsListItem';
import { List, ListItem, Titel } from './FriendsList.styled';

export const FriendList = () => {
  return (
    <div>
      <Titel>Our friends</Titel>
      <List>
        {friends.map(friend => (
          <ListItem key={friend.id}>
            <FriendListItem friend={friend} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
