import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  padding: 12px 0;

  font-family: 'Manrope';
  font-size: 16px;
  color: #ffc107;
  transition: 1s;

  &:hover,
  &:focus {
    color: #ffc107;
    transform: scale(1.2);
  }

  & svg {
    stroke: #ffc107;
    transition: 1s;
  }

  &:hover svg,
  &:focus svg {
    stroke: #ffc107;
    transform: scale(1.2);
  }
`;
