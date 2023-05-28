import { List, Link, Item, Container } from './NoticesCategoriesNav.styled';

import { useDispatch } from 'react-redux';
import { updateCategory } from 'redux/pets/pets-slice';

import { useAuth } from 'hooks/useAutn';

export const NoticesCategoriesNav = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();

  return (
    <Container>
      <List>
        <Item>
          <Link
            to="/notices/sell"
            onClick={() => {
              dispatch(updateCategory('sell'));
            }}
          >
            sell
          </Link>
        </Item>

        <Item>
          <Link
            to="/notices/lost-found"
            onClick={() => {
              dispatch(updateCategory('lostFound'));
            }}
          >
            lost/found
          </Link>
        </Item>

        <Item>
          <Link
            to="/notices/for-free"
            onClick={() => {
              dispatch(updateCategory('inGoodHands'));
            }}
          >
            in good hands
          </Link>
        </Item>

        {isLoggedIn && (
          <Item>
            <Link
              to="/notices/favorite"
              onClick={() => {
                dispatch(updateCategory('favoriteAdds'));
              }}
            >
              favorite ads
            </Link>
          </Item>
        )}

        {isLoggedIn && (
          <Item>
            <Link
              to="/notices/own"
              onClick={() => {
                dispatch(updateCategory('myAds'));
              }}
            >
              my ads
            </Link>
          </Item>
        )}
      </List>
    </Container>
  );
};
