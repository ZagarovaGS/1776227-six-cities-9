import Favorities, { FavoritesCardProps } from '../components/favorities/favorities';

export default function FavoritiesPage({ apartments }: FavoritesCardProps) {
  return (
    <Favorities apartments={apartments} />
  );
}
