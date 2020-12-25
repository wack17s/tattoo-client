import * as React from 'react';

import { ITattooer } from '../../types/tattooer';
import { dataService } from '../../services/data.service';

import { Tattooer } from '../Tattooer';
import { Tattooers } from '../Tattooers';
import { ICity } from '../../types/city';
import { IStyle } from '../../types/style';

interface ITattooerTattooersProps {
  cities: ICity[];
  styles: IStyle[];

  city: ICity | null;

  tattooer: ITattooer | null;
  tattooers: ITattooer[] | null;
}

export const TattooerTattooers: React.FunctionComponent<ITattooerTattooersProps> = ({ tattooer, tattooers, city, cities, styles }) => {
if (tattooer) {
    return <Tattooer tattooer={tattooer} />
  }

  if (tattooers) {
    return <Tattooers cities={cities} styles={styles} city={city} tattooers={tattooers} />
  }

  return null;
}

export async function getStaticProps(context) {
  const slug = context.params.superslug as string;

  await dataService.init();
  const { usedCities, usedStyles, allTattooers } = dataService.getData();

  const props: ITattooerTattooersProps = {
    cities: usedCities,
    styles: usedStyles,
    tattooers: null,
    tattooer: null,
    city: null
  }

  if (usedCities.some(item => item.name ===  slug)) {
    const { filteredTattooers, usedStyles } = dataService.getData({ cityName: slug });

    props.tattooers = filteredTattooers;
    props.city = usedCities.find(item => item.name === slug) || null;
    props.styles = usedStyles;
  } else if (slug === 'tattooers') {
    props.tattooers = allTattooers;
  } else if (allTattooers.some(item => item.instagram === slug)) {
    props.tattooer = dataService.getTattooer(slug);
  } else {
    return {
      notFound: true
    }
  }

  return {
    props: JSON.parse(JSON.stringify(props))
  }
}
