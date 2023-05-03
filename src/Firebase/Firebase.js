import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyAQDXR9mirSHiOvK4nFoOLi_ePaSQSCHLo",
  authDomain: "react-forms-hook.firebaseapp.com",
  databaseURL: "https://react-forms-hook-default-rtdb.firebaseio.com",
  projectId: "react-forms-hook",
  storageBucket: "react-forms-hook.appspot.com",
  messagingSenderId: "1024734554865",
  appId: "1:1024734554865:web:27f28496fa848139ddd750"
};


const app = initializeApp(firebaseConfig);
export const fireDb = getDatabase(app)