import styled from 'styled-components';

export const OurFriendsWrapper = styled('div')`
  padding-top: 40px;
  padding-bottom: 100px;

  @media screen and (min-width: 768px) {
    padding-top: 80px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 80px;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;

  @media screen and (min-width: 480px) {
    max-width: 320px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export const Titel = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  color: #000000;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 66px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 60px;
  }
`;
