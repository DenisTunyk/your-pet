import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 44px;
  margin-top: 44px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 46px;
    margin-top: 80px;
  }
`;
export const Title = styled.h1`
  color: #111111;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  margin: 40px 0px 24px 0px;
`;
export const Wrapper = styled.div`
  /* display: grid; */
  /* grid-template-columns: repeat(1, 320px); */
  /* margin-top: 50px; */
`;
