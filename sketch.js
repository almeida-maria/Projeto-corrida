function setup() {
  createCanvas(400, 400);
}

let xJogador = [0, 0, 0];
let yJogador = [100, 200, 300];
let jogador = ["🐨","🌜","👾"]

function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificaVencedor();
}

function ativaJogo() {
  if (focused == true) {
    background("rgb(252,223,228)");
  } else {
    background("rgb(245,245,255)");
  }
}

function desenhaJogadores() {
  textSize(40);
  text(jogador[0], xJogador[0], yJogador[0]);
  text(jogador[1], xJogador[1], yJogador[1]);
  text(jogador[2], xJogador[2], yJogador[2]);
}

function desenhaLinhaDeChegada() {
  fill("white");
  rect(350, 0, 10, 400);
  fill("black");
  for (let yAtual = 0; yAtual < 400; yAtual += 20) {
    rect(350, yAtual, 10, 10);
  }
}

function verificaVencedor() {
  if (xJogador[0] > 350) {
    text("Jogador 1 venceu!", 50, 200);
    noLoop();
  }
  if (xJogador[1] > 350) {
    text("Jogador 2 venceu!", 50, 200);
    noLoop();
  }
  if (xJogador[2] > 350) {
    text("Jogador 3 venceu!", 50, 200);
    noLoop();
  }
}

function keyReleased() {
  if (key === "a") {
    xJogador[0] += random(16);
  }
  if (key == "s") {
    xJogador[1] += random(16);
  }
  if (key == "d") {
    xJogador[2] += random(16);
  }
}

