import { Apartment, Apartments } from '../types/offer-type';
import ApartmentCard from './apartment-card/apartment-card';


type ApartmentListProps = {
  apartments: Apartments;
  activeCardHandler: (apartment: Apartment | null) => void;
}

export default function ApartmentList({ apartments, activeCardHandler }: ApartmentListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {apartments.map((apartment) => (
        <ApartmentCard
          key={apartment.id}
          apartment={apartment}
          activeCardHandler={activeCardHandler}
        />
      ),
      )};
    </div>
  );
}
