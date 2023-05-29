import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 320px;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fdf7f2;

  @media (min-width: 768px) {
    width: 768px;
    padding: 0 33px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 0 16px;
  }
`;
