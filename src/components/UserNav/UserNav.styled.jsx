import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  padding: 12px 0;

  font-family: 'Manrope-SemiBold';
  font-size: 16px;
  color: #ffc107;

  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #fafa5e;
  }

  & svg {
    stroke: #ffc107;

    transition: stroke 350ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover svg,
  &:focus svg {
    stroke: #fafa5e;
  }
`;
