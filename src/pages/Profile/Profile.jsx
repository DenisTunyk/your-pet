import React from 'react';
import { useSelector } from 'react-redux';
import { UserData } from '../../components/UserData/UserData';
import { selectUser } from '../../redux/auth/auth-selectors';

import { PetsData } from '../../components/PetsData/PetsData';
import {
  WrapperUser,
  StyledWrapper,
} from 'components/UserData/UserData.styled';
import { Container } from './Profile.styled';
import { useAuth } from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
  const user = useSelector(selectUser);
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate('/', { replace: true });
  }

  return (
    <Container>
      <WrapperUser>
        <StyledWrapper>
          <UserData user={user} />
        </StyledWrapper>{' '}
        <PetsData />
      </WrapperUser>
    </Container>
  );
};
