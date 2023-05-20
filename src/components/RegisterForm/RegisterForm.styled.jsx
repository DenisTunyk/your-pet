import styled from 'styled-components';

export const Container = styled.div`
  width: 280px;
  height: 473px;
  border-radius: 20px;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  background-color: #ffff;
  padding: 40px 12px;
`;

export const Title = styled.h1`
  font-size: 24px;
  line-height: 33px;
  align-items: center;
  text-align: center;
  margin-bottom: 40px;
  color: #111111;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;
`;

export const Input = styled.input`
  display: flex;
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
`;

export const Button = styled.button`
  width: 100%;
  height: 48px;
  padding: 10px 75px;
  background: #54adff;
  border-radius: 40px;
  border: none;
  cursor: pointer;
  color: white;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
`;

export const Span = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  display: block;
  align-items: center;
  text-align: center;
  letter-spacing: 0.04em;
`;
