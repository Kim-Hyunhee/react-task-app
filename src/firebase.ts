// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAct1QVvcKV0PfzXcdewpjl2vP-Ho5yl4w',
  authDomain: 'react-test-app-e168a.firebaseapp.com',
  projectId: 'react-test-app-e168a',
  storageBucket: 'react-test-app-e168a.appspot.com',
  messagingSenderId: '512884558531',
  appId: '1:512884558531:web:75ea003cc0a92176a37076',
  measurementId: 'G-EW0DWZ6KJK',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
