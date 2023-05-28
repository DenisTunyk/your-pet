import React from 'react';
import { NavCss, LinkNav } from './Nav.styled';
import { useDispatch } from 'react-redux';
import { updateCategory } from 'redux/pets/pets-slice';

const Nav = ({ handleLinkClick }) => {
  const dispatch = useDispatch();

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

      <LinkNav
        to="/notices"
        onClick={() => {
          dispatch(updateCategory('sell'));
          handleClick();
        }}
      >
        Find pet
      </LinkNav>
      <LinkNav to="/friends" onClick={handleClick}>
        Our friends
      </LinkNav>
    </NavCss>
  );
};

export default Nav;
