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
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 0;
    width: 100%;
    height: 8px;
    border-radius: 4px;
    background-color: blue;
    background: blue;
  }
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

export const WrapImg = styled.div`
  overflow: hidden;
  border-radius: 20px;
  object-fit: cover;
  width: 100%;
  height: 252px;
`;

export const Img = styled.img`
  display: block;
  height: 100%;
  width: 100%;
`;
export const Input = styled.input`
  height: 44px;
  box-shadow: rgba(136, 198, 253, 0.19) 3px 8px 14px;
  border-radius: 40px;
  border: 1px solid transparent;
  padding: 8px 20px;
  box-sizing: border-box;
  outline: none;
`;

export default Card;
