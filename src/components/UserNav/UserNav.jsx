import PropTypes from 'prop-types';
import { ReactComponent as UserIcon } from '../../images/icons/user-1.svg';
import { Wrapper } from './UserNav.styled';

export const UserNav = ({ userName, handleLinkClick }) => {
  const handleClick = () => {
    if (handleLinkClick) {
      handleLinkClick();
    }
  };
  return (
    <Wrapper to="/profile" onClick={handleClick}>
      <UserIcon />
      {userName}
    </Wrapper>
  );
};

UserNav.propTypes = {
  userName: PropTypes.string,
  showName: PropTypes.bool,
  setIsOpen: PropTypes.func,
};
