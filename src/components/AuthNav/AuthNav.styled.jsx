import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Paw } from '../../images/icons/pawprint.svg';

export const AuthNavBts = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  min-width: 165px;
  max-width: 165px;
  min-height: 40px;
  max-height: 40px;
  padding: 8px;

  font-family: 'Manrope';
  font-weight: 700;
  font-size: 16px;
  color: #ffc107;
  text-decoration: none;
  background-color: transparent;
  border: 2px solid #ffc107;
  border-radius: 40px;

  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #fef9f9;
    background-color: #ffc107;
  }
  &:hover svg,
  &:focus svg {
    fill: #fef9f9;
  }
`;

export const PawIcon = styled(Paw)`
  fill: #ffc107;

  transition: fill 350ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12 px;

  @media screen and (max-width: 767px) {
    width: 100%;
    gap: 12px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }
`;
