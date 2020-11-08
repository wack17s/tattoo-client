import { useCity } from './useCity'
import { useStyles } from './useStyles'

export const useTattooersQuery = () => {
  const [selectedCity] = useCity();
  const [selectedStyles] = useStyles();

  const query: { city?: string; styles?: string; } = {};

  if (selectedCity) {
    query.city = `${selectedCity.id}`;
  }

  if (selectedStyles && selectedStyles.length) {
    query.styles = selectedStyles.map(item => item.id).join(',');
  }

  return query;
}
