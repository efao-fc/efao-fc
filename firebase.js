// Firebase SDK já inicializado aqui
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD2RoJqL7RtYHNy8_s7Vs2WcpZHC5TNmSE",
  authDomain: "efao-fc-f4f36.firebaseapp.com",
  projectId: "efao-fc-f4f36",
  storageBucket: "efao-fc-f4f36.appspot.com",
  messagingSenderId: "275309668658",
  appId: "1:275309668658:web:d62f98f8cb9c1168d34f2b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);