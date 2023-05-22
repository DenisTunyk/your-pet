import React from 'react';
// import Logo from '../Logo/Logo';
import { HeaderWrapper } from './Header.styled';
import { Navigation } from 'components/Navigation/Navigation';
import { Logo } from 'components/Logo/Logo';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <Navigation />
    </HeaderWrapper>
  );
};
