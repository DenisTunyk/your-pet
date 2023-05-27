import { List, Link, Item } from './NoticesCategoriesNav.styled';

import { useDispatch } from 'react-redux';
import { updateCategory } from 'redux/pets/pets-slice';

export const NoticesCategoriesNav = () => {
  const dispatch = useDispatch();

  return (
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
    </List>
  );
};
