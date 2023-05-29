import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 40px;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    /* max-width: calc(100vw - 96px); */
    /* grid-template-columns: repeat(auto-fill, minmax(769px, 1fr)); */
    grid-gap: 31px;
  }
  @media (min-width: 1280px) {
    max-width: calc(100vw - 96px);
    /* grid-template-columns: repeat(auto-fill, minmax(769px, 1fr)); */
    grid-gap: 31px;
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
  overflow: hidden;
`;
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
