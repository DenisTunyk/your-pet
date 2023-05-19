import PropTypes from 'prop-types';
import { List, Btn } from './NoticesCategoriesNav';

const filters = [
  'sell',
  'lost/found',
  'in good hands',
  'favorite ads',
  'my ads',
];

const NoticesCategoriesNav = ({ user }) => {
  const items = filters.map((filter, ind) => {
    if (!user && filter === 'favorite ads') {
      return null;
    }

    if (!user && filter === 'my ads') {
      return null;
    }

    return (
      <li key={ind}>
        <Btn>{filter}</Btn>
      </li>
    );
  });
  return <List>{items}</List>;
};

NoticesCategoriesNav.propTypes = {
  user: PropTypes.string.isRequired,
};

export default NoticesCategoriesNav;