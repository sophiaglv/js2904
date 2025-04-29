let numeroSecreto;
let tentativas;
const maxTentativas = 5;

const inputChute = document.getElementById("chute");
const botaoChutar = document.getElementById("botaoChutar");
const botaoReiniciar = document.getElementById("botaoReiniciar");
const mensagem = document.getElementById("mensagem");
const tentativasTexto = document.getElementById("tentativas");

function iniciarJogo(){
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativas = 0;
    inputChute.disabled = false;
    botaoChutar.disabled = false;
    botaoReiniciar.style.display = "none";
    mensagem.textContent = "";
    tentativasTexto.textContent = "Tentativas:  de " + maxTentativas;
    inputChute.value = "";
    inputChute.focus();
}

function verificarChute(){
    const chute = Number(inputChute.value);

    if(!chute || chute < 1 || chute > 100){
        mensagem.textContent = "Por favor, digite um número entre 1 e 100.";
        return;
    }

    tentativas++;

    if(chute === numeroSecreto){
        mensagem.textContent = `🎉 Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativas`;
        encerrarJogo();
    }else if(chute > numeroSecreto){
        mensagem.textContent = "O número secreto é MENOR";
    }else{
        mensagem.textContent = "O número secreto é MAIOR"
    }

    tentativasTexto.textContent = `Tentativas ${tentativas} de ${maxTentativas}`;

    if(tentativas >= maxTentativas && chute !== numeroSecreto){
        mensagem.textContent = `😓 Fim de jogo! O número secreto era ${numeroSecreto}.`;
        encerrarJogo();
    }

    inputChute.value = "";
    inputChute.focus();
}

function encerrarJogo(){
    inputChute.disabled = true;
    botaoChutar.disabled = true;
    botaoReiniciar.style.display = "inline-block";
}

botaoChutar.addEventListener("click", verificarChute);
botaoReiniciar.addEventListener("click", iniciarJogo);

iniciarJogo();