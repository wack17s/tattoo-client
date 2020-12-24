import { fetcher } from './../utils/fetcher';
import { IStyle } from '../types/style';

export class StyleService {
  private styles: IStyle[] = [];
  private backendUrl: string;
  private accessToken: string;

  public constructor({ backendUrl, accessToken }) {
    this.backendUrl = backendUrl;
    this.accessToken = accessToken;
  }


  public fetchStyles = async () => {
    this.styles = await fetcher(`${this.backendUrl}/style`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.accessToken}`,
        Accept: 'application/json',
      },
    });
  }

  public getStyles = (): IStyle[] => {
    return this.styles;
  }

  public getStyleByName = (name: string): IStyle | null => {
    return this.styles.find(item => item.name === name) || null;
  }

  public getStyleById = (id: string): IStyle | null => {
    return this.styles.find(item => item.id === id) || null;
  }
}
