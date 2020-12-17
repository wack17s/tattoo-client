import { Language } from '../localizations.types';

export const sortByLang = (lang: string | Language, data: any[]) => {
  return data.sort((a, b) => a[lang] > b[lang] ? 1 : -1);
};
