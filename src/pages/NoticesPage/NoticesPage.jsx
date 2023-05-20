import { NoticeSearch } from 'components/NoticesSearch/NoticesSearch';
import { Container, Title } from './NoticesPage.styled';
import React, { useState } from 'react';

export const NoticesPage = () => {
  const [filter, setFilter] = useState('');

  const filterHandler = e => {
    console.log(filter);
    setFilter(e.currentTarget.value);
  };

  return (
    <Container>
      <Title>Find your favorite pet</Title>
      <NoticeSearch filterNotice={filterHandler} />
    </Container>
  );
};
