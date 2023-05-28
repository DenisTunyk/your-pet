import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;

  width: 100%;
  height: 100%;

  background: rgba(97, 97, 97, 0.6);
  backdrop-filter: blur(4px);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 999;
`;

export const ModalWindow = styled.div`
  width: 608px;
  position: relative;
  padding: 60px;

  background-color: #fff;
  border-radius: 40px;

  @media (max-width: 767px) {
    width: 280px;
    heigth: 287px;
    padding: 20px;
    border-radius: 20px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 28px;
  right: 31px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #fff;
  color: #54adff;
  border: none;

  & svg {
    stroke: currentColor;
  }

  @media (max-width: 767px) {
    top: 17px;
    right: 17px;
  }
`;
