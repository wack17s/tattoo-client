import * as React from 'react';

import { ITattooer } from '../../types/tattooer';
import { dataService } from '../../services/data.service';

import { Tattooer } from '../Tattooer';
import { Tattooers } from '../Tattooers';
import { ICity } from '../../types/city';
import { IStyle } from '../../types/style';
import { cityTagData } from '../../seo/cityTagData';
import { cityTagDataUa } from '../../seo/cityTagDataUa';
import { generateTagsForTattooer, pageTagData } from '../../seo/pageTagData';
import { generateTagsForTattooerUa, pageTagDataUa } from '../../seo/pageTagDataUa';
import { PageName } from '../../types/pageName.enum';

interface ITattooerTattooersProps {
  cities: ICity[];
  styles: IStyle[];

  city: ICity | null;

  tattooer: ITattooer | null;
  tattooers: ITattooer[] | null;

  descriptionTag?: string;
  titleTag?: string;
}

export const TattooerTattooers: React.FunctionComponent<ITattooerTattooersProps> = ({ tattooer, tattooers, city, cities, styles, titleTag, descriptionTag }) => {
if (tattooer) {
    return <Tattooer titleTag={titleTag} descriptionTag={descriptionTag} tattooer={tattooer} />
  }

  if (tattooers) {
    return <Tattooers titleTag={titleTag} descriptionTag={descriptionTag} cities={cities} styles={styles} city={city} tattooers={tattooers} />
  }

  return null;
}

export async function getStaticProps(context) {
  const slug = context.params.superslug as string;
  const locale = context.locale as string;

  await dataService.init();
  const { usedCities, usedStyles, allTattooers } = dataService.getData();

  const props: ITattooerTattooersProps = {
    cities: usedCities,
    styles: usedStyles,
    tattooers: null,
    tattooer: null,
    city: null,
    descriptionTag: undefined,
    titleTag: undefined,
  }

  if (usedCities.some(item => item.name ===  slug)) {
    const { filteredTattooers, usedStyles } = dataService.getData({ cityName: slug });
    const tagData = locale === 'ua' ? cityTagDataUa : cityTagData;

    props.tattooers = filteredTattooers;
    props.city = usedCities.find(item => item.name === slug) || null;
    props.styles = usedStyles;
    props.titleTag = tagData[slug] ? tagData[slug].title : undefined;
    props.descriptionTag = tagData[slug] ? tagData[slug].description : undefined;
  } else if (slug === 'tattooers') {
    props.tattooers = allTattooers;
    props.titleTag = (locale === 'ua' ? pageTagDataUa : pageTagData)[PageName.TATTOOERS].title;
    props.descriptionTag = (locale === 'ua' ? pageTagDataUa : pageTagData)[PageName.TATTOOERS].description;
  } else if (allTattooers.some(item => item.instagram === slug)) {
    props.tattooer = dataService.getTattooer(slug);
    
    const { title, description } = locale === 'ua' ? generateTagsForTattooerUa(slug) : generateTagsForTattooer(slug);
    props.titleTag = title;
    props.descriptionTag = description;
  } else {
    return {
      notFound: true
    }
  }

  return {
    props: JSON.parse(JSON.stringify(props))
  }
}
