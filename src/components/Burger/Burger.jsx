import React from 'react';
import { useState } from 'react';
import { ReactComponent as BurgerSvg } from '../../images/icons/menu-hamburger.svg';

import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';
import { BurgerBtn } from './Burger.styled';

function showPopup() {
  // .. логика отображения попапа
  document.body.style.overflow = 'hidden';
}

function hidePopup() {
  // .. логика скрытия попапа
  document.body.style.overflow = 'auto';
}
export const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    showPopup();
  };

  const handleClose = () => {
    setIsOpen(false);
    hidePopup();
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
