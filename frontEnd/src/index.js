import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDk7uObYKqFU2_J-AlzxxM_U-vwmnZ5Qj4",
  authDomain: "danielgamereview.firebaseapp.com",
  projectId: "danielgamereview",
  storageBucket: "danielgamereview.appspot.com",
  messagingSenderId: "120869633183",
  appId: "1:120869633183:web:2594520a4789eb48e576aa",
  measurementId: "G-2BMEGYJFSE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

