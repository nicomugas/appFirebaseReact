// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";  //para autenticacion
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvZ6Ctj8Op-qZsQVPGxPsth1lur0ly_Qw",
  authDomain: "react-firebase-auth-app-e07fc.firebaseapp.com",
  projectId: "react-firebase-auth-app-e07fc",
  storageBucket: "react-firebase-auth-app-e07fc.appspot.com",
  messagingSenderId: "481273529505",
  appId: "1:481273529505:web:9c2a9336642cfa26fc9ce0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)