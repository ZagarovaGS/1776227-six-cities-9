import { useParams } from 'react-router-dom';
import ApartmentCard from '../components/apartment-card/apartment-card';
import { apartments } from '../mocks/offer';

export default function ApartmentCardPage() {
  const params = useParams();
  const id = Number(params.id);
  return (
    <ApartmentCard
      previewImage={apartments[id - 1].previewImage}
      price={apartments[id - 1].price}
      rating={apartments[id - 1].rating}
      title={apartments[id - 1].title}
      type={apartments[id - 1].type}
    />
  );
}
