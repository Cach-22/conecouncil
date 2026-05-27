import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";

const auth = getAuth();
const provider = new GoogleAuthProvider();

async function login() {
    const result = await signInWithPopup(auth, provider);

    alert("Logged in as: " + result.user.displayName);
}
