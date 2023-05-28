import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 24px;
  }

  @media screen and (max-width: 1280px) {
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 30px;
  }
`;
