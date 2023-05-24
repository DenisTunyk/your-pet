import styled from 'styled-components';

export const CardContainer = styled.ul`
  margin: 0 auto;
  padding: 20px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  gap: 24px 32px;
    
  width: 320px;

  @media (min-width: 768px) {
    width: 768px;
    padding: 32px;
  }

  @media (min-width: 1280px) {
    width: 1280px;
    padding: 0 12px;
  }
`;
