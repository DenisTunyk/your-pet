import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    margin-top: 24px;
  }

  @media screen and (max-width: 1280px) {
    padding-left: 16px;
    padding-right: 16px;
    margin-top: 20px;
  }
`;
export const LoaderWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100vh;
  width: 100vh;
`;
