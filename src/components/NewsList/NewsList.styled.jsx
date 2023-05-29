import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 44px;
  margin-top: 44px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 320px);
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
export const Input = styled.input`
  display: block;
  margin-right: auto;
  margin-left: auto;
  height: 44px;
  width: 280px;
  box-shadow: rgba(136, 198, 253, 0.19) 3px 8px 14px;
  border-radius: 40px;
  border: 1px solid transparent;
  padding: 8px 20px;
  box-sizing: border-box;
  outline: none;

  &::placeholder {
    font-size: 14px;
    color: rgba(136, 136, 136, 1);
  }
`;
