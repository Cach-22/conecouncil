function login() {
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

alert(token)
 
if (token) {

  fetch("https://discord.com/api/users/@me", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  .then(res => res.json())

  .then(dcuser => {

    user = dcuser.username;
    console.log(dcuser);

    const avatar =
      `https://cdn.discordapp.com/avatars/${dcuser.id}/${dcuser.avatar}.png`;

    document.getElementById("accountBox").innerHTML = `
      <img src="${avatar}"
           width="90"
           style="border-radius:50%;">

      <h3>${dcuser.global_name || dcuser.username}</h3>

      <p>@${dcuser.username}</p>

      <p>ID: ${dcuser.id}</p>

      <button onclick="logout()">Logout</button>
    `;
  });
}

function logout() {
  window.location.hash = "";
  location.reload();
}
