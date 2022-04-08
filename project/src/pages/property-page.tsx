import Property from '../components/property/property';
import { useParams } from 'react-router-dom';
import { Apartments } from '../types/offer-type';
import { useAppSelector } from '../hooks';
import { useEffect, useState } from 'react';
import { store } from '../store';
import { fetchApartment, fetchNearby, fetchReviews } from '../store/api-action';
import NotFoundPage from './not-found-page';
import { setApartment, setNearby, setReview } from '../store/action';
import LoadingScreen from '../components/loading-screen';

type PropertyPageProps = {
  apartments: Apartments;
}

export default function PropertyPage({ apartments }: PropertyPageProps) {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const id = Number(params.id);

  const apartment = useAppSelector(({ APARTMENTS }) => APARTMENTS.apartment);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      await Promise.all([
        store.dispatch(fetchApartment(id)),
        store.dispatch(fetchNearby(id)),
        store.dispatch(fetchReviews(id)),
      ]);
      setIsLoading(false);
    })();
    return () => {
      store.dispatch(setApartment(null));
      store.dispatch(setNearby([]));
      store.dispatch(setReview([]));
    };
  }, [id]);


  if (isLoading) {
    return <LoadingScreen />;
  } else if (apartment) {
    return <Property apartment={apartment} />;
  } else {
    return <NotFoundPage />;
  }
}
