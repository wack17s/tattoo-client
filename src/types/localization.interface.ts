import { Language } from './language.enum'
import { PageName } from './pageName.enum'

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
        text2: string;
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
        text2: string;
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
  };
}

export interface ILocalizations {
  [Language.RU]: ILocalization;
  [Language.UA]: ILocalization;
  // [Language.EN]: ILocalization;
}