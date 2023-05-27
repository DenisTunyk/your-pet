import styled from 'styled-components';

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 8px 28px;

  width: 248px;

  border-radius: 40px;
  border: 2px solid;
  border-color: var(--color-blue);

  cursor: pointer;

  background: var(--color-blue);

  font-weight: 500;
  font-size: 16px;
  line-height: 1.375;
  letter-spacing: 0.04em;
  color: var(--color-text-btn);

  span {
    margin-right: 12px;
  }

  svg {
    fill: var(--color-text-btn);
  }
`;
