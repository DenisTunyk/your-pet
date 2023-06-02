import { toast, ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { LogoutBtn } from '../Buttons/LogoutBtn/LogoutBtn';
import {
  updateUser,
  deleteUsersAvatar,
  updateUserAvatar,
} from 'redux/auth/auth-operations';

import { UserDataItem } from 'components/UserDataItem/UserDataItem';
// ============
import { useAuth } from '../../hooks/useAuth';

// ================
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
  const {
    user: { email, name, birthday, phone, city, avatarURL },
  } = useAuth();

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
      const value = new FormData();
      value.append('image', imgFile);

      await dispatch(updateUserAvatar({ value }));
    }
  };

  return (
    <>
      <Title>My information:</Title>
      <Wrapper>
        <ToastContainer position="top-right" autoClose={5000} theme="colored" />
        <ImageContainer>
          <ImageWrapper>
            <StyledImage
              alt="user photo"
              src={!avatarURL ? noAvatar : avatarURL}
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
            field="name"
            initValue={name ? { name } : { name: '' }}
            setUser={async value => {
              if (value.name === name) {
                return;
              }
              await dispatch(updateUser({ name: value.name }));
            }}
          ></UserDataItem>
          <UserDataItem
            field="email"
            initValue={email ? { email } : { email: '' }}
            setUser={async value => {
              if (value.email === email) {
                return;
              }
              await dispatch(updateUser({ email: value.email }));
            }}
          ></UserDataItem>
          <UserDataItem
            field="birthday"
            initValue={
              birthday
                ? { birthday }
                : { birthday: '00.00.0000' }
            }
            setUser={async value => {
              if (value.birthday === birthday) {
                return;
              }
              await dispatch(updateUser({ birthday: value.birthday }));
            }}
          ></UserDataItem>
          <UserDataItem
            field="phone"
            initValue={phone ? { phone } : { phone: '' }}
            setUser={async value => {
              if (value.phone === phone) {
                return;
              }
              await dispatch(updateUser({ phone: value.phone }));
            }}
          ></UserDataItem>
          <UserDataItem
            field="city"
            initValue={city ? { city } : { city: '' }}
            setUser={async value => {
              console.log(value);
              if (value.city === city) {
                return;
              }
              await dispatch(updateUser({ city: value.city }));
            }}
          ></UserDataItem>
          <LogoutBtn />
        </UserItemWrapper>
      </Wrapper>
    </>
  );
};
