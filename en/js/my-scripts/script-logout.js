let btnLogout = document.getElementById("btnLogout");

btnLogout.addEventListener("click", logoutWeb);

async function logoutWeb() {
  const url = "http://truequemundo.xyz:3000/events/logout";

  const response = await fetch(url);
  console.log(response);

  const data = await response.text();
  console.log(data);

  messageToUser(data);
}

function messageToUser(data) {
  const aviso = document.getElementById("pAviso");
  if (data == "adios") {
    window.location.href = "http://truequemundo.xyz/frontend/index.html";
  }
}
