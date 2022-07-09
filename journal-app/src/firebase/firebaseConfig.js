import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA7vtX5pJxtb4gzias0o9nQ8YkzGqNyyts',
  authDomain: 'react-app-course-69f4e.firebaseapp.com',
  projectId: 'react-app-course-69f4e',
  storageBucket: 'react-app-course-69f4e.appspot.com',
  messagingSenderId: '35292614922',
  appId: '1:35292614922:web:0acf4f6184fbddaca62af3',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const googleAuthProvider = new GoogleAuthProvider(app);

const db = getFirestore(app);

export {
  auth,
  googleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
};
