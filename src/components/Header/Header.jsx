import React from 'react';
import Logo from '../Logo/Logo';
import Nav from 'components/Nav/Nav';
import { HeaderWrapper } from './Header.styled';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav />
      <AuthNav />
    </HeaderWrapper>
  );
};
