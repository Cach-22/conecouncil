function login() {
  const clientId = "1509046885682249858";
  const redirect = encodeURIComponent(window.location.origin);

  window.location.href =
    `https://discord.com/oauth2/authorize` +
    `?client_id=${clientId}` +
    `&response_type=token` +
    `&redirect_uri=${redirect}` +
    `&scope=identify`;
}

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
