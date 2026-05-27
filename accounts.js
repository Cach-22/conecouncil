function login() {
  const clientId = "1509046885682249858";

  const redirectUri = encodeURIComponent(
    "http://192.168.1.115:8000/"
  );

  window.location.href =
    "https://discord.com/oauth2/authorize" +
    `?client_id=${clientId}` +
    "&response_type=code" +
    `&redirect_uri=${redirectUri}` +
    "&scope=identify%20email";
}

const params = new URLSearchParams(window.location.search);
const code = params.get("code");

if (code) {
  console.log("Discord auth code:", code);
}
