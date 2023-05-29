import { FriendList } from 'components/FriendsList/FriendsList';
import { Container, OurFriendsWrapper, Titel } from './Friends.styled';

export const Friends = () => {
  return (
    <OurFriendsWrapper>
      <Container>
        <Titel>Our friends</Titel>
        <FriendList />
      </Container>
    </OurFriendsWrapper>
  );
};
