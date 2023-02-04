// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC07_H2VfbpwmEZYCeUhGpenPSQWVM4Kyg",
  authDomain: "clientservermodel.firebaseapp.com",
  projectId: "clientservermodel",
  storageBucket: "clientservermodel.appspot.com",
  messagingSenderId: "359992058665",
  appId: "1:359992058665:web:65c9c2db2717d150ed0d38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);