const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const btnEntrar = document.getElementById("entrar");
const btnMostrar = document.getElementById("mostrar");

const listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"));

function validarPreenchimentoEntrar() {
  if (usuario.value !== "" && senha.value !== "") {
    btnEntrar.disabled = false;
  } else {
    btnEntrar.disabled = true;
  }
}

usuario.onblur = validarPreenchimentoEntrar;
senha.onblur = validarPreenchimentoEntrar;

/*
btnMostrar.addEventListener('click', () => {
  senha.type = senha.type === 'password' ? 'text' : 'password';
});
*/

btnEntrar.addEventListener("click", () => {
  const valorEmail = usuario.value; // Input de usuario
  const valorSenha = senha.value; // Input de Senha

  const usuarioEncontrado = listaUsuarios.find(
    (usuario) => usuario.email === valorEmail
  );

  if (usuarioEncontrado && usuarioEncontrado.senha === valorSenha) {
    window.alert("Acesso realizado com sucesso!");
  } else {
    window.alert("Usuário ou senha inválidos.");
  }

  return false;
});
