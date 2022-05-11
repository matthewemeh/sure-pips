import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCU-Yd56V-zClyOtKe1gibz-NGpyE0SIqg',
  authDomain: 'sure-pips-95bc0.firebaseapp.com',
  projectId: 'sure-pips-95bc0',
  storageBucket: 'sure-pips-95bc0.appspot.com',
  messagingSenderId: '316720799872',
  appId: '1:316720799872:web:4aa818c4f76c1da8eb8665',
};

const app = initializeApp(firebaseConfig);
export default getFirestore();
