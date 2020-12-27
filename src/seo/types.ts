export interface ITagDataObject {
  title: string;
  description: string;
}

export interface ITagData {
  [name: string]: ITagDataObject;
}
