import { PageName } from './types/pageName.enum'

export enum Language {
  UA = 'ua',
  RU = 'ru',
  EN = 'en',
}

export interface ILocalization {
  pageNames: {
    [PageName.MAIN]: string;
    [PageName.TATTOOERS]: string;
    [PageName.FOR_TATTOOERS]: string;
    [PageName.ARTICLES]: string;
    [PageName.ABOUT]: string;
  
    [PageName.CHOOSE_CITY]: string;
    [PageName.CHOOSE_STYLE]: string;
  },
  pages: {
    [PageName.MAIN]: {
      name: string;
      text: {
        title: string;
        text: string;
        button: string;
      };
    };
    [PageName.CHOOSE_CITY]: {
      name: string;
      text: {
        title: string;
        text: string;
        button: string;
        chooseButton: string;
      };
    };
    [PageName.CHOOSE_STYLE]: {
      name: string;
      text: {
        title: string;
        text: string;
        button: string;
        chooseButton: string;
      };
    };
    [PageName.TATTOOERS]: {
      name: string;
      text: {
        selectCity: string;
        selectCityPlaceholder: string;
        selectStyle: string;
        more: string;
        less: string;
        allCities: string;
        allStyles: string;
        discard: string;
        select: string;
      }
    };
    [PageName.TATTOOER]: {
      name: string;
      text: {
        description: string;
        style: string;
        contact: string;
      }
    };
    [PageName.ARTICLES]: {
      name: string;
      text: {
        title: string;
        text: string;
      }
    };
    [PageName.ABOUT]: {
      name: string;
      text: {
        title: string;
        subtitle1: string;
        subtitle2: string;
        text1: string;
        text2: string;
        text3: string;
      }
    }
    [PageName.NOT_FOUND]: {
      name: string;
      text: {
        title: string;
        text: string;
      }
    }
  };
}

export interface ILocalizations {
  [Language.RU]: ILocalization;
  [Language.UA]: ILocalization;
  // [Language.EN]: ILocalization;
}