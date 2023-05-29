import { FriendList } from 'components/FriendsList/FriendsList';
import { OurFriendsWrapper, Titel } from './Friends.styled';

export const Friends = () => {
  return (
    <OurFriendsWrapper>
      <Titel>Our friends</Titel>
      <FriendList />
    </OurFriendsWrapper>
  );
};
