import { React } from 'react';
import css from './BurgerMenu.module.css';
import { ReactComponent as CrossSmallIcon } from '../../images/icons/cross-small.svg';
import { AuthNav } from 'components/AuthNav/AuthNav';
import Nav from 'components/Nav/Nav';
import { Logo } from 'components/Logo/Logo';

import { useMediaQuery } from 'react-responsive';

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
        <div className={css.wrapper}>
          <div className={css.menu}>
            <button className={css.btn} onClick={handleClose}>
              <CrossSmallIcon id="svg" className={css.crossSmallIcon} />
            </button>
            <Logo handleLinkClick={handleLinkClick} />

            <div className={css.backdrop_auth}>
              <Tablet>
                <AuthNav handleLinkClick={handleLinkClick} />
              </Tablet>
            </div>
            <div className={css.backdrop_nav}>
              <Nav handleLinkClick={handleLinkClick} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
