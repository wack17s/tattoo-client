import 'styled-components'

interface IDefaultTheme {
  colors: {
    BACKGROUND: string;
    PICKER_BACKGROUND: string;
    CORAL_700: string;
    CORAL_500: string;
    CORAL_300: string;

    BLACK_900: string;
    BLACK_400: string;
    BLACK_300: string;
    BLACK_200: string;
    BLACK_100: string;

    WHITE: string;

    BLUE_900: string;
  }

  boxShadow: string;
  coralBorderShadow: string;
  grayBorderShadow: string;
}

declare module 'styled-components' {
  export interface DefaultTheme extends IDefaultTheme {}
}


export const Colors = {
  BACKGROUND: '#FFFBEE',
  PICKER_BACKGROUND: '#E5E5E5',

  CORAL_700: '#FA4A4A',
  CORAL_500: '#FF6B6B',
  CORAL_300: '#FFB6B6',

  BLACK_900: '#242424',
  BLACK_400: '#6D6D6D',
  BLACK_300: '#959595',
  BLACK_200: '#ECECEC',
  BLACK_100: '#F4F4F4',

  WHITE: '#FFF',

  BLUE_900: '#0469FF',
};

export const theme: IDefaultTheme = {
  boxShadow: '0px 0px 5px 5px rgba(204, 204, 204, 0.1)',
  coralBorderShadow: `0 0 0 1px ${Colors.CORAL_300}`,
  grayBorderShadow: `0 0 0 1px ${Colors.BLACK_400}`,
  colors: {
    ...Colors,
  }
};
