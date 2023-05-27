import React from 'react';
import { useSelector } from 'react-redux';
import { UserData } from '../../components/UserData/UserData';
import { selectUser } from '../../redux/auth/auth-selectors';

import { PetsData } from '../../components/PetsData/PetsData';
import {
  Section,
  WrapperUser,
  StyledWrapper,
} from 'components/UserData/UserData.styled';

export const Profile = () => {
  const user = useSelector(selectUser);
  return (
    <Section>
      <WrapperUser>
        <StyledWrapper>
          <UserData user={user} />
        </StyledWrapper>{' '}
        <PetsData />
      </WrapperUser>
    </Section>
  );
};
