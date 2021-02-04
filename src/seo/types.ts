export interface ITagDataObject {
  title: string;
  description: string;
  text?: {
    title: string;
    text: string;
    leftColTexts?: { title: string; text: string; }[];
    rightColTexts?: { title: string; text: string; }[];
  }
}

export interface ITagData {
  [name: string]: ITagDataObject;
}
