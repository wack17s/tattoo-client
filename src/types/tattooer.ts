import { IStyle } from './style';
import { ICity } from './city';

export interface ITattooer {
  instagram: string;

  city_id?: string;
  style_ids?: string[];

  profilePic?: string;

  about?: string;
  aboutRaw?: string;

  readyToShow?: boolean;
  needReview?: boolean;
  needUpdate?: boolean;

  posts?: { uri: string; id: string; }[];

  postsCount?: string;
  followersCount?: string;
  followingCount?: string;

  city?: ICity;
  styles?: IStyle[];
}
