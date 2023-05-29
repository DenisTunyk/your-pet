import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-basis: calc((100% - 0px) / 1);
  height: 280px;
  padding: 16px 12px;
  color: #111111;
  background: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);

  border-radius: 40px;

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 32px * 1) / 2);
    height: 365px;
  }

  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 32px * 2) / 3);
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  flex-grow: 1;
  gap: 12px;
`;

export const DayWrapper = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 3px;
  border-radius: 5px;
  gap: 12px;
  background-color: ${props => {
    if (props['data-time'][0] === props['data-day']) {
      return props.theme.colors.blueLight;
    } else {
      return props.theme.colors.transparent;
    }
  }};
  color: ${props => {
    const min = props.children[1].props.children[0].props.children;
    const minHour =
      min === 'closed'
        ? 'red'
        : min === 'day / night'
        ? 'green'
        : Number(
            props.children[1].props.children[0].props.children
              .slice(0, 4)
              .replace(/:/, '.')
          );

    const maxHour = Number(
      props.children[1].props.children[1].props.children.replace(/:/, '.')
    );
    const inTime =
      props['data-time'][1] > minHour && props['data-time'][1] < maxHour;
    const isThisDay = props['data-time'][0] === props['data-day'];

    if ((inTime && isThisDay) || (minHour === 'green' && isThisDay)) {
      return props.theme.colors.green;
    } else if ((!inTime && isThisDay) || (minHour === 'red' && isThisDay)) {
      return props.theme.colors.red;
    } else if (!isThisDay) {
      return props.theme.colors.black;
    }
  }};
`;

export const Day = styled.span`
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
`;
export const DayTime = styled.span`
  display: flex;
  justify-content: right;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
`;

export const MaxTime = styled.span``;

export const MinTime = styled.span``;

export const Logotip = styled.div`
  width: 100px;
  height: 68px;

  @media screen and (min-width: 768px) {
    width: 124px;
    height: 104px;
  }

  @media screen and (min-width: 1280px) {
    width: 146px;
    height: 104px;
  }
`;
export const ScheduleWrapper = styled.div`
  position: relative;
`;

export const Schedule = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 155px;
  height: 160px;

  background: #ffffff;
  border: 1px solid #54adff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 8px;
`;
export const Logo = styled.img`
  object-fit: cover;
`;

export const ItemTitle = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;

  height: 54px;

  font-weight: 700;
  font-size: 20px;
  line-height: 1.35;
  color: #54adff;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    width: 80%;
  }
`;

export const ScheduleBtn = styled.button`
  outline: transparent;
  padding: 0;
  background-color: transparent;
  text-decoration: none;
  color: ${props => {
    if (props['data-schedule']) {
      return props.theme.colors.blue;
    } else {
      return props.theme.colors.black;
    }
  }};

  border: none;

  &:hover,
  &:focus-visible,
  :active {
    color: #54adff;
  }
  cursor: pointer;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
  width: 70%;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.black};
  &:hover,
  &:focus-visible {
    color: ${props => props.theme.colors.blue};
  }
  cursor: pointer;
`;

export const Title = styled.p`
  text-align: left;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.33;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.35;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.375;
  }
`;

export const Text = styled.p`
  word-break: break-word;

  text-align: left;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  @media screen and (${props => props.theme.media.md}) {
    font-size: 14px;
    line-height: 1.35;
  }
  @media screen and (${props => props.theme.media.md}) {
    font-size: 16px;
    line-height: 1.375;
  }
`;
