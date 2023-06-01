import styled from 'styled-components';

export const Section = styled.section`
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }
`;

export const WrapperUser = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`;

export const StyledWrapper = styled.div`
  @media screen and (min-width: 768px) {
    margin: 0;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 32px;
  }
`;

export const Title = styled.h3`
  @media screen and (min-width: 1280px) {
    margin-bottom: 24px;
    font-weight: 500;
    font-size: 28px;
  }
`;

export const UserItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 21px 0;

  @media screen and (min-width: 768px) {
    margin: 0;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 25px;
  }
`;

export const Wrapper = styled.div`
  background: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 40px;
  padding: 20px 8px;
  min-width: 280px;
  height: fit-content;
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-top: 24px;
    padding: 20px 21px;
  }

  @media screen and (min-width: 1280px) {
    padding: 20px 12px;
    flex-direction: column;
    width: 395px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const StyledImage = styled.img`
  width: 182px;
  height: 182px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 40px;
`;

export const CloseBtnWrapper = styled.button`
  bottom: 4%;
  right: 4%;
  width: 28px;
  height: 28px;
  background-color: transparent;
  position: absolute;
  padding: 0;
  border-radius: 20px;
  border-color: white;
  transition: transform 250ms linear;
  &:hover,
  :focus {
    transform: scale(1.2);
  }
`;

export const CloseShape = styled.img`
  width: 24px;
  height: 24px;
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-top: 14px;
`;

export const InputFile = styled.input`
  position: absolute;
  padding: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  overflow: hidden;
  border: none;
  outline: none;

  &:hover + button,
  &:focus + button {
    text-shadow: 2px 2px 4px #456a8e84;
    transform: scale(1.05);
    outline: none;
  }
`;

export const EditImageBtn = styled.button`
  background-color: transparent;
  border: none;
  height: 24px;
  font-size: 12px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  line-height: 1.83;
  padding: 0;
  outline: none;
`;

export const CameraIcon = styled.img`
  margin-right: 8px;
  outline: none;
`;
