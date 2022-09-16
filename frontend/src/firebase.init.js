import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBaofLn65H__ooyLEEhb52wiqoetNu7u-0",
  authDomain: "jobhelper-6bbed.firebaseapp.com",
  projectId: "jobhelper-6bbed",
  storageBucket: "jobhelper-6bbed.appspot.com",
  messagingSenderId: "78422764716",
  appId: "1:78422764716:web:b438313436381849170309",
  measurementId: "G-Y36HEGB3QX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;
