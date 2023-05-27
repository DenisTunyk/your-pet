import React, { useState } from 'react';
import newsData from './news.json';
import { Card, Wrapper } from './NewsItem.styled';

export const NewsItem = () => {
  const [news] = useState(newsData.news);

  return (
    <Wrapper>
      {news.map((item, id) => (
        <Card key={id}>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
          <p>{item.date}</p>
          <a href={item.url}>Read more</a>
          <hr />
        </Card>
      ))}
    </Wrapper>
  );
};

export default NewsItem;
