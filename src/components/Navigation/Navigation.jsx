import React from 'react';
import Nav from 'components/Nav/Nav';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Burger } from 'components/Burger/Burger';
import { useMediaQuery } from 'react-responsive';
// ==========
import { useAuth } from '../../hooks/useAuth';
import { UserNav } from 'components/UserNav/UserNav';
import { Box } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/auth-selectors';
// =================

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 767, maxWidth: 1279 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 765 });
  return isMobile ? children : null;
};

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  const { name } = useSelector(selectUser);
  const { email } = useSelector(selectUser);
  function splitResult() {
    if (email) {
      return email.split('@')[0];
    }
  }
  const check = name ?? splitResult();
  return (
    <>
      <Desktop>
        <Nav />
        {isLoggedIn ? <UserNav userName={check} /> : <AuthNav />}
      </Desktop>
      <Tablet>
        <Box>{isLoggedIn ? <UserNav userName={check} /> : <AuthNav />}</Box>

        <Burger />
      </Tablet>
      <Mobile>
        <Burger />
      </Mobile>
    </>
  );
};
