import React, { useState } from 'react';

import { Form, Input, Button } from './NoticesSearch.styled';

export const NoticeSearch = ({ filterNotice }) => {
  const [search, setSearch] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    filterNotice(search);
  };

  const handleChange = e => {
    setSearch(e.target.value);
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          fill="none"
        >
          <path
            fill="#54ADFF"
            d="M17.47 18.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM15.25 8.5a6.75 6.75 0 0 1-6.75 6.75v1.5a8.25 8.25 0 0 0 8.25-8.25h-1.5ZM8.5 15.25A6.75 6.75 0 0 1 1.75 8.5H.25a8.25 8.25 0 0 0 8.25 8.25v-1.5ZM1.75 8.5A6.75 6.75 0 0 1 8.5 1.75V.25A8.25 8.25 0 0 0 .25 8.5h1.5ZM8.5 1.75a6.75 6.75 0 0 1 6.75 6.75h1.5A8.25 8.25 0 0 0 8.5.25v1.5Zm10.03 15.72-4.187-4.188-1.06 1.06 4.187 4.188 1.06-1.06Z"
          />
        </svg>
      </Button>
    </Form>
  );
};
