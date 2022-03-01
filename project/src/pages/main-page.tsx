import Main, { MainProps } from '../components/main/main';

export default function MainPage({ offersCount, apartments }: MainProps): JSX.Element {
  return (
    <Main offersCount={offersCount} apartments={apartments} />
  );
}
