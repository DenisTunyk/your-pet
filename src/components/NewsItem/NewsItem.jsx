import React, { useState } from 'react';
import newsData from './news.json';

export const NewsItem = () => {
  const [news, setNews] = useState(newsData.news);

  return (
    <div>
      {news.map((item, id) => (
        <div key={id}>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
          <p>дата: {item.date}</p>
          <p>посилання: {item.url}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default NewsItem;
