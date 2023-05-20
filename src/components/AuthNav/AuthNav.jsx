import { AuthNavBts, List, PawIcon } from './AuthNav.styled';

const isAuth = true;
export const AuthNav = ({ handleLinkClick }) => {
  const handleClick = () => {
    if (handleLinkClick) {
      handleLinkClick();
    }
  };
  return (
    <>
      {!isAuth ? null : (
        <List>
          <AuthNavBts to="/register" onClick={handleClick}>
            Log IN <PawIcon />
          </AuthNavBts>
          <AuthNavBts to="/login" onClick={handleClick}>
            Registration
          </AuthNavBts>
        </List>
      )}
    </>
  );
};
