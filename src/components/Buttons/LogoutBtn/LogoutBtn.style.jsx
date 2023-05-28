import styled from 'styled-components';

export const ButtonLogout = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  background-color: transparent;
  color: #888888;
  width: fit-content;
  margin-top: 13px;

  &:hover,
  &:focus {
    text-shadow: 2px 2px 4px #456a8e84;
    transform: scale(1.05);
  }
`;

export const LogoutIcon = styled.img`
  padding-right: 12px;
`;
