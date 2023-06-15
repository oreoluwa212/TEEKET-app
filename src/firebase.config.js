import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFei2oIBX2jqHZ-PZLinedCufebu4BLdw",
  authDomain: "teeket-dde6f.firebaseapp.com",
  projectId: "teeket-dde6f",
  storageBucket: "teeket-dde6f.appspot.com",
  messagingSenderId: "240236719932",
  appId: "1:240236719932:web:cd9f343feb650a51d23839",
  measurementId: "G-3PFNXD0RHG",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
export const auth = getFirestore();
