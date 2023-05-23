import { AuthNavBts, Box, PawIcon } from './AuthNav.styled';

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
