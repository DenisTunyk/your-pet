import React from 'react';
import { NavCss, LinkNav } from './Nav.styled';

const Nav = () => {
  return (
    <NavCss>
      <LinkNav to="/news">News</LinkNav>
      <LinkNav to="/notices">Find pet</LinkNav>
      <LinkNav to="/friends">Our friends</LinkNav>
    </NavCss>
  );
};

export default Nav;
