import React from 'react';
import { UserData } from '../../components/UserData/UserData';
import { Logout } from '../../components/Logout/Logout';
import { PetsData } from '../../components/PetsData/PetsData';
import css from '../../components/UserData/UserData.module.css';

export const Profile = () => {
  return (
    <section className={css.profile}>
      <div>
        <h3 className={css.profile__title}>My information:</h3>
        <UserData />
        <Logout />
      </div>
      <div>
        <h3 className={css.profile__title}>My pets:</h3>
        <PetsData />
      </div>
    </section>
  );
};
