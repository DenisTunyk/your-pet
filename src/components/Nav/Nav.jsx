import React from 'react';
import { NavCss, LinkNav } from './Nav.styled';

const Nav = ({ handleLinkClick }) => {
  const handleClick = () => {
    if (handleLinkClick) {
      handleLinkClick();
    }
  };
  return (
    <NavCss>
      <LinkNav to="/news" onClick={handleClick}>
        News
      </LinkNav>
      <LinkNav to="/notices" onClick={handleClick}>
        Find pet
      </LinkNav>
      <LinkNav to="/friends" onClick={handleClick}>
        Our friends
      </LinkNav>
    </NavCss>
  );
};

export default Nav;
