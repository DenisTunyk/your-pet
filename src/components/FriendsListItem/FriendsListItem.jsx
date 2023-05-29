import { Container } from './FriendsListItem.styled';

export const FriendListItem = ({
  address,
  addressUrl,
  email,
  imageUrl,
  phone,
  title,
  url,
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
