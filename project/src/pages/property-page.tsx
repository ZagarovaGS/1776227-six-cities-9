import Property from '../components/property/property';
import { useParams } from 'react-router-dom';
import { Apartments } from '../types/offer-type';
import { Reviews } from '../types/comment-types';
import { useAppSelector } from '../hooks';
import { useEffect } from 'react';
import { store } from '../store';
import { fetchNearby, fetchReviews, sendComment } from '../store/api-action';
import NotFoundPage from './not-found-page';

type PropertyPageProps = {
  reviews?: Reviews[] | null;
  apartments: Apartments;
}

export default function PropertyPage({ apartments }: PropertyPageProps) {
  const params = useParams();
  const id = Number(params.id);
  const apartment = apartments.find((item) => item.id === id)!;

  useEffect(() => {
    store.dispatch(fetchNearby(id));
    store.dispatch(fetchReviews(id));
  }, [id]);


  const nearPlaces = useAppSelector((state) => state.nearby);
  const commentObject = useAppSelector((state) => state.comments);


  if (id && id > apartments.length) {
    return <NotFoundPage />;
  } else {
    return (
      <Property apartment={apartment} reviews={commentObject} apartments={nearPlaces} />
    );
  }
}
