// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";


import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBFei2oIBX2jqHZ-PZLinedCufebu4BLdw",
  authDomain: "teeket-dde6f.firebaseapp.com",
  projectId: "teeket-dde6f",
  storageBucket: "teeket-dde6f.appspot.com",
  messagingSenderId: "240236719932",
  appId: "1:240236719932:web:739830d24ebb207dd23839",
  measurementId: "G-LR8EWXVQW3"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(analytics);
export const dataBase = getFirestore();


