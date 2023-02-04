import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { createContext } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyBvXmdMrdgjSloxSkyEkrpjTS9Fw9AhGbA",
  authDomain: "simple-firebase-authentic-root.firebaseapp.com",
  projectId: "simple-firebase-authentic-root",
  storageBucket: "simple-firebase-authentic-root.appspot.com",
  messagingSenderId: "140143647609",
  appId: "1:140143647609:web:6d817851166f778186eda8"
};
  const AuthContext = createContext();
 const app = initializeApp(firebaseConfig);
const  auth = getAuth(app)

export {auth, AuthContext, app}