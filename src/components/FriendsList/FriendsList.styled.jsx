import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 16px 12px;

  @media screen and (min-width: 768px) {
    margin: 0 auto;
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    margin: 0 auto;
    width: 1280px;
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.375;
  color: #000000;
  margin-top: 40px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 80px;
    font-size: 48px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 80px;
    margin-bottom: 60px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  row-gap: 20px;

  @media screen and (min-width: 768px) {
    row-gap: 24px;
    column-gap: 32px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    row-gap: 20px;
  }
`;
