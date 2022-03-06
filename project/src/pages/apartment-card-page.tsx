import { useParams } from 'react-router-dom';
import ApartmentCard, { ApartmentCardProps } from '../components/apartment-card/apartment-card';
import { apartments } from '../mocks/offer';
import { CardProp, CardProps } from '../types/offer-type';

type ApartmentPageProps = {
  activeCardHandler: Function;
}
export default function ApartmentCardPage({ activeCardHandler }: ApartmentPageProps) {
  const params = useParams();
  const id = Number(params.id);
  const apartment = apartments.find((item) => item.id === id)!;
  if (apartments) {
    return (
      <ApartmentCard
        previewImage={apartment.previewImage}
        price={apartment.price}
        rating={apartment.rating}
        title={apartment.title}
        type={apartment.type}
        activeCardHandler={activeCardHandler}
      />
    );
  };
}
