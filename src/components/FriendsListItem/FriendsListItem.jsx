import { Container } from './FriendsListItem.styled';

export const FriendListItem = ({
  friend: {
    id,
    title,
    url,
    imageUrl,
    addressUrl,
    address,
    workDays,
    phone,
    email,
  },
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
