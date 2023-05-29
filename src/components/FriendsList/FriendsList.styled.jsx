import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 16px 12px;
`;

export const Title = styled.h2`
  font-weight: ;
  font-size: 24px;
  line-height: 1.375;
  color: ;
  margin-bottom: 24px;

  @media screen and () {
    font-size: 48px;
    margin-bottom: 40px;
  }

  @media screen and () {
    margin-bottom: 60px;
  }
`;

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  row-gap: 20px;

  @media screen and () {
    row-gap: 24px;
    column-gap: 32px;
  }

  @media screen and () {
    row-gap: 20px;
  }
`;
