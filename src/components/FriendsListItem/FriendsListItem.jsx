import { useState, useEffect, useRef } from 'react';
import { useSchedule } from 'hooks/useSchedule';

import {
  ItemTitle,
  Wrapper,
  Content,
  Logo,
  ScheduleWrapper,
  // Logotip,
  TextContent,
  Link,
  Title,
  Text,
  ScheduleBtn,
  Schedule,
  DayWrapper,
  DayTime,
  Day,
  MinTime,
  MaxTime,
} from './FriendsListItem.styled';

export const FriendsListItem = ({
  email,
  address,
  url,
  addressUrl,
  imageUrl,
  phone,
  title,
  workDays,
}) => {
  const [showSchedule, SetShowSchedule] = useState(false);
  const [time, SetTime] = useState([]);
  const [workTime, weekSchedule] = useSchedule(workDays);
  const scheduleRef = useRef(null);

  useEffect(() => {
    const handleKeyEscape = event => {
      if (event.code === 'Escape') {
        SetShowSchedule(false);
      }
    };
    if (showSchedule === true) {
      window.addEventListener('keydown', handleKeyEscape);
    }

    return () => window.removeEventListener('keydown', handleKeyEscape);
  }, [showSchedule]);

  useEffect(() => {
    const schedule = scheduleRef.current;
    const handleOnClick = e => {
      if (e.target !== schedule && !schedule.contains(e.target)) {
        SetShowSchedule(false);
      }
    };

    if (showSchedule === true) {
      document.addEventListener('click', e => handleOnClick(e));
    }

    return () => document.removeEventListener('click', e => handleOnClick(e));
  }, [showSchedule]);

  const handleOnClick = () => {
    SetShowSchedule(prevState => !prevState);

    const day = new Date().getDay();
    let hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    hours = hours === 0 ? 24 : hours;
    const time = Number(hours + '.' + minutes);
    SetTime([day, time]);
  };

  return (
    <Wrapper>
      <ItemTitle
        href={url}
        rel="noreferrer noopener"
        target="_blank"
        aria-label="Happy paw"
      >
        {title}
      </ItemTitle>
      <Content>
        <Logo src={imageUrl} alt={title}/>
        <TextContent>
          <ScheduleWrapper>
            <ScheduleBtn
              ref={scheduleRef}
              onClick={handleOnClick}
              data-schedule={showSchedule}
            >
              <Title>Time:</Title>
              <Text>{workTime}</Text>
            </ScheduleBtn>
            {showSchedule && (
              <Schedule>
                <DayWrapper data-time={time} data-day={1}>
                  <Day>MN</Day>
                  <DayTime>
                    <MinTime>{weekSchedule[0].start}</MinTime>
                    <MaxTime>{weekSchedule[0].end}</MaxTime>
                  </DayTime>
                </DayWrapper>
                <DayWrapper data-time={time} data-day={2}>
                  <Day>TU</Day>
                  <DayTime>
                    <MinTime>{weekSchedule[1].start}</MinTime>
                    <MaxTime>{weekSchedule[1].end}</MaxTime>
                  </DayTime>
                </DayWrapper>
                <DayWrapper data-time={time} data-day={3}>
                  <Day>WE</Day>
                  <DayTime>
                    <MinTime>{weekSchedule[2].start}</MinTime>
                    <MaxTime>{weekSchedule[2].end}</MaxTime>
                  </DayTime>
                </DayWrapper>
                <DayWrapper data-time={time} data-day={4}>
                  <Day>TH</Day>
                  <DayTime>
                    <MinTime>{weekSchedule[3].start}</MinTime>
                    <MaxTime>{weekSchedule[3].end}</MaxTime>
                  </DayTime>
                </DayWrapper>
                <DayWrapper data-time={time} data-day={5}>
                  <Day>FR</Day>
                  <DayTime>
                    <MinTime>{weekSchedule[4].start}</MinTime>
                    <MaxTime>{weekSchedule[4].end}</MaxTime>
                  </DayTime>
                </DayWrapper>
                <DayWrapper data-time={time} data-day={6}>
                  <Day>SA</Day>
                  <DayTime>
                    <MinTime>{weekSchedule[5].start}</MinTime>
                    <MaxTime>{weekSchedule[5].end}</MaxTime>
                  </DayTime>
                </DayWrapper>
                <DayWrapper data-time={time} data-day={0}>
                  <Day>SU</Day>
                  <DayTime>
                    <MinTime>{weekSchedule[6].start}</MinTime>
                    <MaxTime>{weekSchedule[6].end}</MaxTime>
                  </DayTime>
                </DayWrapper>
              </Schedule>
            )}
          </ScheduleWrapper>
          <Link
            href={addressUrl}
            rel="noreferrer noopener"
            target="_blank"
            aria-label="address"
          >
            <Title>Address:</Title>
            <Text>{address ? address : '-- -- -- -- --'}</Text>
          </Link>
          <Link href={`mailto:${email || ''}`} aria-label="email">
            <Title>Email:</Title>
            <Text>{email ? email : '-- -- -- -- --'}</Text>
          </Link>
          <Link href={`tel:${phone}`} aria-label="phone number">
            <Title>Phone:</Title>
            <Text>{phone ? phone : '-- -- -- -- --'}</Text>
          </Link>
        </TextContent>
      </Content>
    </Wrapper>
  );
};
