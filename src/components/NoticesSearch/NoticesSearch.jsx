import React, { useState } from 'react';

import { Form, Input, Button } from './NoticesSearch.styled';
import crossIcon from '../../images/iconsSearch/cross-small.svg';
import searchIcon from '../../images/iconsSearch/search.svg';

export const NoticeSearch = ({ filterNotice }) => {
  const [search, setSearch] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    filterNotice(search);
    setSearch('');
  };

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const onClickClear = () => {
    setSearch('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="search"
        type="text"
        value={search}
        placeholder="Search"
        onChange={handleChange}
      />

      <Button type="submit">
        <img src={searchIcon} alt="" />
      </Button>
      {search && (
        <Button type="button" onClick={onClickClear}>
          <img src={crossIcon} alt="" />
        </Button>
      )}
    </Form>
  );
};
