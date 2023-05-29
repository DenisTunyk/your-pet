import React, { useState } from 'react';
import newsData from './news.json';
import {
  Card,
  TitleCard,
  Content,
  Link,
  WrapImg,
  Img,
  Input,
  Data,
  WrapperFuterCard,
} from './NewsItem.styled';

export const NewsItem = () => {
  // const [news] = useState(newsData.news);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNews = newsData.news.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = event => {
    setSearchQuery(event.target.value);
  };

  const transformDate = date => {
    return date.split('T')[0].split('-').reverse().join('/');
  };

  return (
    <>
      <Input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search"
      />
      {/* <Wrapper> */}
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
      {/* </Wrapper> */}
    </>
  );
};

export default NewsItem;
