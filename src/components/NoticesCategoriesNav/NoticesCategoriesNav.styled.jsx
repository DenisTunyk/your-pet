import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled('ul')`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const Item = styled('li')``;

export const Link = styled(NavLink)`
  display: block;
  padding: 8px 16px;
  background: #cce4fb;
  border-radius: 40px;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.73;
  color: #54adff;
  letter-spacing: 0.04em;

  &.active,
  &:hover {
    color: #fef9f9;
    background-color: #54adff;
  }
`;
