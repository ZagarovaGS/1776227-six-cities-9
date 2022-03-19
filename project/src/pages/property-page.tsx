import Property from '../components/property/property';
import { useParams } from 'react-router-dom';
import { Apartments, City } from '../types/offer-type';
import { Reviews } from '../types/comment-types';

type PropertyPageProps = {
  reviews: Reviews[];
  apartments: Apartments;
  city: City;
}

export default function PropertyPage({ reviews, apartments, city }: PropertyPageProps) {
  const params = useParams();
  const id = Number(params.id);
  const apartment = apartments.find((item) => item.id === id)!;

  return (
    <Property apartment={apartment} reviews={reviews} apartments={apartments} city={city} />
  );
}
