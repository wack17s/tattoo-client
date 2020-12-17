import { fetcher } from './../utils/fetcher';
import { IStyle } from '../types/style';

class StyleService {
  private styles: IStyle[] | null = null;

  private fetchStyles = async () => {
    console.log('process.env.NEXT_PUBLIC_ACCESS_TOKEN', process.env.NEXT_PUBLIC_ACCESS_TOKEN)
    this.styles = await fetcher('https://tattoo-backend17.herokuapp.com/style', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
        Accept: 'application/json',
      },
    });
  }

  public getStyles = async (): Promise<IStyle[]> => {
    if (!this.styles) {
      await this.fetchStyles();
    }

    return this.styles;
  }

  public getStyleByName = async (name: string): Promise<IStyle | null> => {
    if (!this.styles) {
      await this.fetchStyles();
    }

    return this.styles.find(item => item.name === name) || null;
  }

  public getStyleById = async (id: string): Promise<IStyle | null> => {
    if (!this.styles) {
      await this.fetchStyles();
    }

    return this.styles.find(item => item.id === id) || null;
  }
}

export const styleService = new StyleService();
