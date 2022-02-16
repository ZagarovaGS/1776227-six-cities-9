import Main from '../components/main/main';

type WellcomeScreenProps = {
  offersCount: number;

}
export default function MainPage({ offersCount }: WellcomeScreenProps): JSX.Element {
  return (
    <Main offersCount={offersCount} />
  );
}
