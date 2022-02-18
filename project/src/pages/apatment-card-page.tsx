import { useParams } from 'react-router-dom';
import ApartmentCard from '../components/aprtment-card/apartment-card';
import { apartments } from '../const';


export default function ApartmentCardPage(): JSX.Element {
  const params = useParams();
  const idValue = Number(params.id);
  return (
    <div className="cities__places-list places__list tabs__content">
      <ApartmentCard
        key={idValue}
        id={idValue}
        cardImg={apartments[idValue].cardImg}
        priceValue={apartments[idValue].priceValue}
        priceText={apartments[idValue].priceText}
        cardName={apartments[idValue].cardName}
        cardType={apartments[idValue].cardType}
      />
    </div>
  );
}
