import { fetcher } from './../utils/fetcher';
import { ITattooer } from '../types/tattooer';

import { styleService } from './style.service';
import { cityService } from './city.service';

class TattooerService {
  private tattooers: ITattooer[] | null = null;

  private fetchTattooers = async () => {
    console.log('process.env.NEXT_PUBLIC_ACCESS_TOKEN', process.env.NEXT_PUBLIC_ACCESS_TOKEN)
    const allTattooers: ITattooer[] = (await fetcher('https://tattoo-backend17.herokuapp.com/tattooer', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
        Accept: 'application/json',
      },
    })) || [];

    this.tattooers = await Promise.all(allTattooers.filter(item => !!item.readyToShow).map(async item => ({
      ...item,
      city: item.city_id ? await cityService.getCityById(item.city_id) : undefined,
      styles: item.style_ids && item.style_ids.length ? (await Promise.all(item.style_ids.map(item => styleService.getStyleById(item)))).filter(item => !!item) : undefined
    })));
  }

  public getTattooers = async (): Promise<ITattooer[]> => {
    if (!this.tattooers) {
      await this.fetchTattooers();
    }

    return this.tattooers;
  }

  public getTattooer = async (instagram: string): Promise<ITattooer | null> => {
    if (!this.tattooers) {
      await this.fetchTattooers();
    }

    return this.tattooers.find(item => item.instagram === instagram) || null;
  }
}

export const tattooerService = new TattooerService();
