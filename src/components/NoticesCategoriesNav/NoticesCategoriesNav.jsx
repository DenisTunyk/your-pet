import { List, Link, Item } from './NoticesCategoriesNav.styled';

import { useDispatch } from 'react-redux';
import { updateCategory } from 'redux/pets/pets-slice';

import { ReactComponent as PlusIcon } from '../../assets/icon/plus.svg';
import { AddButton } from '../PetsData/PetsData.styled';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const NoticesCategoriesNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

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

      <AddButton onClick={() => navigate('/add-pet')}>
        Add pet <PlusIcon stroke="white" />
      </AddButton>
    </List>
  );
};
