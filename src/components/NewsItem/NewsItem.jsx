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
import ButtonSearch from '../../components/Buttons/ButtonSearch/ButtonSearch';

export const NewsItem = () => {
  const [searchQuery] = useState('');
  const filteredNews = newsData.news.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const transformDate = date => {
    return date.split('T')[0].split('-').reverse().join('/');
  };

  return (
    <>
      <ButtonSearch />

      {filteredNews.map((item, id) => (
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
            <Link href={item.url} target="blank">
              Read more
            </Link>
          </WrapperFuterCard>
        </Card>
      ))}
    </>
  );
};

export default NewsItem;
