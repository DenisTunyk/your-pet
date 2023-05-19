import React from 'react';
import { Routes, Route } from 'react-router-dom';


import { Header } from './Header/Header';
import { Home } from '../pages/Home/Home';
import { NotFound } from '../pages/NotFound/NotFound';
import { OurFriend } from '../pages/OurFriend/OurFriend';
import LoginPage  from '../pages/LoginPage/LoginPage';
import { FindPet } from '../pages/FindPet/FindPet';
import { News } from '../pages/News/News';
import { Profile } from '../pages/Profile/Profile';

export const App = () => {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/findpet" element={<FindPet />} />
        <Route path="/news" element={<News />} />
        <Route path="/ourfriend" element={<OurFriend />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
