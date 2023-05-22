import { React } from 'react';
import css from './Backdrop.module.css';
// import { useSelector } from 'react-redux';

import { ReactComponent as CrossSmallIcon } from '../../images/icons/cross-small.svg';
import Logo from 'components/Logo/Logo';
import { AuthNav } from 'components/AuthNav/AuthNav';
import Nav from 'components/Nav/Nav';

import { useMediaQuery } from 'react-responsive';

const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 320, maxWidth: 766 });
  return isTablet ? children : null;
};
const BackdropMenu = ({ isOpen, handleClose }) => {
  const handleLinkClick = () => {
    handleClose();
  };

  return (
    <>
      {isOpen && (
        <div className={css.backdrop}>
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

export default BackdropMenu;
