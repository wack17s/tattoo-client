import _ from 'lodash';

import { dataService } from '../services/data.service';
import { TattooerTattooers, getStaticProps } from '../screens/TattooerTattooers';

export { getStaticProps };

export async function getStaticPaths() {
  await dataService.init();

  const { usedCities, allTattooers } = dataService.getData();

  // const pagesCount = Math.floor(tattooers.length / Number(process.env.NEXT_PUBLIC_PER_PAGE));

  // const pagesSlugs = new Array(pagesCount).fill('tattooers', 0, pagesCount).map((item, index) => index ? `${item}-${index + 1}` : item);
  const citiesSlugs = usedCities.map(item => item.name);

  const tattooerPaths = allTattooers.map(tattooer => ([{
    params: { superslug: tattooer.instagram }, locale: 'ru'
  }, {
    params: { superslug: tattooer.instagram }, locale: 'ua'
  }]));

  // const pagesPaths = pagesSlugs.map(pagesSlug => ([{
  //   params: { superslug: pagesSlug }, locale: 'ru'
  // }, {
  //   params: { superslug: pagesSlug }, locale: 'ua'
  // }]));

  const citiesPaths = citiesSlugs.map(citySlug => ([{
    params: { superslug: citySlug }, locale: 'ru'
  }, {
    params: { superslug: citySlug }, locale: 'ua'
  }]));

  const tattooerPath = [
    {
      params: { superslug: 'tattooers' }, locale: 'ru'
    }, {
      params: { superslug: 'tattooers' }, locale: 'ua'
    }
  ]

  return {
    paths: _.flatten([...tattooerPaths, ...citiesPaths, ...tattooerPath]),
    fallback: false,
  }
}

export default TattooerTattooers;
