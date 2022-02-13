import Main from '../main/main';

type WellcomeScreenProps = {
  offersCount: number;
}

function App({ offersCount }: WellcomeScreenProps): JSX.Element {
  return (
    <div>
      <Main offersCount={offersCount} />
    </div>
  );
}

export default App;
