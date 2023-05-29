import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    column-gap: 32px;
    row-gap: 32px;
  }
`;

export const Item = styled.li`
  width: 336px;
  height: 275px;
  margin-bottom: 12px;
  background-color: white;
  border-radius: 20px;
  padding: 12px 5px 12px;

  box-shadow: 7px 4px 14px 0px #31150412;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    padding: 16px 5px 16px;
    border-radius: 40px;
    flex-basis: calc((100% - 32px) / 2);
  }

  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 64px) / 3);
  }
`;
