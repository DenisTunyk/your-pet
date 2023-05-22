import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// import { Header } from './Header/Header';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';
import { OurFriend } from '../pages/OurFriend/OurFriend';
import { FindPet } from '../pages/FindPet/FindPet';
import { News } from '../pages/News/News';
import { Profile } from '../pages/Profile/Profile';
import { NoticesPage } from '../pages/NoticesPage/NoticesPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import SharedLayout from './SharedLayout/SharedLayout';
import { HomePage } from '../pages/HomePage/HomePage';

export const App = () => {
  return (
    <div className="container">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/findpet" element={<FindPet />} />
          <Route path="/main" element={<HomePage />} />
          <Route path="/news" element={<News />} />
          <Route path="/ourfriend" element={<OurFriend />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notices/">
            <Route index element={<Navigate to="/notices/sell" />} />
            <Route path=":categoryName" element={<NoticesPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};
