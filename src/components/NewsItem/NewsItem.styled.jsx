import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 500px);
  margin-top: 50px;
`;

export const Card = styled.div`
  width: 280px;
  height: 578px;
  margin-right: auto;
  margin-left: auto;
`;

export const Title = styled.p`
  color: black;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
`;
export const Content = styled.p`
  color: black;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 40px;
`;

export const Link = styled.a`
  color: #54adff;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
`;

export default Card;
