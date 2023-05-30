import styled from 'styled-components';

export const Wrapper = styled('h2')`
  margin-top: 40px;
  margin-bottom: 24px;
  font-size: 24px;
  line-height: 1.38;
  text-align: center;
  color: #111;

  @media screen and (min-width: 768px) {
    margin-top: 80px;
    margin-bottom: 40px;
    font-size: 48px;
    line-height: 1.38;
    font-weight: 700;
  }
`;
