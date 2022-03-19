import { Apartments } from '../types/offer-type';
import NearPlacesCard from './near-places-card';

type NearPlacesListProps = {
  apartments: Apartments;
}

export default function NearPlacesList({ apartments }: NearPlacesListProps) {
  return (
    <div className="near-places__list places__list">
      {apartments.map((apartment) => (
        <NearPlacesCard
          key={apartment.id}
          apartment={apartment}
        />
      ))}
    </div>
  );
}
