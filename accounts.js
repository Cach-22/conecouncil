window.login = function () {
  const clientId = "1509046885682249858";

  const redirectUri = encodeURIComponent("http://192.168.1.115:8000/");

  const url =
    "https://discord.com/oauth2/authorize" +
    `?client_id=${clientId}` +
    "&response_type=code" +
    `&redirect_uri=${redirectUri}` +
    "&scope=identify%20email`;

  console.log("Redirecting to:", url); // sanity check

  window.location.href = url;
};

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
