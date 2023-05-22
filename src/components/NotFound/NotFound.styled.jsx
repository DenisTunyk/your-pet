import styled from 'styled-components';
import { ReactComponent as Paw } from '../../images/icons/pawprint.svg';

import NFbgImgMobileX1 from 'images/notFound/notFound-mobile@2x.png';
import NFbgImgTabletX1 from 'images/notFound/notFound-tablet@2x.png';
import NFbgImgDesktopX1 from 'images/notFound/notFound-desktop@2x.png';

import PawBgImgDesctop from 'images/bg_desctop1x.png';
import PawBgImgTablet from 'images/bg_tablet1x.png';
import PawBgImgMobile from 'images/bg_mobile1x.png';

export const NFDivWrap = styled.div`
  max-width: 767px;
  height: 512px;
  padding-top: 71px;
  padding-bottom: 100px;
  margin-left: auto;
  margin-right: auto;

  background-image: url(${PawBgImgMobile});
  background-repeat: no-repeat;
  background-position: top -200px left 100px;

  @media (min-width: 768px) {
    background-image: url(${PawBgImgTablet});
    background-position: bottom -150px right 100px;
    max-width: 1280px;
    padding-bottom: 204px;
  }
  @media (min-width: 1280px) {
    background-image: url(${PawBgImgDesctop});
    background-position: bottom -150px right 100px;
  }
`;

export const NFText = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 130%;
  text-align: center;
  letter-spacing: -0.02em;
  color: #000000;

  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const NFImg = styled.div`
  width: 292px;
  height: 170px;
  margin-bottom: 14px;
  margin-left: auto;
  margin-right: auto;
  text-align:center;
  margin-top:100px;

  background-image: url(${NFbgImgMobileX1});
  background-repeat: no-repeat;
  background-size:contain;
   @media (min-width: 768px) {
    background-image: url(${NFbgImgTabletX1});
    width: 498px;
    height: 327px;
    margin-bottom: 32px;
  }
  @media (min-width: 1280px) {
    background-image: url(${NFbgImgDesktopX1});
  }
`;


export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;
  padding: 9px 52px;
  font-family: 'Manrope';
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.04em;
  color: #ffc107;
  text-decoration: none;
  border-radius: 40px;
  border: 2px solid;
  border-color: var(--color-blue);
  cursor: pointer;

  margin:auto;
  

  background: var(--color-blue);
  color: var(--color-text-btn);

  span {
    margin-right: 12px;
  }

  svg {
    fill: var(--color-text-btn);
  }

  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color:var(--color-blue);
    background-color: white;
  }
  &:hover svg,
  &:focus svg {
    fill: var(--color-blue);
  }
`;

export const PawIcon = styled(Paw)`
  fill: var(--color-blue);

  transition: fill 350ms cubic-bezier(0.4, 0, 0.2, 1);
`;

