//import { ToastContainer, toast } from 'react-toastify';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LogoutBtn } from '../Buttons/LogoutBtn/LogoutBtn';
import { updateUser, deleteUsersAvatar } from 'redux/auth/auth-operations';
import { UserDataItem } from 'components/UserDataItem/UserDataItem';
// ============
import { useAuth } from '../../hooks/useAutn';

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
  const [isDisabledBtn, setIsDisabledBtn] = useState(false);
  const { email, name, birthday, phone, city, avatarURL } = useAuth();

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
          ></UserDataItem>{' '}
          <LogoutBtn />
        </UserItemWrapper>
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

// import { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// import { useAuth } from 'hooks/useAuth';
// import { updateFetch } from 'api/auth';
// import { logOut, userCurrent } from 'redux/auth/authService';

// import { Formik } from 'formik';

// import { ModalApproveAction } from 'components/ModalApproveAction/ModalApproveAction';
// import { UserDataItem } from './UserDataItem/UserDataItem';
// import { AvatarUploadInput } from './AvatarUploadInput/AvatarUploadInput';
// import { LogOut } from '../buttons/buttons';
// import { profileSchema } from 'helpers/yupValidation';
// import {
//   ProfileTitle,
//   ProfileInputWrapper,
//   ProfileInfo,
// } from './UserData.styled';

// const inputs = [
//   { type: 'text', name: 'name', placeholder: 'Enter your name' },
//   { type: 'text', name: 'email', placeholder: 'example@mail.com' },
//   { type: 'date', name: 'birthday', placeholder: '01.01.2000' },
//   { type: 'tel', name: 'phone', placeholder: '+380000000000' },
//   { type: 'text', name: 'city', placeholder: 'Kyiv' },
// ];

// const initialEditStatus = {
//   name: false,
//   email: false,
//   birthday: false,
//   phone: false,
//   city: false,
//   photo: false,
//   refresh: true,
// };

// export const UserData = () => {
//   const [isEditingBlocked, setIsEditingBlocked] = useState(initialEditStatus);
//   const [isLogOut, setIsLogOut] = useState(false);
//   const [isNewUser, setIsNewUser] = useState(false);
//   const { user } = useAuth();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (user.newUser) {
//       setIsNewUser(true);
//     }
//   }, [user]);

//   useEffect(() => {
//     dispatch(userCurrent());
//   }, [dispatch]);

//   const handleCongratsOut = () => {
//     setIsNewUser(false);
//   };

//   const handleLogOut = () => {
//     setIsLogOut(true);
//   };

//   const handleLogOutCancel = () => {
//     setIsLogOut(false);
//   };

//   const handleEditBlock = name => {
//     const newEditStatus = { ...initialEditStatus, [name]: true };
//     console.log(newEditStatus);
//     setIsEditingBlocked(newEditStatus);
//   };

//   const handleLogOutYes = async () => {
//     try {
//       dispatch(logOut());
//       setIsLogOut(false);
//       navigate('/');
//     } catch (error) {}
//   };

//   //SUBMIT
//   const handleOnSubmit = async values => {
//     const keys = Object.keys(values);
//     const formData = new FormData();

//     keys.forEach(key => {
//       if (values[key] && key !== 'file' && key !== 'email') {
//         formData.append(key, values[key]);
//       }
//       if (values.email !== user.email) {
//         formData.append('email', values.email);
//       }
//     });

//     if (values.file) {
//       formData.append('file', values.file, 'User`s photo');
//     }

//     for (const pair of formData.entries()) {
//       console.log(pair[0] + ': ' + pair[1]);
//     }
//     try {
//       const { body } = await updateFetch(formData);
//       console.log(body);
//       // dispatch(updateUser(formData));
//       dispatch(userCurrent());
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       <div>
//         <ProfileTitle>My information:</ProfileTitle>
//         <ProfileInfo>
//           <Formik
//             initialValues={{
//               name: user.name || '',
//               email: user.email || '',
//               birthday: user.birthday
//                 ? user.birthday.slice(0, 10)
//                 : '1999-01-01',
//               phone: user.phone || '',
//               city: user.city || '',
//               file: '',
//             }}
//             onSubmit={handleOnSubmit}
//             validationSchema={profileSchema}
//           >
//             {({ values, errors, touched, handleSubmit }) => {
//               return (
//                 <>
//                   <AvatarUploadInput
//                     errors={errors}
//                     touched={touched}
//                     isEditingBlocked={isEditingBlocked}
//                     avatar={user.avatarURL}
//                     onEditClick={handleEditBlock}
//                     onFormSubmit={handleSubmit}
//                   />
//                   <ProfileInputWrapper>
//                     {inputs.map(input => {
//                       const { type, name, placeholder } = input;
//                       return (
//                         <UserDataItem
//                           key={name}
//                           type={type}
//                           name={name}
//                           placeholder={placeholder}
//                           isEditingBlocked={isEditingBlocked}
//                           errors={errors}
//                           touched={touched}
//                           onEditClick={handleEditBlock}
//                           onFormSubmit={handleSubmit}
//                         />
//                       );
//                     })}
//                   </ProfileInputWrapper>
//                 </>
//               );
//             }}
//           </Formik>
//           <LogOut onClick={handleLogOut} />
//         </ProfileInfo>
//       </div>
//       {isLogOut && (
//         <ModalApproveAction
//           onActivate={handleLogOutYes}
//           onClick={handleLogOutCancel}
//           variant={'logOut'}
//         />
//       )}
//       {isNewUser && (
//         <ModalApproveAction onClick={handleCongratsOut} variant={'congrats'} />
//       )}
//     </>
//   );
// };
