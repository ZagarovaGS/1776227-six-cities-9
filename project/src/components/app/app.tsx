import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import FavoritiesPage from '../../pages/favorities-page';
import LoginPage from '../../pages/login-page';
import MainPage from '../../pages/main-page';
import NotFoundPage from '../../pages/not-found-page';
import PropertyPage from '../../pages/property-page';
import { Reviews } from '../../types/comment-types';
import { Apartments, City } from '../../types/offer-type';
import Layout from '../layout';
import PrivateRoute from '../private-route/private-route';


type AppProps = {
  offersCount: number;
  apartments: Apartments;
  city: City;
  reviews: Reviews[];
}

function App({ offersCount, apartments, city, reviews }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout />}>
          <Route index element={<MainPage offersCount={offersCount} apartments={apartments} city={city} />} />
          <Route path={AppRoute.Favorites} element={<PrivateRoute authorizationStatus={AuthorizationStatus.Auth}><FavoritiesPage apartments={apartments} /></PrivateRoute>} />
          <Route path={'offer/:id'} element={<PropertyPage reviews={reviews} apartments={apartments} city={city} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path={AppRoute.Login} element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
