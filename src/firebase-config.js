import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAtSPu1P8O8GhffArcWdubcxgS2Sb6VtlA",
    authDomain: "snart-d4e40.firebaseapp.com",
    projectId: "snart-d4e40",
    storageBucket: "snart-d4e40.appspot.com",
    messagingSenderId: "1083405005024",
    appId: "1:1083405005024:web:d2264fab59e61108796085",
    measurementId: "G-Y8H18HHNFM"
  };
  
  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);
  export const storage = getStorage(app);