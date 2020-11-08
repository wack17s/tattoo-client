import { Language } from '../types/language.enum';

import { styles } from '../styles';

export const getSortedStyles = (lang: string = Language.EN) => {
  return styles.sort((a, b) => a[lang] > b[lang] ? 1 : -1);
};
