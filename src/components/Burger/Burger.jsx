import React from 'react';
import { useState } from 'react';
import { ReactComponent as BurgerSvg } from '../../images/icons/menu-hamburger.svg';

import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';
import { BurgerBtn } from './Burger.styled';

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
      <BurgerBtn onClick={handleOpen}>
        <BurgerSvg alt="Menu" />
      </BurgerBtn>

      {isOpen ? <BurgerMenu isOpen={isOpen} handleClose={handleClose} /> : null}
    </>
  );
};
