import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDlWL-QBvsA4iTRWp3cH45oOXOGPIVepMQ",
  authDomain: "crud-react-6c77a.firebaseapp.com",
  projectId: "crud-react-6c77a",
  storageBucket: "crud-react-6c77a.appspot.com",
  messagingSenderId: "81973064334",
  appId: "1:81973064334:web:65f3f5df4f3c098afbcfdf",
  measurementId: "G-BTZB8P4JJM"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);