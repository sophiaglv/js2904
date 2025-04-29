const inputChute = document.getElementById("chute");
const botaoChutar = document.getElementById("botaoChutar");
const botaoReiniciar = document.getElementById("botaoReiniciar");
const mensagem = document.getElementById("mensagem");
const tentativasTexto = document.getElementById("tentativas");
const somVitoria = document.getElementById("somVitoria");

let numeroSecreto, tentativas;
const maxTentativas = 10;

const iniciarJogo = () =>{
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativas = 0;
    inputChute.disabled = botaoChutar.disabled = false;
    botaoReiniciar.classList.add("d-none");
    mensagem.textContent = "";
    tentativasTexto.textContent = `Tentativas: 0 de${maxTentativas}`;
    inputChute.value = "";
    inputChute.focus();
}

const encerrarJogo = () =>{
    inputChute.disabled = botaoChutar.disabled = true;
    botaoReiniciar.classList.remove("d-none");
}

const verificarChute = () =>{
    const chute = +inputChute.value;

    if (chute < 1 || chute > 100 || isNaN(chute)){
        mensagem.textContent = "Por favor, digite um número válido entre 1 e 100.";
        return;
    }

    tentativas++;
    tentativasTexto.textContent = `Tentativas: ${tentativas} de ${maxTentativas}`;

    if(chute === numeroSecreto){
        mensagem.textContent = `Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativas!`;
        somVitoria.play();
        encerrarJogo();
    }else if(tentativas >= maxTentativas){
        mensagem.textContent = `Fim de jogo! O número secreto era ${numeroSecreto}`;
        encerrarJogo();
    }else{
        mensagem.textContent = `O número secreto é ${chute > numeroSecreto ? "MENOR" : "MAIOR"}.`;
    }

    inputChute.value = "";
    inputChute.focus();
}

botaoChutar.addEventListener("click", verificarChute);
botaoReiniciar.addEventListener("click", iniciarJogo);

iniciarJogo();