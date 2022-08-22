// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4fFwDSLpCyCsLY-YU6AfWXQk920uBq54",
  authDomain: "react-cursos-b6a74.firebaseapp.com",
  projectId: "react-cursos-b6a74",
  storageBucket: "react-cursos-b6a74.appspot.com",
  messagingSenderId: "475068581716",
  appId: "1:475068581716:web:5959e486bf20d5524baac1"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);