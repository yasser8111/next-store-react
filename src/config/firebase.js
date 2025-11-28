import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoXoSi376ZtbrIDc0Oa4_yf8-tJKcHV-4",
  authDomain: "database-nextstore.firebaseapp.com",
  projectId: "database-nextstore",
  storageBucket: "database-nextstore.firebasestorage.app",
  messagingSenderId: "463214736059",
  appId: "1:463214736059:web:9caa362e75473bf5edef9e",
  measurementId: "G-0LK4WXYEM5"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);