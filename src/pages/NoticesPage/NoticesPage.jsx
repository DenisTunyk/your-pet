import { NoticeSearch } from 'components/NoticesSearch/NoticesSearch';
import { Container, Title } from './NoticesPage.styled';
import React, { useState } from 'react';

export const NoticesPage = () => {
  const [filter, setFilter] = useState('');
  console.log(filter);

  return (
    <Container>
      <Title>Find your favorite pet</Title>
      <NoticeSearch filterNotice={setFilter} />
    </Container>
  );
};
