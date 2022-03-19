import Main, { MainProps } from '../components/main/main';

export default function MainPage({ offersCount, apartments,city }: MainProps): JSX.Element {
  return (
    <Main offersCount={offersCount} apartments={apartments} city={city} />
  );
}
