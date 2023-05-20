import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavCss = styled.div`
  position: absolute;
  top: 210px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  width: 100%;

  @media screen and (min-width: 768px) {
    top: 160px;
    left: 0;

    gap: 60px;
  }

  @media screen and (min-width: 1280px) {
    position: static;
    flex-direction: row;
    gap: 40px;
  }
`;

export const LinkNav = styled(NavLink)`
  text-decoration: none;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  color: #111111;

  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #ffc107;
  }

  &.active {
    font-family: 'Manrope';
    color: #ffc107;
  }

  @media screen and (min-width: 768px) {
    font-family: 'Manrope';
    font-weight: 500;
    font-size: 48px;

    &.active {
      color: #ffc107;
    }
  }

  @media screen and (min-width: 1280px) {
    padding-top: 10px;
    padding-bottom: 10px;

    font-size: 20px;
  }
`;
