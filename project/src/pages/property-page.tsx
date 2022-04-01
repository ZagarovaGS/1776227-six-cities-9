import Property from '../components/property/property';
import { useParams } from 'react-router-dom';
import { Apartments } from '../types/offer-type';
import { Reviews } from '../types/comment-types';

type PropertyPageProps = {
  reviews: Reviews[];
  apartments: Apartments;
}

export default function PropertyPage({ reviews, apartments }: PropertyPageProps) {
  const params = useParams();
  const id = Number(params.id);
  const apartment = apartments.find((item) => item.id === id)!;
  const activeApartment = apartments[id];

  return (
    <Property apartment={apartment} reviews={reviews} apartments={apartments} activeApartment={activeApartment} />
  );
}
