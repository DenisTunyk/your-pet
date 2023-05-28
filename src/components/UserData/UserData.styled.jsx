/* .profile__conteiner {
  background: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 40px;
  padding: 20px 12px;
  width: 395px;
  height: 520px;
}

.profile {
  display: flex;
}

.profile__title {
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 38px;
}

.profile__content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile__photo {
  width: 182px;
  height: 182px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 40px;
}

.profile__btn {
  background-color: transparent;
  border: none;
  height: 24px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  line-height: 1.83;
}

.profile__btn:hover,
.profile__btn:focus {
  text-shadow: 2px 2px 4px #456a8e84;
  transform: scale(1.07);
}

.profile__icon {
  margin-right: 8px;
}

.profile__list {
  display: flex;
  flex-direction: column;
  margin: 25px 0 21px 0;
}

.profile__item {
  display: flex;
  justify-content: space-between;
  align-items: center;

  flex-direction: row;
  padding: 4px 0;
}

.profile__item__name {
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.04em;
}

.profile__input {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 4px 12px;
  height: 32px;
  width: 255px;
  border: 1px solid #54adff;
  border-radius: 20px;
}

.profile__input:focus,
.profile__input:hover {
  box-shadow: 2px 2px 4px #456a8e84;
}

.input__icon {
  position: absolute;
} */

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

export const Wrapper = styled.div`
  background: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 40px;
  padding: 20px 8px;
  min-width: 395px;
  height: fit-content;
  margin-top: 18px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    padding: 20px 12px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageWrapper = styled.div``;

export const StyledImage = styled.img`
  width: 182px;
  height: 182px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 40px;
`;

export const CloseBtnWrapper = styled.button``;

export const CloseShape = styled.svg``;

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

  &:hover + button,
  &:focus + button {
    text-shadow: 2px 2px 4px #456a8e84;
    transform: scale(1.05);
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
`;

export const CameraIcon = styled.img`
  margin-right: 8px;
`;

export const UserItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 21px 0;
`;
