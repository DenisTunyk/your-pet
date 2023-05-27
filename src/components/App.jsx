import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';

// import { Header } from './Header/Header';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';

import AddPetPage from '../pages/AddPetPage/AddPetPage';
import { News } from '../pages/News/News';
import { Profile } from '../pages/Profile/Profile';
import { NoticesPage } from '../pages/NoticesPage/NoticesPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import SharedLayout from './SharedLayout/SharedLayout';
import { HomePage } from '../pages/HomePage/HomePage';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { OurFriend } from 'pages/OurFriend/OurFriend';
import { FriendList } from './FriendsList/FriendsList';

export const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/add-pet" element={<AddPetPage />} />
          <Route path="/main" element={<HomePage />} />
          <Route path="/news" element={<News />} />
          <Route path="/ourfriend" element={<OurFriend />} />
          <Route
            path="login"
            element={
              <RestrictedRoute
                redirectTo="/profile"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="registration"
            element={
              <RestrictedRoute
                redirectTo="/profile"
                component={<RegisterPage />}
              />
            }
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notices/">
            <Route index element={<Navigate to="/notices/sell" />} />
            <Route path=":categoryName" element={<NoticesPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <FriendList />
    </div>
  );
};
