import * as React from 'react';

import { ICity } from '../types/city';

export const useSelectedCity = (): [ICity | null, React.Dispatch<React.SetStateAction<ICity>>] => {
  const [selectedCity, setCity] = React.useState<ICity | null>(null);

  React.useEffect(() => {
    const savedCity = localStorage.getItem('city');

    if (savedCity) {
      setCity(JSON.parse(savedCity));
    }
  }, []);

  const setNewCity = (city?: ICity | null) => {
    const newCity = !city || (selectedCity && selectedCity.id === city.id) ? null : city;

    if (newCity) {
      localStorage.setItem('city', JSON.stringify(newCity));
    } else {
      localStorage.removeItem('city');
    }

    localStorage.removeItem('styles');

    setCity(newCity);
  }

  return [selectedCity, setNewCity];
};
