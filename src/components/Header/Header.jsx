import React from 'react';
import Logo from '../Logo/Logo';
// import Nav from 'components/Nav/Nav';
import { HeaderWrapper } from './Header.styled';
// import { AuthNav } from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <Navigation />
      {/* <Nav />
      <AuthNav /> */}
    </HeaderWrapper>
  );
};
