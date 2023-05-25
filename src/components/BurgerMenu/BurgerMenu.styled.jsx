import styled from 'styled-components';
import { ReactComponent as CrossSmallIcon } from '../../images/icons/cross-small.svg';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;

  /* @media screen and (min-width: 767px) {
    margin-left: 24px;
  } */
`;

export const Menu = styled.div`
  position: fixed;
  overflow: hidden;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  background-color: #fdf7f2;
  border: 1px solid #000;
  padding: 24px 32px;
  /* @media screen and (min-width: 767px) {
    margin-left: 24px;
  } */
`;

export const Btn = styled.button`
  position: fixed;
  right: 35px;
  /* top: 15px; */
  width: 25px;
  height: 25px;
  opacity: 1;
  background: none;
  border: none;
`;

export const CrossIcon = styled(CrossSmallIcon)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  stroke: #ffc107;
  stroke-width: 1.5px;
  stroke-linecap: round;
  stroke-linejoin: round;

  border-radius: 50%;
  transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const BackdropAuth = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 40px;

  /* @media screen and (min-width: 767px) {
    margin-left: 24px;
  } */

  &:first-child {
    margin-bottom: 12px;
  }

  &:last-child {
    margin-left: 0px;
  }
`;

export const BackdropNav = styled.div`
  margin-top: 0px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: 500;
  font-size: 32px;
  line-height: 44px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
`;
