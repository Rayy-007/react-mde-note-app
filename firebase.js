import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-notes-c3102.firebaseapp.com",
  projectId: "react-notes-c3102",
  storageBucket: "react-notes-c3102.appspot.com",
  messagingSenderId: "616489649027",
  appId: "1:616489649027:web:a0cf28c5eaed9b9b76acb6",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
