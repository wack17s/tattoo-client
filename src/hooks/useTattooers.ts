import useSWR from 'swr';

import { encodeQueryData } from '../utils/encodeQueryData';
import { fetcher } from '../utils/fetcher';
import { ITattooerDTO } from '../dto/tattooer.dto';

export const useTattooers = (city?: string, styles?: string[]): { tattooers?: ITattooerDTO[]; error?: any } => {

  const query = city || styles && styles.length ? `?${encodeQueryData({ city, styles: styles.join(',') })}` : '';

  const { data, error } = useSWR<ITattooerDTO[]>(`api/tattooers${query}`, fetcher);

  // const { data, error } = useSWR<ITattooerDTO[]>(`api/instaPost?postId=CGPwwSjFgCE`, fetcher);

  return {
    error,
    tattooers: data
  }
}
