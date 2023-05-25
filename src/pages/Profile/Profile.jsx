import React from 'react';
import { useSelector } from 'react-redux';
import { UserData } from '../../components/UserData/UserData';
import { selectUser } from '../../redux/auth/auth-selectors';

import { PetsData } from '../../components/PetsData/PetsData';
import { Title, Section } from 'components/UserData/UserData.styled';

export const Profile = () => {
  const user = useSelector(selectUser);
  return (
    <Section>
      <div>
        <Title>My information:</Title>
        <UserData user={user} />
      </div>
      <div>
        <Title>My pets:</Title>
        <PetsData />
      </div>
    </Section>
  );
};
