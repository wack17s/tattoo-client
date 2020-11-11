import { Language } from '../localizations.types';

import { styles } from '../styles';

export const getSortedStyles = (lang: string = Language.EN) => {
  return styles.sort((a, b) => a[lang] > b[lang] ? 1 : -1);
};
