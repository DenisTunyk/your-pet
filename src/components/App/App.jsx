import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { RestrictedRoute } from '../RestrictedRoute/RestrictedRoute';

// import { Header } from './Header/Header';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';

import AddPetPage from '../../pages/AddPetPage/AddPetPage';
import { News } from '../../pages/News/News';
import { Profile } from '../../pages/Profile/Profile';
import { NoticesPage } from '../../pages/NoticesPage/NoticesPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import SharedLayout from '../SharedLayout/SharedLayout';
import { HomePage } from '../../pages/HomePage/HomePage';
import { RegisterPage } from 'pages/RegisterPage/RegisterPage';
import { OurFriend } from 'pages/OurFriend/OurFriend';
// import { FriendList } from '../FriendsList/FriendsList';
import Theme from '../Theme';
import { Container, LoaderWrapper } from './App.styled';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import { refreshUser } from 'redux/auth/auth-operations';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  ) : (
    <Theme>
      <Container>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/add-pet" element={<AddPetPage />} />
            <Route path="/main" element={<HomePage />} />
            <Route path="/news" element={<News />} />
            <Route path="/friends" element={<OurFriend />} />
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
            <Route
              path="/profile"
              element={
                <PrivateRoute redirectTo="/login" component={<Profile />} />
              }
            />
            <Route path="/notices/">
              <Route index element={<Navigate to="/notices/sell" />} />
              <Route path=":categoryName" element={<NoticesPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Container>
    </Theme>
  );
};
