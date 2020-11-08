import 'styled-components'

interface IDefaultTheme {
  colors: {
    BACKGROUND: string,

    primaryButton: {
      DEFAULT: string;
      HOVER: string;
      DISABLED: string;
      ACTIVE: string;
    },
    secondaryButton: {
      DEFAULT: string;
      HOVER: string;
      // FOCUSED: string;
      // ACTIVE: string;
      BOX_SHADOW: string;
      BOX_SHADOW_HOVER: string;
    },
    primaryText: {
      DEFAULT: string;
      HOVER: string;
      FOCUSED: string;
      ACTIVE: string;
    },
    secondaryText: {
      DEFAULT: string;
      HOVER: string;
    }
  }

  boxShadow: string;
}

declare module 'styled-components' {
  export interface DefaultTheme extends IDefaultTheme {}
}


export const Colors = {
  BACKGROUND: '#FFFBEE',

  CORAL_MAIN: '#FF6B6B',
  HOVER_RED: '#FA4A4A',
  WACK_RED: '#FFB6B6',

  MAIN_BLACK: '#242424',

  MAIN_LIGHT: '#F4F4F4',
  HOVER_LIGHT: '#ECECEC',

  MAIN_DARK: '#6D6D6D',
  HOVER_DARK: '#959595'
};

export const theme: IDefaultTheme = {
  boxShadow: '0px 0px 5px 5px rgba(204, 204, 204, 0.1)',
  colors: {
    BACKGROUND: Colors.BACKGROUND,
    primaryButton: {
      DEFAULT: Colors.CORAL_MAIN,
      HOVER: Colors.HOVER_RED,
      DISABLED: Colors.WACK_RED,
      ACTIVE: Colors.CORAL_MAIN
    },
    secondaryButton: {
      DEFAULT: Colors.MAIN_LIGHT,
      HOVER: Colors.HOVER_LIGHT,
      // FOCUSED: Colors.HOVER_LIGHT,
      // ACTIVE: Colors.HOVER_LIGHT,
      BOX_SHADOW: `0 0 0 1px ${Colors.WACK_RED}`,
      BOX_SHADOW_HOVER: `0 0 0 1px ${Colors.MAIN_DARK}`
    },
    primaryText: {
      DEFAULT: Colors.MAIN_BLACK,
      ACTIVE: Colors.WACK_RED,
      HOVER: Colors.HOVER_RED,
      FOCUSED: Colors.CORAL_MAIN
    },
    secondaryText: {
      DEFAULT: Colors.MAIN_DARK,
      HOVER: Colors.HOVER_DARK,
    }
  }
};
