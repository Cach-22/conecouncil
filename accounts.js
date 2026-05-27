function login() {
  alert("logging in")
  
  const clientId = "1509046885682249858";
  const redirectUri = encodeURIComponent("http://192.168.1.115:8000/");

  window.location.href =
    "https://discord.com/oauth2/authorize" +
    `?client_id=${clientId}` +
    "&response_type=token" +
    `&redirect_uri=${redirectUri}` +
    "&scope=identify%20email";
}

window.login = login;

const hash = new URLSearchParams(window.location.hash.substring(1));
const token = hash.get("access_token");

if (token) {
  fetch("https://discord.com/api/users/@me", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .then(user => {
      console.log(user);
      alert("Logged in as " + user.username);
    });
}
