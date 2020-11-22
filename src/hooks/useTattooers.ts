import useSWR from 'swr';

import { encodeQueryData } from '../utils/encodeQueryData';
import { fetcher } from '../utils/fetcher';
import { ITattooerDTO } from '../dto/tattooer.dto';
import { ICity } from '../cities.types';
import { IStyle } from '../styles.types';

export const useTattooers = (city?: ICity, styles?: IStyle[]): { tattooers?: ITattooerDTO[]; error?: any } => {
  const queryObject = {
    city: city ? city.id : undefined,
    styles: styles && styles.length ? styles.map(item => item.id).join(',') : undefined
  }

  const query = city || (styles && styles.length) ? `?${encodeQueryData(JSON.parse(JSON.stringify(queryObject)))}` : '';

  const { data, error } = useSWR<ITattooerDTO[]>(`api/tattooers${query}`, fetcher);

  // const { data, error } = useSWR<ITattooerDTO[]>(`api/instaPost?postId=CGPwwSjFgCE`, fetcher);

  return {
    error,
    tattooers: data
  }
}
