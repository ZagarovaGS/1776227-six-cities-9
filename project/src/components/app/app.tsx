import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import FavoritiesPage from '../../pages/favorities-page';
import LoginPage from '../../pages/login-page';
import NotFoundPage from '../../pages/not-found-page';
import PropertyPage from '../../pages/property-page';
import { Reviews } from '../../types/comment-types';
import Layout from '../layout';
import PrivateRoute from '../private-route/private-route';
import { useAppSelector } from '../../hooks';
import Main from '../main/main';


type AppProps = {
  reviews: Reviews[];
}

function App({ reviews }: AppProps): JSX.Element {
  const apartments = useAppSelector((state) => state.apartments);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout />}>
          <Route index element={<Main />} />
          <Route path={AppRoute.Favorites} element={<PrivateRoute authorizationStatus={AuthorizationStatus.Auth}><FavoritiesPage apartments={apartments} /></PrivateRoute>} />
          <Route path={'offer/:id'} element={<PropertyPage reviews={reviews} apartments={apartments} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path={AppRoute.Login} element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
