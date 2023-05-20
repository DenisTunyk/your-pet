import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px 12px;
  background-color: #fdf7f2;

  @media screen and (min-width: 1280px) {
    padding: 20px 16px 10px;
  }
`;
