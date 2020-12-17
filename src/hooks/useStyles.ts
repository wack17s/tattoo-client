import { styleService } from './../services/style.service';
import * as React from 'react';

import { IStyle } from '../types/style';

export const useStyles = (): [IStyle[]] => {
  const [styles, setStyles] = React.useState<IStyle[]>([]);

  React.useEffect(() => {
    const setStylesAsync = async () => {
      const styles = await styleService.getStyles();

      if (styles) {
        setStyles(styles);
      }
    }

    setStylesAsync();
  }, []);

  return [styles];
};
