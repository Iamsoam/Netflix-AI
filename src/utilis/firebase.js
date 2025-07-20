// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRYTih3jqhrtUeiv0jCSJj1E2UEQNqz4k",
  authDomain: "netflixai-97f68.firebaseapp.com",
  projectId: "netflixai-97f68",
  storageBucket: "netflixai-97f68.firebasestorage.app",
  messagingSenderId: "414670965614",
  appId: "1:414670965614:web:3bad1c5ca5acb1b9658f7f",
  measurementId: "G-Q8S539VFB7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

  export const auth = getAuth();
