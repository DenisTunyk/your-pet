import React, { useState } from 'react';

import { Form, Input, Button } from './NoticesSearch.styled';
import crossIcon from '../../images/iconsSearch/cross-small.svg';
import searchIcon from '../../images/iconsSearch/search.svg';

export const NoticeSearch = ({ filterNotice }) => {
  const [search, setSearch] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    filterNotice(search);
  };

  const handleChange = e => {
    const input = e.target.value;
    if (!input) {
      filterNotice(input);
    }
    setSearch(input);
  };

  const onClickClear = () => {
    setSearch('');
    filterNotice('');
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
