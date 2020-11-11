export enum StyleId {
  BLACKWORK = 'blackwork',
  CHICANO = 'chicano',
  JAPAN = 'japan',
  NEOTRADITIONAL = 'neotraditional',
  NEWSCHOOL = 'newschool',
  REALISM = 'realism',
  TRADITIONAL = 'traditional',
  TRIBAL = 'tribal',
  WATERCOLOR = 'watercolor',
}

export interface IStyle {
  id: StyleId;
  en: string;
  // ru: string;
  // ua: string;
}
