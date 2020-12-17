import { cityService } from './../services/city.service';
import * as React from 'react';

import { ICity } from '../types/city';

export const useCities = (): [ICity[]] => {
  const [cities, setCities] = React.useState<ICity[]>([]);

  React.useEffect(() => {
    const setCitiesAsync = async () => {
      const cities = await cityService.getCities();

      if (cities) {
        setCities(cities);
      }
    }

    setCitiesAsync();
  }, []);

  return [cities];
};
