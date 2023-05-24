import { NoticeSearch } from 'components/NoticesSearch/NoticesSearch';
import { Title } from 'components/Title/Title';
import React, { useState } from 'react';
// import { NoticeCategoryList } from 'components/NoticesCategoriesList/NoticesCategoriesList';
import { NoticesCategoriesNav } from 'components/NoticesCategoriesNav/NoticesCategoriesNav';

export const NoticesPage = () => {
  const [search, setSearch] = useState('');
  console.log(search);

  return (
    <>
      <Title>Find your favorite pet</Title>
      <NoticeSearch filterNotice={setSearch} />
      <NoticesCategoriesNav />
      {/* <NoticeCategoryList search={search} /> */}
    </>
  );
};
