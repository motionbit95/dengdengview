// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: "AIzaSyAOY3RaVNVGDSmRruLlDjZgwIlOJrAxw0g",
  // authDomain: "motionbit-dangdangview.firebaseapp.com",
  // projectId: "motionbit-dangdangview",
  // storageBucket: "motionbit-dangdangview.appspot.com",
  // messagingSenderId: "108420630610",
  // appId: "1:108420630610:web:3aa133936aba160a1c378b",
  // measurementId: "G-501VR68QZD",

  apiKey: "AIzaSyADSb5I3kiyvkjXw9OTJYVO59dBkCxCBv0",
  authDomain: "dangdangview.firebaseapp.com",
  projectId: "dangdangview",
  storageBucket: "dangdangview.appspot.com",
  messagingSenderId: "426078123033",
  appId: "1:426078123033:web:a51b259679ed42bcf52688",
  measurementId: "G-RJ1Q3LPNFV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
