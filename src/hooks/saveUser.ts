// saveUser.ts
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../utils/firebase';

export const saveUser = async (username: string, email: string, walletAddress: string) => {
  if (!username || !email || !walletAddress) {
    console.warn('Missing fields');
    return;
  }

  try {
    await addDoc(collection(db, 'users'), {
      username,
      email,
      walletAddress,
      createdAt: serverTimestamp(),
    });
    console.log('✅ User saved to Firestore');
  } catch (err) {
    console.error('❌ Error saving user:', err);
  }
};
