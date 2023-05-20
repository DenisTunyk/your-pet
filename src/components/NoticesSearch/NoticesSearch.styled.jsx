import styled from 'styled-components';

export const Form = styled.form`
  height: 44px;

  background: #fff;

  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 24px;

  justify-content: center;
  align-items: center;
  display: flex;
  overflow: hidden;
  padding-left: 20px;

  @media screen and (min-width: 768px) {
    width: 608px;
    margin: 0 auto;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  width: 80%;
  height: 100%;
  padding-right: 15px;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: 0.04em;
    width: 89%;
  }
`;

export const Button = styled.button`
  border: none;
  padding: 0, 5px;
  background-color: transparent;
  cursor: pointer;
`;
