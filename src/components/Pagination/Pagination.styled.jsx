import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-bottom: 100px; */

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-bottom: 194px;
  }
`;

export const PaginationContainer = styled.div`
  width: 350px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  background-color: #fef9f9;
  border-radius: 45px;
  padding: 5px;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);

  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }
`;

export const PaginationButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  margin: 0 5px;
  border: 1px solid #cce4fb;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? '#54ADFF' : 'transparent')};
  color: ${({ active }) => (active ? '#FEF9F9;' : '#CCE4FB')};
  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: ${() => '#54ADFF'};
    color: ${() => '#FEF9F9'};
  }

  &:hover,
  &:focus {
    border: 1px solid #cce4fb;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
    border: 1px solid #cce4fb;
  }

  @media screen and (min-width: 480px) {
    width: 35px;
    height: 35px;
  }
`;

export const PaginationNumbers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
