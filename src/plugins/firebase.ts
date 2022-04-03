import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import Constants from "expo-constants";
import { collection } from 'firebase/firestore';

const app = initializeApp(Constants?.manifest?.extra?.firebase);
const db = getFirestore(app);
export const historyCollectionRef = collection(db, 'search_history');