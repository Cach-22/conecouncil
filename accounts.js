import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

window.login = async function() {
  try {
    const result = await signInWithPopup(auth, provider);

    alert("Logged in as: " + result.user.displayName);

  } catch(err) {
    alert(err);
  }
}
