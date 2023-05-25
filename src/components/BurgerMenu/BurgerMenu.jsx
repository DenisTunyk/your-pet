import { React } from 'react';
import { AuthNav } from 'components/AuthNav/AuthNav';
import Nav from 'components/Nav/Nav';
import { Logo } from 'components/Logo/Logo';

import { useMediaQuery } from 'react-responsive';
import {
  BackdropAuth,
  BackdropNav,
  Btn,
  CrossIcon,
  Menu,
  Wrapper,
} from './BurgerMenu.styled';

const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 320, maxWidth: 766 });
  return isTablet ? children : null;
};
export const BurgerMenu = ({ isOpen, handleClose }) => {
  const handleLinkClick = () => {
    handleClose();
  };

  return (
    <>
      {isOpen && (
        <Wrapper>
          <Menu>
            <Btn onClick={handleClose}>
              <CrossIcon />
            </Btn>
            <Logo handleLinkClick={handleLinkClick} />

            <BackdropAuth>
              <Tablet>
                <AuthNav handleLinkClick={handleLinkClick} />
              </Tablet>
            </BackdropAuth>
            <BackdropNav>
              <Nav handleLinkClick={handleLinkClick} />
            </BackdropNav>
          </Menu>
        </Wrapper>
      )}
    </>
  );
};
