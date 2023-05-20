import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavCss = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 40px;
  @media screen and (min-width: 1280px) {
    margin-right: auto;
    margin-left: 159px;
  }
`;

export const LinkNav = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  transition: color 250ms ease-in-out;

  &:hover,
  &:focus,
  &:active {
    color: yellow;
  }

  &:not(:last-child) {
    margin-right: 20px;
  }
`;
