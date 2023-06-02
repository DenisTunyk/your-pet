import React, { useState, useEffect } from 'react';
import { getNews } from '../../api/news';
import {
  Card,
  TitleCard,
  Content,
  Link,
  WrapImg,
  Img,
  Data,
  WrapperFuterCard,
  WrapSpinner,
  WrapperPagination,
  WrapperP,
} from './NewsItem.styled';
import Pagination from '../Pagination/Pagination';
import Loader from '../../components/Loader/Loader';

const ITEMS_PER_PAGE = 6;

const NewsItem = ({ searchQuery }) => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsData = await getNews();
        setNews(newsData);
        setIsLoading(false);
        // console.log(news);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNews();
  }, []);

  const sortedNews = news.sort((a, b) => new Date(b.date) - new Date(a.date));

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
      {isLoading ? (
        <WrapSpinner>
          <Loader />
        </WrapSpinner>
      ) : (
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
          <WrapperP>
            <WrapperPagination>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </WrapperPagination>
          </WrapperP>
        </>
      )}
    </>
  );
};

export default NewsItem;
