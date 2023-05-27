import React, { useState } from 'react';
import newsData from './news.json';
import { Card, Wrapper, Title, Content } from './NewsItem.styled';

export const NewsItem = () => {
  const [news] = useState(newsData.news);

  return (
    <Wrapper>
      {news.map((item, id) => (
        <Card key={id}>
          <Title>{item.title}</Title>
          <Content>{item.text}</Content>
          <p>{item.date}</p>
          <a href={item.url} target="blank">
            Read more
          </a>
          <hr />
        </Card>
      ))}
    </Wrapper>
  );
};

export default NewsItem;
