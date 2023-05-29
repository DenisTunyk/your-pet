import { ThreeDots } from 'react-loader-spinner';
import { ReactComponent as PlusIcon } from '../../assets/icon/plus.svg';

// import { useEffect } from 'react';
// import { useState } from 'react';

import {
  AddButton,
  Container,
  //   Pictures,
  LoaderUser,
  //   PetsList,
  StyledWrapper,
} from './PetsData.styled';
import { Title } from 'components/UserData/UserData.styled';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAutn';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersNotices } from 'redux/notices/operations';
import { useEffect } from 'react';
import { PetsData as PetsList } from 'components/PetList/PetList';

export const PetsData = () => {
  const navigate = useNavigate();
  const { isLoading } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersNotices())
  }, [dispatch])

  const pets = useSelector(state => state.notices.pets);
  //   const [openModal, setOpenModal] = useState(false);

  //   const { data, isFetching: isLoading } = useGetUserPetsQuery();

  //   useEffect(() => {
  //     if (openModal) {
  //       document.body.style.overflow = 'hidden';
  //     } else {
  //       document.body.style.overflow = 'unset';
  //     }
  //   }, [openModal]);

  //   if (!data) {
  //     return;
  //   }

  //   const { result } = data;
  //   const { pets } = result;
  return (
    <Container>
      <StyledWrapper>
        <Title>My pets:</Title>
        {/* <AddButton onClick={() => setOpenModal(!openModal)}> */}
        <AddButton onClick={() => navigate('/add-pet')}>
          Add pet <PlusIcon stroke="white" />
        </AddButton>
      </StyledWrapper>
      {/* {openModal && (
        <ModalAddUserPet
          onClose={() => setOpenModal(false)}
          isOpen={openModal}
        />
      )} */}
      {/* {isLoading && ( */}
      <LoaderUser>
        {isLoading ? (
          <ThreeDots height="100" width="100" radius="9" color="#54adff" />
        ) : (
          <PetsList pets={pets}/>
        )}
      </LoaderUser>
      {/* )} */}
      {/* {pets.length > 0 && <PetsList pets={pets} />}
      {pets.length === 0 && <Pictures>You don't have any pets added.</Pictures>} */}
    </Container>
  );
};
