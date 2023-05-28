import { Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 44px;
  height: 473px;
  border-radius: 20px;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  background-color: #ffff;
  padding: 40px 12px;

  @media screen and (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    margin-top: 80px;
    bottom: 47.28%;
    width: 608px;
    height: 549px;
    padding: 60px 75px;
  }
`;

export const Title = styled.h1`
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
  align-items: center;
  text-align: center;
  margin-bottom: 40px;
  color: #111111;

  @media screen and (min-width: 768px) {
    font-weight: 500;
    font-size: 36px;
    line-height: 49px;
  }
`;

export const FormAuth = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  position: relative;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const Input = styled(Field)`
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  gap: 10px;
  width: 100%;
  height: 48px;
  border: 1px solid #54adff;
  border-radius: 40px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  outline: none;
  cursor: pointer;

  &.success {
    border-color: green;
  }
  &.error {
    border-color: red;
  }
`;

export const IconCheck = styled.span`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 50%;
  transform: translateY(-50%);
  right: 15px;
  cursor: pointer;
`;

export const IconCross = styled.span`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 50%;
  transform: translateY(-50%);
  right: 15px;
  cursor: pointer;
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  height: 48px;
  padding: 10px auto;
  background: #54adff;
  border-radius: 40px;
  border: none;
  cursor: pointer;
  color: white;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  margin-top: 16px;
  margin-bottom: 24px;

  &:focus {
    outline: none;
  }

  &:disabled {
    background: #83c2fd;
    border: none;
    cursor: default;
  }

  @media screen and (min-width: 768px) {
    margin-top: 20px;
    margin-bottom: 16px;
  }
`;

export const LinkToLogIn = styled(Link)`
  color: #54adff;
  text-decoration: underline;
`;

export const IconShow = styled.span`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 50%;
  transform: translateY(-50%);
  right: 15px;
  color: grey;
  cursor: pointer;
`;

export const TextLink = styled.p`
  left: 19.69%;
  right: 20%;
  top: 79.37%;
  bottom: 17.97%;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
  padding: auto;
  color: #888888;

  @media screen and (min-width: 768px) {
    left: 37.5%;
    right: 37.37%;
    top: 46.35%;
    bottom: 52.31%;
  }
`;
