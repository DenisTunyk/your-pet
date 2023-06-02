import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;

  width: 100vw;
  height: 100vh;

  background: rgba(97, 97, 97, 0.6);
  backdrop-filter: blur(4px);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 999;
`;

export const ModalWindow = styled.div`
  width: 680px;
  position: relative;
  padding: 32px;

  background-color: #fff;
  border-radius: 40px;

  @media (max-width: 767px) {
    width: 280px;
    padding: 20px;
    border-radius: 20px;
  }
`;

export const Info = styled.div`
  height: 300px;
  display: flex;
  align-items: flex-start;
  gap: 24px;

  @media (max-width: 767px) {
    margin-top: 44px;
    flex-direction: column;
    gap: 12px;
    height: auto;
  }
`;

export const Contact = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  gap: 50px;

  font-size: 16px;
  line-height: 22px;

  @media (max-width: 767px) {
    font-size: 12px;
    line-height: 16px;
  }
`;
export const Description = styled.div`
  width: 240px;

  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: -0.01em;

  color: #000000;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Contactheader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 8px;

  font-weight: 600;
`;

export const ContactContent = styled.div`
  display: flex;
  position: absolute;
  right: 0%;
  top: 0;
  flex-direction: column;
  align-items: left;
  gap: 8px;
`;

export const Comment = styled.div`
  padding-top: 28px;
  padding-bottom: 70px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.04;

  @media (max-width: 767px) {
    font-size: 14px;
    font-weight: 600;
    line-height: 19px;
    padding-top: 12px;
    padding-bottom: 12px;
  }
`;

export const ContactButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 17px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const ContactButtonAdd = styled.button`
  padding: 8px 20px;
  color: #fef9f9;
  background-color: #54adff;
  border-radius: 40px;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  & svg {
    stroke: currentColor;
    fill: none;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const ContactButtonContact = styled.button`
  padding: 8px 20px;
  background-color: #fef9f9;
  color: #54adff;
  border-radius: 40px;
  border: 1px solid #54adff;

  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const Image = styled.div`
  position: relative;
  width: 262px;
  height: 298px;
  border-radius: 0 0 40px 40px;
  background-color: rgba(0.1, 0.1, 0.1, 0.05);
  background-image: url(${({ img }) => img});
  background-size: cover;

  @media (max-width: 767px) {
    width: 240px;
    height: 240px;
  }
`;

export const Category = styled.div`
  position: absolute;
  left: 0;
  top: 16px;

  width: 126px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  font-size: 14px;
  line-height: 19px;

  background-color: #cce4fb;
  border-radius: 0 16px 16px 0;
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
