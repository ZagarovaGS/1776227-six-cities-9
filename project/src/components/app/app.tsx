import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import ApartmentCardPage from '../../pages/apatment-card-page';
import FavoritiesPage from '../../pages/favorities-page';
import LoginPage from '../../pages/login-page';
import MainPage from '../../pages/main-page';
import NotFoundPage from '../../pages/not-found-page';
import PropertyPage from '../../pages/property-page';
import ApartmentLayout from '../apartmentLayout';
import Layout from '../layout';
import PrivateRoute from '../private-route/private-route';

type WellcomeScreenProps = {
  offersCount: number;
}

function App({ offersCount }: WellcomeScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout />}>
          <Route index element={<MainPage offersCount={offersCount} />} />
          <Route path={AppRoute.Favorities} element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><FavoritiesPage /></PrivateRoute>} />
          <Route path={AppRoute.Room} element={<ApartmentLayout />}>
            <Route index element={<PropertyPage />} />
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
