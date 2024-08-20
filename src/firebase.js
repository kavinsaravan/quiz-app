// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxn5LxzPJFGx_BAA-gyMJ4d2Cm1v2vuUs",
  authDomain: "quizapp-bbed0.firebaseapp.com",
  projectId: "quizapp-bbed0",
  storageBucket: "quizapp-bbed0.appspot.com",
  messagingSenderId: "32526376179",
  appId: "1:32526376179:web:56e3bf1451b1c2a2dfeb86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };