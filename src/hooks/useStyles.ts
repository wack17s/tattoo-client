import * as React from 'react';

import { IStyle } from '../styles.types';

export const useStyles = (): [IStyle[] | null, React.Dispatch<React.SetStateAction<IStyle>>] => {
  const [selectedStyles, selectStyles] = React.useState<IStyle[]>([]);

  React.useEffect(() => {
    const savedStyles = localStorage.getItem('styles');

    if (savedStyles) {
      selectStyles(JSON.parse(savedStyles));
    }
  }, []);

  const selectNewStyle = (style: IStyle) => {
    const newStylesList = selectedStyles.some(item => item.id === style.id) ? [...selectedStyles.filter(item => item.id !== style.id)] : [...selectedStyles, style];

    if (newStylesList.length) {
      localStorage.setItem('styles', JSON.stringify(newStylesList));
    } else {
      localStorage.removeItem('styles');
    }

    selectStyles([...newStylesList]);
  }

  return [selectedStyles, selectNewStyle];
};
