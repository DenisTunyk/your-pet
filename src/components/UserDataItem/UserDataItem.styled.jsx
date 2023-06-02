import styled from 'styled-components';
import { Field } from 'formik';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  justify-content: space-between;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 355px;
    height: 32px;
  }
  @media screen and (min-width: 1280px) {
    width: 100%;
  }
`;

export const Input = styled(Field)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 6px 14px;
  height: 32px;
  border: 1px solid #54adff;
  border-radius: 20px;
  min-width: 190px;

  @media screen and (min-width: 768px) {
    min-width: 255px;
  }

  &:focus,
  &:hover {
    box-shadow: 2px 2px 4px #456a8e84;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 14px;
  line-height: 19.2px;
  letter-spacing: 4%;

  @media screen and (min-width: 768px) {
    font-weight: 600;
    font-size: 18px;
    line-height: calc(25 / 18);
  }
`;

export const Button = styled.span`
  padding: 0;
  border: none;
  background-color: transparent;
  position: absolute;
  right: 12px;
`;
