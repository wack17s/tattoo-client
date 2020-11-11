import * as admin from 'firebase-admin';

export class FirestoreService {
  public constructor(serviceAccountKey: admin.ServiceAccount) {
    if (admin.apps.length) {
      return;
    }

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccountKey)
    });
  }

  private get db() {
    return admin.firestore();
  }

  public getAll = async <T>(collectionName: string): Promise<T[]> => {
    const snapshot = await this.db.collection(collectionName).get();

    const res: T[] = [];

    snapshot.forEach(item => {
      res.push(item.data() as T);
    })

    return res;
  };


  public getQuery = async <T>(collectionName: string, queries : ({ key: string, value: string } | { array: string, value: string[] })[]): Promise<T[]> => {
    const collectionRef = this.db.collection(collectionName);

    let queryCollenction;

    queries.map(({ array, key, value }: any) => {
      if (key) {
        queryCollenction = collectionRef.where(key, '==', value);
      }

      if (array) {
        queryCollenction = collectionRef.where(array, 'array-contains-any', value);
      }
    })

    const snapshot = await queryCollenction.get();

    if (snapshot.empty) {
      return [];
    }  

    const res: T[] = [];

    snapshot.forEach(item => {
      res.push(item.data() as T);
    })

    return res;
  };

  public getOne = async <T>(collectionName: string, entryId: string): Promise<T | null> => {
    const docRef = this.db.collection(collectionName).doc(entryId);

    const doc = await docRef.get();

    if (!doc.exists) {
      return null;
    }
    
    return doc.data() as T;
  }

  public addOne = async (collectionName: string, entryId: string, data: object): Promise<boolean> => {
    const docRef = this.db.collection(collectionName).doc(entryId);

    try {
      await docRef.set(data, { merge: true });

      return true;
    } catch {
      return false;
    }
  }
}

export const firestoreService = new FirestoreService({
  privateKey: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  projectId: process.env.GOOGLE_PROJECT_ID,
  clientEmail: process.env.GOOGLE_CLIENT_EMAIL
});
