// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeGSy2_IvLbtOOosAlrDo138k9yr_8wEs",
  authDomain: "form-auth-50b28.firebaseapp.com",
  projectId: "form-auth-50b28",
  storageBucket: "form-auth-50b28.firebasestorage.app",
  messagingSenderId: "514356882128",
  appId: "1:514356882128:web:3388b30b7ab1f0abea8cd5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
