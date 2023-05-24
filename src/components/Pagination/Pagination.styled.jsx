import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 350px;
  background-color: #FEF9F9;;
  border-radius: 45px;
  padding: 5px;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
`;

export const PaginationButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  margin: 0 5px;
  border: 1px solid #CCE4FB;
  border-radius:50%;
  background-color: ${({ active }) => (active ? '#54ADFF' : 'transparent')};
  color: ${({ active }) => (active ? '#FEF9F9;' : '#CCE4FB')};
  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: ${() => '#54ADFF'};
    color: ${() => '#FEF9F9'};
  }

  &:hover, &:focus {
    border: 1px solid #CCE4FB;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
    border: 1px solid #CCE4FB;
  }
`;

export const PaginationNumbers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;