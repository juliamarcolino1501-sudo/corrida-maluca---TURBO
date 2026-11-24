
const carro1 = document.getElementById("carro1");
const carro2 = document.getElementById("carro2");

const botao1 = document.getElementById("botao1");
const botao2 = document.getElementById("botao2");
const reiniciar = document.getElementById("reiniciar");

const turbo1 = document.getElementById("turbo1");
const turbo2 = document.getElementById("turbo2");

const mensagem = document.getElementById("mensagem");
const chegada = document.querySelector(".chegada");

let position1 = 0;
let position2 = 0;

let terminou = false;

let turbo1Usado = false;
let turbo2Usado = false;


// FUNÇÃO DE ACELERAR
function acelerar(jogador, forca = 15) {

    if (terminou) return;

    const limite = Math.max(0, chegada.offsetLeft - carro1.offsetWidth);

    if (jogador === 1) {

        position1 = Math.min(position1 + forca, limite);
        carro1.style.left = `${position1}px`;

        if (position1 >= limite) {
            mensagem.textContent = "🏆 Jogador 1 Venceu!";
            terminou = true;
        }

    } else if (jogador === 2) {

        position2 = Math.min(position2 + forca, limite);
        carro2.style.left = `${position2}px`;

        if (position2 >= limite) {
            mensagem.textContent = "🏆 Jogador 2 Venceu!";
            terminou = true;
        }
    }
}


// FUNÇÃO DO TURBO
function usarTurbo(jogador) {

    if (terminou) return;

    if (jogador === 1 && !turbo1Usado) {

        turbo1Usado = true;

        acelerar(1, 45);

        turbo1.disabled = true;
        turbo1.textContent = "Turbo utilizado!";
    }

    else if (jogador === 2 && !turbo2Usado) {

        turbo2Usado = true;

        acelerar(2, 45);

        turbo2.disabled = true;
        turbo2.textContent = "Turbo utilizado!";
    }
}


// BOTÕES DE ACELERAR
botao1.addEventListener("click", function() {
    acelerar(1);
});

botao2.addEventListener("click", function() {
    acelerar(2);
});


// BOTÕES DE TURBO
turbo1.addEventListener("click", function() {
    usarTurbo(1);
});

turbo2.addEventListener("click", function() {
    usarTurbo(2);
});


// CONTROLES PELO TECLADO
document.addEventListener("keydown", function(evento) {

    if (evento.repeat) return;

    const tecla = evento.key.toLowerCase();

    if (tecla === "a") {
        acelerar(1);
    }

    if (tecla === "l") {
        acelerar(2);
    }
});


// BOTÃO DE REINICIAR
reiniciar.addEventListener("click", function() {

    terminou = false;

    position1 = 0;
    position2 = 0;

    turbo1Usado = false;
    turbo2Usado = false;

    carro1.style.left = "0px";
    carro2.style.left = "0px";

    turbo1.disabled = false;
    turbo2.disabled = false;

    turbo1.textContent = "🚀 Turbo Carro 1";
    turbo2.textContent = "🚀 Turbo Carro 2";

    mensagem.textContent = "Preparar, apontar, já!";
});
