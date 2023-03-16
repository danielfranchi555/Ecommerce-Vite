import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAe_JaVTKHE_WQYqmsGbj-C23LJz9sINpM",
  authDomain: "ecommerce-vite.firebaseapp.com",
  projectId: "ecommerce-vite",
  storageBucket: "ecommerce-vite.appspot.com",
  messagingSenderId: "738431009779",
  appId: "1:738431009779:web:3341f528f59fca27d44886"
};

const app = initializeApp(firebaseConfig);
export const firebaseConection = ()=> app
export const db = getFirestore()

