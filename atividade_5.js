const titulo = document.getElementById("titulo");
const corpo = document.getElementById("corpo");
const btnSalvar = document.getElementById("salvar");

function salvar() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: titulo.value,
      body: corpo.value,
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      window.alert("Dados salvos com sucesso");
    });
}

btnSalvar.onclick = salvar;
