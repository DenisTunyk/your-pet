import styled from 'styled-components';

export const CardContainer = styled.ul`
  margin: 0 auto;
  margin-top: 41px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  gap: 24px 32px;

  width: 320px;

  @media (min-width: 768px) {
    width: 768px;
  }

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;
