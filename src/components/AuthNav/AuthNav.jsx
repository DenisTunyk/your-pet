import { UserNav } from 'components/UserNav/UserNav';
import { AuthNavBts, Box, PawIcon } from './AuthNav.styled';
import { useAuth } from '../../hooks/useAutn';
export const AuthNav = ({ handleLinkClick }) => {
  const { isLoggedIn } = useAuth();
  const { user } = useAuth();
  const handleClick = () => {
    if (handleLinkClick) {
      handleLinkClick();
    }
  };
  return (
    <>
      {isLoggedIn ? (
        <UserNav userName={user.name} handleLinkClick={handleLinkClick} />
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
