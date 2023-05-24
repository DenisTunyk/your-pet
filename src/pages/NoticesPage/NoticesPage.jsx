import { NoticeSearch } from 'components/NoticesSearch/NoticesSearch';
import { Title } from 'components/Title/Title';
import React, { useState } from 'react';
// import { NoticeCategoryList } from 'components/NoticesCategoriesList/NoticesCategoriesList';
import { NoticesCategoriesNav } from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import { Pagination } from 'components/Pagination/Pagination';


export const NoticesPage = () => {
  const [search, setSearch] = useState('');
  console.log(search);

const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Title>Find your favorite pet</Title>
      <NoticeSearch filterNotice={setSearch} />
      <NoticesCategoriesNav />
      {/* <NoticeCategoryList search={search} /> */}
      <Pagination currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}/>
    </>

  );
};
