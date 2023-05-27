import React, { useState } from 'react';
import newsData from './news.json';
import { Card, Wrapper } from './NewsItem.styled';

export const NewsItem = () => {
  const [news, setNews] = useState(newsData.news);

  return (
    <Wrapper>
      {news.map((item, id) => (
        <Card key={id}>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
          <p>дата: {item.date}</p>
          <p>посилання: {item.url}</p>
          <hr />
        </Card>
      ))}
    </Wrapper>
  );
};

export default NewsItem;
