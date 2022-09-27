// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEPkIhkYThHoIj8U61GhXvAduoja8L9zs",
  authDomain: "ecommerce-gonzalocelan.firebaseapp.com",
  projectId: "ecommerce-gonzalocelan",
  storageBucket: "ecommerce-gonzalocelan.appspot.com",
  messagingSenderId: "1048866238751",
  appId: "1:1048866238751:web:1776eb1f42aded5769402a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);