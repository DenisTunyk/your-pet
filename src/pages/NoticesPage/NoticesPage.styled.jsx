import styled from 'styled-components';

export const Container = styled('div')`
  margin-top: 123px;
  margin-bottom: 30px;
`;

export const Title = styled('h2')`
  font-size: 24px;
  line-height: 1.38;
  text-align: center;
  color: #111;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 1.38;
    margin-bottom: 40px;
  }
`;
