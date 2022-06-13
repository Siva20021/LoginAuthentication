
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDtzQTbL0-LixrqPKcmLjA6OvPX0sTc-bU",
  authDomain: "login-authentication-de003.firebaseapp.com",
  projectId: "login-authentication-de003",
  storageBucket: "login-authentication-de003.appspot.com",
  messagingSenderId: "846556085419",
  appId: "1:846556085419:web:fae4032aa7feef17e2cbee",
  measurementId: "G-P1C71PJ8TV"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;