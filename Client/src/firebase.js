// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "codecraft-blog-cd3fe.firebaseapp.com",
  projectId: "codecraft-blog-cd3fe",
  storageBucket: "codecraft-blog-cd3fe.appspot.com",
  messagingSenderId: "261972804035",
  appId: "1:261972804035:web:bc12a59541feab5a1afd76",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
