// Import the functions you need from the SDKs you need
import { initializeApp, getApps , getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASJ_-MFaRUexvflVMSOubsLWUHLL3t7ok",
  authDomain: "insta-2-yt-38b48.firebaseapp.com",
  projectId: "insta-2-yt-38b48",
  storageBucket: "insta-2-yt-38b48.appspot.com",
  messagingSenderId: "783178006307",
  appId: "1:783178006307:web:dabd9550777c7b61eb1696"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };