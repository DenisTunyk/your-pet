import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    margin-top: 24px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;
