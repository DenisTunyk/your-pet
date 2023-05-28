import React, { useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import {
  PaginationContainer,
  PaginationButton,
  PaginationNumbers,
  Wrapper,
} from './Pagination.styled';

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const [displayedPages, setDisplayedPages] = useState([1, 2, 3, 4, 5]);

  const handlePageClick = page => {
    onPageChange(page);
    updatePages(page);
  };

  const updatePages = page => {
    const totalPages = 5;
    const halfTotalPages = Math.floor(totalPages / 2);

    let startPage = page - halfTotalPages;
    if (startPage < 1) {
      startPage = 1;
    }

    let endPage = startPage + totalPages - 1;
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = endPage - totalPages + 1;
      if (startPage < 1) {
        startPage = 1;
      }
    }

    const newPages = [];
    for (let i = startPage; i <= endPage; i++) {
      newPages.push(i);
    }
    setDisplayedPages(newPages);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
      updatePages(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
      updatePages(currentPage + 1);
    }
  };

  return (
    <Wrapper>
      <PaginationContainer>
        <PaginationButton onClick={handlePrevClick}>
          <BsArrowLeft />
        </PaginationButton>
        <PaginationNumbers>
          {displayedPages.map(page => (
            <PaginationButton
              key={page}
              onClick={() => handlePageClick(page)}
              active={currentPage === page}
            >
              {page}
            </PaginationButton>
          ))}
        </PaginationNumbers>
        <PaginationButton onClick={handleNextClick}>
          <BsArrowRight />
        </PaginationButton>
      </PaginationContainer>
    </Wrapper>
  );
};
