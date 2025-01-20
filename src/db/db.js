import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyDp09PXmqwTkjFqeB3RKckqiXferA4NXTk",
  authDomain: "elixir-ecommerce-reactjs.firebaseapp.com",
  projectId: "elixir-ecommerce-reactjs",
  storageBucket: "elixir-ecommerce-reactjs.firebasestorage.app",
  messagingSenderId: "105289281196",
  appId: "1:105289281196:web:48cf53b1fa66a0e05cb909"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;