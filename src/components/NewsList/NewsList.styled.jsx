import styled from 'styled-components';
export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 44px;
  margin-top: 44px;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 384px);
    margin-top: 80px;
  }
  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(3, 384px);
    grid-template-columns: repeat(3, 425px);
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
  @media (min-width: 768px) {
    font-size: 48px;
    margin: 80px 0px 40px 0px;
  }
  @media (min-width: 1280px) {
    margin: 80px 0px 60px 0px;
  }
`;
export const Wrapper = styled.div``;
export const Input = styled.input`
  display: block;
  margin-right: auto;
  margin-left: auto;
  height: 44px;
  width: 100%;
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
  @media (min-width: 768px) {
    width: 608px;
  }
`;
export const Form = styled.form`
  position: relative;
  margin: 0 auto;
  width: 280px;
  @media (min-width: 768px) {
    width: 608px;
  }
`;
