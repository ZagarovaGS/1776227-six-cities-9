import Property from '../components/property/property';
import { useParams } from 'react-router-dom';
import { apartments } from '../mocks/offer';

export default function ProtertyPage() {
  const params = useParams();
  const id = Number(params.id);
  const apartment = apartments.find((item) => item.id === id)!;

  return (
    <Property
      previewImage={apartment.previewImage}
      price={apartment.price}
      rating={apartment.rating}
      title={apartment.title}
      type={apartment.type}
    />
  );

}

