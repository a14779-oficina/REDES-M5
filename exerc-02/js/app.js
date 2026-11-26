let participantes = 0;

const contador = document.querySelector("#contador");
const mensagem = document.querySelector("#mensagem");

const adicionar = document.querySelector("#adicionar");
const remover = document.querySelector("#remover");

adicionar.addEventListener("click", function() {
    if (participantes < 10) {
        participantes++;
        contador.textContent = participantes;
        mensagem.textContent = "";
    }
    if (participantes === 10) {
        mensagem.textContent = "Atingiste os 10 participantes!";
    }
});

remover.addEventListener("click", function() {
    if (participantes > 0) {
        participantes--;
        contador.textContent = participantes;
    }
    if (participantes === 0) {
        mensagem.textContent = "Não podes remover participantes porque não tem nenhum!";
    }

});
