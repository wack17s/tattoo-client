import { firestoreService, FirestoreService } from './firestore.service';

import { ITattooerDTO } from '../dto/tattooer.dto';

export class InstagramService {
  public async getOembedPost(postId: string): Promise<any> {
    const response = await fetch(`https://graph.facebook.com/v8.0/instagram_oembed?url=https://www.instagram.com/p/${postId}/&access_token=${process.env.INSTAGRAM_APP_ID}|${process.env.INSTAGRAM_CLIENT_TOKEN}`);

    console.log('asdas', response.json())
  }
}

export const instagramService = new InstagramService();
