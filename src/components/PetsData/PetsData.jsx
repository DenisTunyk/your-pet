import { ThreeDots } from 'react-loader-spinner';
import { ReactComponent as PlusIcon } from '../../assets/icon/plus.svg';

import {
  AddButton,
  Container,
  LoaderUser,
  StyledWrapper,
} from './PetsData.styled';
import { Title } from 'components/UserData/UserData.styled';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { PetsData as PetsList } from 'components/PetList/PetList';
import { getPets } from 'redux/pets/operations';
import { usePets, useLoading } from 'redux/pets/pets-selectors';

export const PetsData = () => {
  const navigate = useNavigate();
  const isLoading = useSelector(useLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPets());
  }, [dispatch]);

  const pets = useSelector(usePets);

  return (
    <Container>
      <StyledWrapper>
        <Title>My pets:</Title>
        <AddButton onClick={() => navigate('/add-pet')}>
          Add pet <PlusIcon stroke="white" />
        </AddButton>
      </StyledWrapper>
      <LoaderUser>
        {isLoading ? (
          <ThreeDots height="100" width="100" radius="9" color="#54adff" />
        ) : (
          <PetsList pets={pets} />
        )}
      </LoaderUser>
      {/* {pets.length > 0 ? (
        <PetsList pets={pets} />
      ) : (
        <h5>You don't have any pets added.</h5>
      )} */}
    </Container>
  );
};
