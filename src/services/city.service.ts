import { fetcher } from './../utils/fetcher';
import { ICity } from '../types/city';

class CityService {
  private cities: ICity[] | null = null;

  private fetchCities = async () => {
    console.log('process.env.NEXT_PUBLIC_ACCESS_TOKEN', process.env.NEXT_PUBLIC_ACCESS_TOKEN)
    this.cities = (await fetcher('https://tattoo-backend17.herokuapp.com/city', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
        Accept: 'application/json',
      },
    })) || [];
  }

  public getCities = async (): Promise<ICity[]> => {
    if (!this.cities) {
      await this.fetchCities();
    }

    return this.cities;
  }

  public getCityByName = async (name: string): Promise<ICity | null> => {
    if (!this.cities) {
      await this.fetchCities();
    }

    return this.cities.find(item => item.name === name) || null;
  }

  public getCityById = async (id: string): Promise<ICity | null> => {
    if (!this.cities) {
      await this.fetchCities();
    }

    return this.cities.find(item => item.id === id) || null;
  }
}

export const cityService = new CityService();
