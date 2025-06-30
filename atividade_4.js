const imagemUsuario = document.getElementById("imagemUsuario");
const nomeUsuario = document.getElementById("nomeUsuario");
const emailUsuario = document.getElementById("emailUsuario");
const celularUsuario = document.getElementById("celularUsuario");

function buscarUsuario() {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((body) => {
      imagemUsuario.src = body.results[0].picture.large;
      nomeUsuario.innerText =
        body.results[0].name.first + " " + body.results[0].name.last;
      emailUsuario.innerText = body.results[0].email;
      celularUsuario.innerText = body.results[0].cell;
    });
}

buscarUsuario();
