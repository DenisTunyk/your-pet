import { UserNav } from 'components/UserNav/UserNav';
import { AuthNavBts, Box, PawIcon } from './AuthNav.styled';
import { useAuth } from '../../hooks/useAuth';
import { selectUser } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

export const AuthNav = ({ handleLinkClick }) => {
  const { isLoggedIn } = useAuth();
  const { name } = useSelector(selectUser);
  const { email } = useSelector(selectUser);

  function splitResult() {
    if (email) {
      return email.split('@')[0];
    }
  }

  const check = name ?? splitResult();

  const handleClick = () => {
    if (handleLinkClick) {
      handleLinkClick();
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <UserNav userName={check} handleLinkClick={handleLinkClick} />
      ) : (
        <Box>
          <AuthNavBts to="/login" onClick={handleClick}>
            Log IN <PawIcon />
          </AuthNavBts>
          <AuthNavBts to="/registration" onClick={handleClick}>
            Registration
          </AuthNavBts>
        </Box>
      )}
    </>
  );
};
