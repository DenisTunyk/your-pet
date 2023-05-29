import { Container } from './FriendsListItem.styled';

export const FriendListItem = ({
  email,
  address,
  url,
  addressUrl,
  imageUrl,
  phone,
  title,
  workDays,
}) => {
  return (
    <Container>
      <p>{title}</p>
      <p>{url}</p>
      <p>{phone}</p>
      <p>{email}</p>
      <p>{address}</p>
    </Container>
  );
};
