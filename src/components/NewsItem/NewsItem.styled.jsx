import styled from 'styled-components';

export const Card = styled.li`
  width: 280px;
  /* height: 578px; */
  margin-right: auto;
  margin-left: auto;
  position: relative;
  background-color: rgb(253, 247, 242);
  box-shadow: rgba(136, 198, 253, 0.19) 3px 8px 14px;
  border-radius: 20px;
  gap: 16px;
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 0;
    width: 100%;
    height: 8px;
    border-radius: 4px;
    background-color: blue;
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  }
  @media (min-width: 768px) {
    width: 336px;
    gap: 16px;
  }
  @media (min-width: 1280px) {
    /* width: 336px; */
  }
`;

export const TitleCard = styled.h2`
  color: black;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 16px;
  padding-right: 12px;
  padding-left: 12px;
`;
export const Content = styled.p`
  color: black;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 40px;
  padding-right: 12px;
  padding-left: 12px;
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
  margin-bottom: 16px;
`;

export const Img = styled.img`
  display: block;
  height: 100%;
  width: 100%;
`;

export const Data = styled.p`
  height: 22px;
  font-weight: 400;
  line-height: 22px;
  color: rgba(136, 136, 136, 1);
`;
export const WrapperFuterCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 12px;
  padding-right: 12px;
  padding-left: 12px;
`;

export default Card;
