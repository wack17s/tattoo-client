import { useSelectedCity } from './useSelectedCity'
import { useSelectedStyles } from './useSelectedStyles'

export const useTattooersQuery = () => {
  const [selectedCity] = useSelectedCity();
  const [selectedStyles] = useSelectedStyles();

  const query: { city?: string; styles?: string; } = {};

  if (selectedCity) {
    query.city = `${selectedCity.name}`;
  }

  if (selectedStyles && selectedStyles.length) {
    query.styles = selectedStyles.map(item => item.name).join(',');
  }

  return query;
}
