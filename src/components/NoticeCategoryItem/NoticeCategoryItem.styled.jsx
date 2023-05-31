import styled from 'styled-components';

const colors = {
  primary: '#cce4fb',
  secondary: '#54adff',
  black: '#111111',
};

export const Card = styled.li`
  list-style: none;
  position: relative;
  width: 288px;
  height: 456px;

  text-align: center;

  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 0px 0px 40px 40px;

  @media (min-width: 768px) {
    width: 336px;
    height: 456px;
  }
  @media (min-width: 1280px) {
    width: 288px;
    height: 456px;
  }
`;

export const Image = styled.div`
  position: relative;
  width: 288px;
  height: 288px;

  @media (min-width: 768px) {
    width: 336px;
  }
  @media (min-width: 1280px) {
    width: 288px;
  }
  background-color: rgba(0.1, 0.1, 0.1, 0.05);
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Category = styled.div`
  position: absolute;
  left: 0;
  top: 16px;

  width: 126px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  font-size: 14px;
  line-height: 19px;

  background-color: ${colors.primary};
  border-radius: 0 16px 16px 0;
`;

export const ContentContainer = styled.ul`
  position: absolute;
  bottom: 0;
  left: 0;

  padding: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 12px;
`;

export const Content = styled.li`
  list-style: none;

  width: 80px;
  padding: 2px 4px 2px 4px;
  background-color: ${colors.primary};
  border-radius: 16px;

  text-align: center;
  font-size: 12px;
  line-height: 16.4px;
  letter-spacing: 0.04;

  padding: 5px 0px;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 4px;
`;

export const RemoveFaivoriteButton = styled.button`
  width: 40px;
  height: 40px;

  position: absolute;
  top: 64px;
  right: 12px;

  background-color: ${colors.primary};
  color: ${colors.secondary};

  border: none;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  stroke: currentColor;
  fill: none;
`;

export const AddToFaivoriteButton = styled.button`
  width: 40px;
  height: 40px;

  position: absolute;
  top: 12px;
  right: 12px;
  background-color: ${colors.primary};
  color: ${colors.secondary};

  border: none;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  & .icon {
    stroke: currentColor;
    fill: ${props => (props.filled ? 'currentColor' : 'none')};
    transition: fill 1s ease-out 100ms;
  }

  &:hover .icon {
    fill: currentColor;
  }
`;

export const LearnMoreButton = styled.button`
  padding: 8px 78px;
  color: ${colors.secondary};
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
  border: 1px solid ${colors.secondary};
  border-radius: 20px;
  align-items: center;
  text-align: center;
  cursor: pointer;

  transition: color 1s ease-out 100ms, background-color 1s ease-out 100ms,
    background 1s ease-out 100ms;

  &:hover,
  &:focus {
    color: #fef9f9;
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  }
`;

export const Description = styled.div`
  padding: 20px 37px 20px 20px;
  height: 100px;
  color: ${colors.black};
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: left;
`;

export const WrapFuterCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: auto;
  text-align: left;
`;
