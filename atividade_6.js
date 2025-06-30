// Declara lista de usuarios
const listaUsuarios = [];

// Seleciona os elementos do DOM
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const perfil = document.getElementById("perfil");
const senha = document.getElementById("senha");
const btnCadastrar = document.getElementById("cadastrar");
const btnLimpar = document.getElementById("limpar");
const tableBody = document.getElementById("tabela-usuarios");

// Adiciona evento de clique no botão Cadastrar
btnCadastrar.onclick = () => {
  const usuario = {
    nome: nome.value,
    email: email.value,
    perfil: perfil.value,
    senha: senha.value,
  };
  listaUsuarios.push(usuario);
  localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
  btnLimpar.onclick();
  tableBody.innerHTML = ""; // Limpa a tabela antes de listar novamente
  listarUsuarios();
};

// Adiciona evento de clique no botão Limpar
btnLimpar.onclick = () => {
  nome.value = "";
  email.value = "";
  perfil.value = "";
  btnCadastrar.disabled = true;
};

// Adiciona evento para validar preenchimento dos campos
nome.onblur = validarPreenchimentoCadastrar;
email.onblur = validarPreenchimentoCadastrar;
perfil.onblur = validarPreenchimentoCadastrar;

function validarPreenchimentoCadastrar() {
  if (nome.value !== "" && email.value !== "" && perfil.value !== "") {
    btnCadastrar.disabled = false;
  } else {
    btnCadastrar.disabled = true;
  }
}

//Função para listar os usuários cadastrados
function listarUsuarios() {
  listaUsuarios.forEach((usuario) => {
    const tr = document.createElement("tr");

    //Exemplo utilizando template literals
    tr.innerHTML = `
            <td>${usuario.nome}</td>
            <td>${usuario.email}</td>
            <td>${usuario.perfil}</td>
            <td>
                <button>Alterar</button>
                <button>Excluir</button>
            </td>
        `;

    tableBody.appendChild(tr);
  });
}
