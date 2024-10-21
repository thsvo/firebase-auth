// Import the functions you need from the SDKs you need
import { initializeApp, getAuth } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4IPIlT-hBYvPt8T8opOZkYi8lQ6RyheA",
  authDomain: "fir-auth-5865e.firebaseapp.com",
  projectId: "fir-auth-5865e",
  storageBucket: "fir-auth-5865e.appspot.com",
  messagingSenderId: "65409948210",
  appId: "1:65409948210:web:76e83b04a7327836963a2b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
