import React from 'react';
import { useState } from 'react';
import { ReactComponent as BurgerSvg } from '../../images/icons/menu-hamburger.svg';

import css from './Burger.module.css';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';

export const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button className={css.burger} onClick={handleOpen}>
        <BurgerSvg alt="Menu" />
      </button>
      {isOpen ? <BurgerMenu isOpen={isOpen} handleClose={handleClose} /> : null}
    </>
  );
};
