import { ICity } from './../types/city';
import { IStyle } from './../types/style';
import { ITattooer } from '../types/tattooer';

import { StyleService } from './style.service';
import { CityService } from './city.service';
import { TattooerService } from './tattooer.service';

class DataService {
  private cityService: CityService;
  private styleService: StyleService;
  private tattooerService: TattooerService;

  private inited: boolean = false;

  public constructor() {
    const config = {
      backendUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
      accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN
    };

    this.cityService = new CityService(config);
    this.styleService = new StyleService(config);
    this.tattooerService = new TattooerService(config);
  }

  public init = async () => {
    if (this.inited) {
      return; 
    }
    
    await this.cityService.fetchCities();
    await this.styleService.fetchStyles();
    await this.tattooerService.fetchTattooers(this.cityService, this.styleService);

    this.inited = true;
  }

  public getData = ({ cityName, styleNames }: { cityName?: string; styleNames?: string[]; } = {}): {
    allTattooers: ITattooer[];
    usedCities: ICity[];
    usedStyles: IStyle[];

    filteredTattooers: ITattooer[];

    selectedCity?: ICity;
    selectedStyles?: IStyle[];
  } => {
    if (!this.inited) {
      throw new Error('getData data service is not inited'); 
    }

    const allTattooers = this.tattooerService.getTattooers();
    const allStyles = this.styleService.getStyles();
    const allCities = this.cityService.getCities();

    const tattooersByCity = cityName ? this.tattooerService.getTattooers({ cityName: cityName }) : undefined;

    const usedCities = allCities.filter(city => allTattooers.some(tattooer => tattooer.city_id === city.id));
    const usedStyles = allStyles.filter(
      style => (tattooersByCity || allTattooers).some(
        tattooer => tattooer.style_ids && tattooer.style_ids.some(style_id => style_id === style.id)
      )
    );

    const filteredTattooers = cityName && styleNames
      ? this.tattooerService.getTattooers({ cityName, styleNames })
      : undefined;

    const selectedCity = cityName ? this.cityService.getCityByName(cityName) : null;
    const selectedStyles = styleNames ? styleNames.map(this.styleService.getStyleByName) : null;

    return {
      allTattooers,
      usedCities,
      usedStyles,
      selectedCity,
      selectedStyles,
      filteredTattooers: filteredTattooers || tattooersByCity || allTattooers,
    }
  }

  public getTattooer = (instagram: string): ITattooer => {
    if (!this.inited) {
      throw new Error('getTattooer data service is not inited'); 
    }

    return this.tattooerService.getTattooer(instagram);
  }
}

export const dataService = new DataService();
