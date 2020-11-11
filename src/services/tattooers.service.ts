import { firestoreService, FirestoreService } from './firestore.service';

import { ITattooerDTO } from '../dto/tattooer.dto';

export class TattooersService {
  private firestore: FirestoreService = firestoreService;

  public async findAll(): Promise<ITattooerDTO[]> {
    const tattooers = await this.firestore.getAll<ITattooerDTO>('tattooers');

    return tattooers;
  }

  public async getOne(tattooerId: string): Promise<ITattooerDTO | null> {
    const tattooer = await this.firestore.getOne<ITattooerDTO>('tattooers', tattooerId);

    return tattooer;
  }

  public async findQuery(query: { city?: string; styles?: string; }): Promise<ITattooerDTO[]> {
    const queries = [];

    if (query.city) {
      queries.push({ key: 'city', value: query.city });
    }

    if (query.styles) {
      queries.push({ array: 'styles', value: query.styles.split(',') });
    }

    console.log('queries', queries)

    const tattooers = await this.firestore.getQuery<ITattooerDTO>('tattooers', queries);

    return tattooers;
  }
}

export const tattooersService = new TattooersService();
