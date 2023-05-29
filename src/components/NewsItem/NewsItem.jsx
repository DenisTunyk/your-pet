import React, { useState } from 'react';
import newsData from './news.json';
import {
  Card,
  TitleCard,
  Content,
  Link,
  WrapImg,
  Img,
  Data,
  WrapperFuterCard,
} from './NewsItem.styled';
import Pagination from '../Pagination/Pagination';

const ITEMS_PER_PAGE = 6;

const NewsItem = ({ searchQuery }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const sortedNews = newsData.news.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const filteredNews = searchQuery
    ? sortedNews.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : sortedNews;

  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentNews = filteredNews.slice(indexOfFirstItem, indexOfLastItem);

  const transformDate = date => {
    return date.split('T')[0].split('-').reverse().join('/');
  };

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {currentNews.map((item, id) => (
        <Card key={id}>
          <WrapImg>
            <Img
              src={item.imgUrl}
              alt={item.title}
              loading="lazy"
              width="280"
            />
          </WrapImg>
          <TitleCard>{item.title}</TitleCard>
          <Content>{item.text}</Content>
          <WrapperFuterCard>
            <Data>{transformDate(item.date)}</Data>
            <Link href={item.url} target="_blank">
              Read more
            </Link>
          </WrapperFuterCard>
        </Card>
      ))}
      <div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default NewsItem;
