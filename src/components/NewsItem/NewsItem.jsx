import React, { useState } from 'react';
import newsData from './news.json';

export const NewsCard = () => {
  const [news, setNews] = useState(newsData.news);

  return (
    <div>
      {news.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p>Автор: {item.author}</p>
          <p>Дата: {item.date}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default NewsCard;
