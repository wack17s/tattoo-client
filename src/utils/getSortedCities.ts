import { Language } from '../types/language.enum';

import { cities } from '../cities';

export const getSortedCities = (lang: string = Language.RU) => {
  return cities.sort((a, b) => a[lang] > b[lang] ? 1 : -1);
};
