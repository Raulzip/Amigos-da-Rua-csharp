const Nome = document.getElementById("NomeCad")
const Email = document.getElementById("EmailCad")
const Senha = document.getElementById("SenhaCad")
const ConSenha = document.getElementById("ConSenhaCad")
const Botao = document.getElementById("BotaoCad")


function verificarCampos() {
  if(Nome.value !== "" && Email.value !== "" && Senha.value !== "" && ConSenha.value !== "" && Senha.value === ConSenha.value) {
    Botao.setAttribute("data-bs-target", "#staticBackdrop")
  } else {
    Botao.setAttribute("data-bs-target", "#staticBackdropErr")
  }
}


Nome.addEventListener("input", verificarCampos)
Email.addEventListener("input", verificarCampos)
Senha.addEventListener("input", verificarCampos)
ConSenha.addEventListener("input", verificarCampos)


