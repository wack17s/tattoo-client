import { fetcher } from './../utils/fetcher';
import { ICity } from '../types/city';

export class CityService {
  private cities: ICity[] = [];
  private backendUrl: string;
  private accessToken: string;

  public constructor({ backendUrl, accessToken }) {
    this.backendUrl = backendUrl;
    this.accessToken = accessToken;
  }

  public fetchCities = async () => {
    this.cities = (await fetcher(`${this.backendUrl}/city`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.accessToken}`,
        Accept: 'application/json',
      },
    })) || [];
  }

  public getCities = (): ICity[] => {
    return this.cities;
  }

  public getCityByName = (name: string): ICity | null => {
    return this.cities.find(item => item.name === name) || null;
  }

  public getCityById = (id: string): ICity | null => {
    return this.cities.find(item => item.id === id) || null;
  }
}
