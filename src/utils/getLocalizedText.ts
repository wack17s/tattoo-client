import { localizations } from '../localizations'
import { PageName } from '../types/pageName.enum';
import { ILocalization, Language } from '../localizations.types';

export const getPageNames = (locale: string = Language.RU): ILocalization['pageNames'] => {
  return localizations[locale].pageNames;
};

export const getMainPage = (locale: string): ILocalization['pages'][PageName.MAIN] => {
  return localizations[locale || Language.RU].pages[PageName.MAIN];
};

export const getChooseCity = (locale: string = Language.RU): ILocalization['pages'][PageName.CHOOSE_CITY] => {
  return localizations[locale].pages[PageName.CHOOSE_CITY];
};

export const getChooseStyle = (locale: string = Language.RU): ILocalization['pages'][PageName.CHOOSE_STYLE] => {
  return localizations[locale].pages[PageName.CHOOSE_STYLE];
};

export const getTattooers = (locale: string = Language.RU): ILocalization['pages'][PageName.TATTOOERS] => {
  return localizations[locale].pages[PageName.TATTOOERS];
};

export const getTattooer = (locale: string = Language.RU): ILocalization['pages'][PageName.TATTOOER] => {
  return localizations[locale].pages[PageName.TATTOOER];
};

export const getArticles = (locale: string = Language.RU): ILocalization['pages'][PageName.ARTICLES] => {
  return localizations[locale].pages[PageName.ARTICLES];
};

export const getAbout = (locale: string = Language.RU): ILocalization['pages'][PageName.ABOUT] => {
  return localizations[locale].pages[PageName.ABOUT];
};

export const getNotFound = (locale: string = Language.RU): ILocalization['pages'][PageName.NOT_FOUND] => {
  return localizations[locale].pages[PageName.NOT_FOUND];
};
