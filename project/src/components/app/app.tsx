import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import FavoritiesPage from '../../pages/favorities-page';
import LoginPage from '../../pages/login-page';
import NotFoundPage from '../../pages/not-found-page';
import PropertyPage from '../../pages/property-page';
import {Reviews} from '../../types/comment-types';
import Layout from '../layout';
import PrivateRoute from '../private-route/private-route';
import {useAppSelector} from '../../hooks';
import Main from '../main/main';
import LoadingScreen from '../loading-screen';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';


type AppProps = {
  reviews: Reviews[];
}
export const isUnknownAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

function App({ reviews }: AppProps): JSX.Element {
  const apartments = useAppSelector((state) => state.apartments);

  const { authorizationStatus, isDataLoaded } = useAppSelector((state) => state);

  if (isUnknownAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout />}>
          <Route index element={<Main />} />
          <Route path={AppRoute.Favorites} element={<PrivateRoute authorizationStatus={authorizationStatus}><FavoritiesPage apartments={apartments} /></PrivateRoute>} />
          <Route path={'offer/:id'} element={<PropertyPage apartments={apartments} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path={AppRoute.Login} element={<LoginPage />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
