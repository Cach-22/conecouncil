import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBb7jFUxQZoyZEypndvRv7rDYfwNHhfcrg",
  authDomain: "theconecouncil.firebaseapp.com",
  projectId: "theconecouncil",
  storageBucket: "theconecouncil.firebasestorage.app",
  messagingSenderId: "470783433143",
  appId: "1:470783433143:web:4d887484c6c7acab6b7032"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

window.login = async function () {
  try {
    const result = await signInWithPopup(auth, provider);

    alert("Logged in as: " + result.user.displayName);

  } catch(err) {
    alert(err.message);
  }
};
