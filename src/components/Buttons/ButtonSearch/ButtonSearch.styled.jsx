import styled from 'styled-components';

export const ButtonIcon = styled.button`
  position: absolute;
  top: 0.4em;
  right: 0.4em;
  width: 30px;
  height: 30px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  transition: color 250ms linear;
  cursor: pointer;
  color: '#757575';
  svg {
    fill: #757575;
  }
  transition: transform 250ms ease-in-out, border 250ms ease-in-out;

  svg:hover {
    color: green;
  }

  &:focus {
    outline: none;
  }

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;
