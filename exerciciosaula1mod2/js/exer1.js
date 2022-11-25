var botao1 = document.createElement("button");
var botao2 = document.createElement("button");
var mensagem = document.createElement("p");
botao1.innerText = "Abrir";
botao2.innerText = "Fechar";
document.body.appendChild(botao1);
document.body.appendChild(botao2);
document.body.appendChild(mensagem);
botao1.addEventListener("click", entrar);
botao2.addEventListener("click", fechar);
botao1.addEventListener("mouseout", sair)
botao2.addEventListener("mouseout", sair)

function entrar() {
    document.querySelector("p");
    mensagem.innerText = "Estamos aberto";
    botao1.style.background = "green";
}

function fechar() {
    document.querySelector("p");
    mensagem.innerText = "Estamos fechado";
    botao2.style.background = "red";
}

function sair() {
    botao1.style.background = "white";
    botao2.style.background = "white";
}