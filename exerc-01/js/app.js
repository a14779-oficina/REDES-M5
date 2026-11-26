const evento = {
    nome: "Web Summit 2026",
    local: "Lisboa, Portugal",
    cargo: "Secretary-General United Nations",
    mensagem: "Bem-vindo ao futuro da tecnologia!",
    nomeAutor: "António Guterres",
    mensagemCard: "António ocupa atualmente o cargo de nono secretário-geral das Nações Unidas. Ele é um entusiasta da ação climática e, anteriormente, exerceu funções como Alto Comissário das Nações Unidas para os Refugiados e primeiro-ministro de Portugal."
};

const botao = document.querySelector("#mostrar");

botao.addEventListener("click", () => {
    document.querySelector("#titulo").textContent =
        evento.nome;

    document.querySelector("#local").textContent =
        evento.local;

    document.querySelector("#mensagem").textContent =
        evento.mensagem;
        
    document.querySelector("#nomeautor").textContent =
        evento.nomeAutor;

    document.querySelector("#mensagemcard").textContent =
        evento.mensagemCard;
});

