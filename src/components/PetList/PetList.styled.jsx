import styled from 'styled-components';

export const List = styled.ul`
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 768px) {
    gap: 24px;
    width: 100%;
  }
`;
