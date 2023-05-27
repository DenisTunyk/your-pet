//import { ToastContainer, toast } from 'react-toastify';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LogoutBtn } from '../Buttons/LogoutBtn/LogoutBtn';
import { updateUser, deleteUsersAvatar } from 'redux/auth/auth-operations';
import { UserDataItem } from 'components/UserDataItem/UserDataItem';

import camera from '../../assets/icon/camera.svg';
import closeShape from '../../assets/icon/cross-small.svg';
import noAvatar from '../../images/profile_img/Photo_default_2x.jpg';

import {
  Wrapper,
  ImageContainer,
  ImageWrapper,
  StyledImage,
  CloseBtnWrapper,
  CloseShape,
  InputWrapper,
  InputFile,
  EditImageBtn,
  UserItemWrapper,
  CameraIcon,
  Title,
} from './UserData.styled';

const imageExtensions = [
  'png',
  'jpg',
  'jpeg',
  'gif',
  'jfif',
  'pjpeg',
  'pjp',
  'webp',
];

export const UserData = ({ user }) => {
  const dispatch = useDispatch();
  const [isDisabledBtn, setIsDisabledBtn] = useState(false);
  const { email, name, birthday, phone, city, avatarURL } = user;

  const handleFileChange = async e => {
    const splitToFindExtension = e.target.value.split('.');
    const fileExtension = splitToFindExtension[splitToFindExtension.length - 1];

    if (!imageExtensions.includes(fileExtension)) {
      toast.error(
        'Avatar should be an image: png, jpg, jpeg, gif, jfif, pjpeg, pjp, webp',
        { autoClose: 5000 }
      );
      return;
    }

    const imgFile = e.target.files[0];

    if (imgFile) {
      const value = { avatarURL: imgFile };
      await dispatch(updateUser({ value }));
    }
  };

  return (
    <>
      <Title>My information:</Title>
      <Wrapper>
        {/* <ToastContainer position="top-right" autoClose={5000} theme="colored" /> */}
        <ImageContainer>
          <ImageWrapper>
            <StyledImage
              alt="user photo"
              src={
                avatarURL === null ||
                avatarURL === undefined ||
                avatarURL === ''
                  ? noAvatar
                  : avatarURL
              }
            />
            {avatarURL && (
              <CloseBtnWrapper
                onClick={async () => {
                  await dispatch(deleteUsersAvatar());
                }}
              >
                <CloseShape alt="close" src={closeShape} />
              </CloseBtnWrapper>
            )}
          </ImageWrapper>

          <InputWrapper>
            <InputFile type="file" onChange={handleFileChange} />
            <EditImageBtn>
              <CameraIcon src={camera} alt="camera" />
              Edit photo
            </EditImageBtn>
          </InputWrapper>
        </ImageContainer>

        <UserItemWrapper>
          <UserDataItem
            setIsDisabledBtn={setIsDisabledBtn}
            isDisabledBtn={isDisabledBtn}
            field="name"
            initValue={{ name }}
            setUser={async value => {
              if (value.name === name) {
                return;
              }
              await dispatch(updateUser({ value }));
            }}
          ></UserDataItem>
          <UserDataItem
            setIsDisabledBtn={setIsDisabledBtn}
            isDisabledBtn={isDisabledBtn}
            field="email"
            initValue={{ email }}
            setUser={async value => {
              if (value.email === email) {
                return;
              }
              await dispatch(updateUser({ value }));
            }}
          ></UserDataItem>
          <UserDataItem
            setIsDisabledBtn={setIsDisabledBtn}
            isDisabledBtn={isDisabledBtn}
            field="birthday"
            initValue={{
              birthday:
                birthday === null || birthday === '00.00.0000'
                  ? '00.00.0000'
                  : getBirthdayString(birthday),
            }}
            setUser={async value => {
              if (value.birthday === birthday) {
                return;
              }
              await dispatch(updateUser({ value }));
            }}
          ></UserDataItem>
          <UserDataItem
            setIsDisabledBtn={setIsDisabledBtn}
            isDisabledBtn={isDisabledBtn}
            field="phone"
            initValue={{ phone }}
            setUser={async value => {
              if (value.phone === phone) {
                return;
              }
              await dispatch(updateUser({ value }));
            }}
          ></UserDataItem>
          <UserDataItem
            setIsDisabledBtn={setIsDisabledBtn}
            isDisabledBtn={isDisabledBtn}
            field="city"
            initValue={{ city }}
            setUser={async value => {
              if (value.city === city) {
                return;
              }
              await dispatch(updateUser({ value }));
            }}
          ></UserDataItem>
        </UserItemWrapper>
        <LogoutBtn />
      </Wrapper>
    </>
  );
};

function getBirthdayString(birthday) {
  const date = new Date(birthday);
  const day = date.getDate();
  const month = date.getMonth() + 1;

  return `${day < 10 ? `0${day}` : day}.${
    month < 10 ? `0${month}` : month
  }.${date.getFullYear()}`;
}
