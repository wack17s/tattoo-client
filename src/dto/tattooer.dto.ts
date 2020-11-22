export interface ITattooerDTO {
  instagram: string;
  city: string;
  styles?: string[];
  about?: string;
  aboutRaw?: string;
  approved?: boolean;
  postURIs?: string[];

  // instagram_data?: {
  //   id: string;
  //   token: string;
  // }
}
