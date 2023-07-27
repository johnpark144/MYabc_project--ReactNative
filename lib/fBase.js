import { API_KEY } from 'react-native-dotenv';
import { AUTH_DOMAIN } from 'react-native-dotenv';
import { PROJECT_ID } from 'react-native-dotenv';
import { STORAGE_BUCKET } from 'react-native-dotenv';
import { MESSAGIN_ID } from 'react-native-dotenv';
import { APP_ID } from 'react-native-dotenv';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGIN_ID,
  appId: process.env.APP_ID,
};
initializeApp(firebaseConfig);
export const authService = getAuth(); // Login Function
export const dbService = getFirestore(); // DB
export const storageService = getStorage(); // Files
