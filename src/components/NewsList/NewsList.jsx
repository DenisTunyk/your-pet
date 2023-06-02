import React, { useState } from 'react';
import { List, Title, Wrapper, Input, Form } from './NewsList.styled';
import NewsItem from '../NewsItem/NewsItem';
import ButtonSearch from '../../components/Buttons/ButtonSearch/ButtonSearch';

export const NewsList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllNews, setShowAllNews] = useState(true);

  const handleSearch = event => {
    setSearchQuery(event.target.value);
    setShowAllNews(event.target.value === '');
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <Title>News</Title>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search"
          />
          <ButtonSearch
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </Form>
        <List>
          <NewsItem searchQuery={searchQuery} showAllNews={showAllNews} />
        </List>
      </Wrapper>
    </>
  );
};

export default NewsList;
