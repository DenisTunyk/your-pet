import React, { useState } from 'react';
import { List, Title, Wrapper, Input } from './NewsList.styled';
import NewsItem from '../NewsItem/NewsItem';

export const NewsList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <Title>News</Title>
      <Wrapper>
        <Input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search"
        />
        <List>
          <NewsItem />
        </List>
      </Wrapper>
    </>
  );
};
export default NewsList;
