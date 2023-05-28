import styled from 'styled-components';

export const Container = styled.div``;

export const Form = styled.form``;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 25px 0 21px 0;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-direction: row;
  padding: 4px 0;
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.04em;
`;

export const Edit = styled.span``;

export const Input = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 4px 12px;
  height: 32px;
  width: 255px;
  border: 1px solid #54adff;
  border-radius: 20px;
  
  &:focus,
  &:hover {
  box-shadow: 2px 2px 4px #456a8e84;
`;

export const Button = styled.button``;
