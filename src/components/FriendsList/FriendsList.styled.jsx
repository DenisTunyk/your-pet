import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 16px 12px;
`;

export const Titel = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  color: #000000;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 66px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
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
    row-gap: 20px;
  }
`;

export const ListItem = styled.li`
  width: 280px;
  height: 239px;
  background: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 40px;
`;
