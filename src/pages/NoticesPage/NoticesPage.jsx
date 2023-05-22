import { NoticeSearch } from 'components/NoticesSearch/NoticesSearch';
import { Container, Title } from './NoticesPage.styled';
import React, { useState } from 'react';
// import { NoticeCategoryList } from 'components/NoticesCategoriesList/NoticesCategoriesList';
import { NoticesCategoriesNav } from 'components/NoticesCategoriesNav/NoticesCategoriesNav';

export const NoticesPage = () => {
  const [search, setSearch] = useState('');

  return (
    <Container>
      <Title>Find your favorite pet</Title>
      <NoticeSearch filterNotice={setSearch} />
      <NoticesCategoriesNav />
      {/* <NoticeCategoryList search={search} /> */}
    </Container>
  );
};
