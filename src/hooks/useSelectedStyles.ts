import * as React from 'react';

import { IStyle } from '../types/style';

interface IUseSelectedStylesResponse {
  selectedStyles: IStyle[] | null;
  setStyle: (style: IStyle) => void;
  setStyles: (styles: IStyle[]) => void;
}

export const useSelectedStyles = (): IUseSelectedStylesResponse => {
  const [selectedStyles, selectStyles] = React.useState<IStyle[]>([]);

  React.useEffect(() => {
    const savedStyles = localStorage.getItem('styles');

    if (savedStyles) {
      selectStyles(JSON.parse(savedStyles));
    }
  }, []);

  const setStyle = (style: IStyle) => {
    const newStylesList = selectedStyles.some(item => item.id === style.id) ? [...selectedStyles.filter(item => item.id !== style.id)] : [...selectedStyles, style];

    if (newStylesList.length) {
      localStorage.setItem('styles', JSON.stringify(newStylesList));
    } else {
      localStorage.removeItem('styles');
    }

    selectStyles([...newStylesList]);
  }

  const setStyles = (styles: IStyle[]) => {
    if (!styles.length) {
      localStorage.removeItem('styles');
    }

    selectStyles(styles);
  }

  return { selectedStyles, setStyle, setStyles };
};
