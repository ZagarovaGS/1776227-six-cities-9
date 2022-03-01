import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import ApartmentCardPage from '../../pages/apartment-card-page';
import FavoritiesPage from '../../pages/favorities-page';
import LoginPage from '../../pages/login-page';
import MainPage from '../../pages/main-page';
import NotFoundPage from '../../pages/not-found-page';
import { CardProps } from '../../types/offer-type';
import ApartmentLayout from '../apartment-layout';
import Layout from '../layout';
import PrivateRoute from '../private-route/private-route';


type AppProps = {
  offersCount: number;
  apartments: CardProps;
}

function App({ offersCount, apartments }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout />}>
          <Route index element={<MainPage offersCount={offersCount} apartments={apartments} />} />
          <Route path={AppRoute.Favorites} element={<ApartmentLayout />}>
            <Route index element={<PrivateRoute authorizationStatus={AuthorizationStatus.Auth}><FavoritiesPage apartments={apartments} /></PrivateRoute>} />
            <Route path={':id'} element={<ApartmentCardPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path={AppRoute.Login} element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
