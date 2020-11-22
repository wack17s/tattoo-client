import useSWR from 'swr';

import { fetcher } from '../utils/fetcher';
import { ITattooerDTO } from '../dto/tattooer.dto';

export const useTattooer = (instagram: string): { tattooer?: ITattooerDTO; error?: any } => {
  const { data, error } = useSWR<ITattooerDTO>(`api/tattooers/${instagram}`, fetcher);

  return {
    error,
    tattooer: data,
  }
}
