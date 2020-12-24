import { fetcher } from './../utils/fetcher';
import { ITattooer } from '../types/tattooer';

import { StyleService } from './style.service';
import { CityService } from './city.service';

export class TattooerService {
  private tattooers: ITattooer[] = [];
  private backendUrl: string;
  private accessToken: string;

  public constructor({ backendUrl, accessToken }) {
    this.backendUrl = backendUrl;
    this.accessToken = accessToken;
  }


  public fetchTattooers = async (cityService: CityService, styleService: StyleService) => {
    const allTattooers: ITattooer[] = (await fetcher(`${this.backendUrl}/tattooer`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.accessToken}`,
        Accept: 'application/json',
      },
    })) || [];

    this.tattooers = allTattooers.filter(item => !!item.readyToShow).map(item => ({
      ...item,
      city: item.city_id ? cityService.getCityById(item.city_id) : undefined,
      styles: item.style_ids && item.style_ids.length ? item.style_ids.map(item => styleService.getStyleById(item)).filter(item => !!item) : undefined
    }));
  }

  public getTattooers = ({ cityName, styleNames }: { cityName?: string; styleNames?: string[]; } = {}): ITattooer[] => {
    let res = this.tattooers;

    if (cityName) {
      res = res.filter(item => item.city && item.city.name === cityName)
    }

    if (styleNames) {
      res = res.filter(item => item.styles.some(style => styleNames.includes(style.name)));
    }

    return res;
  }

  public getTattooersByCity = (cityName?: string): ITattooer[] => {
    return this.tattooers.filter(item => item.city && item.city.name === cityName);
  }

  public getTattooer = (instagram: string): ITattooer | null => {
    return this.tattooers.find(item => item.instagram === instagram) || null;
  }
}
