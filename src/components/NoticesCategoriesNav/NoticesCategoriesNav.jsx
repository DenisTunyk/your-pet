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
            // petsSlice.actions = lost-found
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
            dispatch(updateCategory('lost/found'));
          }}
        >
          lost/found
        </Link>
      </Item>

      <Item>
        <Link
          to="/notices/for-free"
          onClick={() => {
            dispatch(updateCategory('in good hands'));
          }}
        >
          in good hands
        </Link>
      </Item>

      <Item>
        <Link
          to="/notices/favorite"
          onClick={() => {
            dispatch(updateCategory('favorite ads'));
          }}
        >
          favorite ads
        </Link>
      </Item>

      <Item>
        <Link
          to="/notices/own"
          onClick={() => {
            dispatch(updateCategory('my ads'));
          }}
        >
          my ads
        </Link>
      </Item>
    </List>
  );
};
