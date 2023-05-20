import React from 'react';
import Logo from '../Logo/Logo';
// import css from './Header.module.css';
import Nav from 'components/Nav/Nav';
import { HeaderWrapper } from './Header.styled';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav />
    </HeaderWrapper>
  );
};
