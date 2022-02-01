let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
var n;
let teclas = {};
let liberadas = {};
let best = 0;
var pontuacao = 0;
let velocidade = 3;
let parar = false;
var x = document.getElementById("marca_pontos")
var audio = document.getElementById("myAudio")
ctx.lineWidth = 2;

liberadas[65] = true;
liberadas[87] = true;
liberadas[68] = true;
liberadas[83] = true;

// Ler as teclas que estão sendo pressionadas
document.addEventListener("keydown", function (evento){
    if (evento.keyCode in liberadas) {
        delete liberadas[evento.keyCode]
        teclas[evento.keyCode] = true;
    }
});
document.addEventListener("keyup", function (evento){
    liberadas[evento.keyCode] = true;
});
audio.addEventListener("ended", function (){
    retornar_melhor()
    fim()
});

// Função para alterar a velocidade de jogo
//
function retornar_melhor (){
    if (pontuacao > best){
        document.getElementById("best_score").innerHTML = "Best Score:"
        document.getElementById("best").innerHTML = pontuacao
        return best = pontuacao
    }
}
function alt_velocidade (dificuldade){
    reset()
    if (dificuldade === 1){
        return velocidade = 1
    }
    if (dificuldade === 3){
        return velocidade = 3
    }
    if (dificuldade === 5){
        return velocidade = 5
    }
}
function stop (){
    return parar = true;
}

/* Reset */
function reset_verde (){return verde = [
    "lawngreen",
    51, //posição x da bolinha (não mexer nessa posição pois vai sair dos trilhos)
    Math.floor(Math.random()*-680), // Posição do y da bolinha verde. Pode mexer nessa posição.
]}
function reset_vermelho (){return vermelho = [
    "red",
    151, //posição x da bolinha vermelha(Não mexer).
    Math.floor(Math.random()*-680), // Posição do y da bolinha vermelho. Pode mexer nessa posição.
]}
function reset_amarelo (){return amarelo = [
    "yellow",
    251, //posição x da bolinha amarela (não mexer)
    Math.floor(Math.random()*-680), // Posição do y da bolinha amarela. Pode mexer nessa posição.
]}
function reset_azul (){return azul = [
    "dodgerblue",
    351,
    Math.floor(Math.random()*-680), // Posição do y da bolinha azul. Pode mexer nessa posição.
]}
function reset_pontuacao (){return pontuacao = 0}
function reset_vezes(){return vezes = 0}
function fim(){
    var audio = document.getElementById("myAudio");
    audio.pause();
    audio.currentTime = 0;
    ctx.clearRect(0,0,canvas.width, canvas.height);
    campos();
    reset_verde()
    reset_vermelho()
    reset_amarelo()
    reset_azul()
    stop()
    reset_vezes()
    return audio = undefined
}
function reset(){
    var audio = document.getElementById("myAudio");
    audio.pause();
    audio.currentTime = 0;
    ctx.clearRect(0,0,canvas.width, canvas.height);
    campos();
    reset_verde()
    reset_vermelho()
    reset_amarelo()
    reset_azul()
    stop()
    reset_vezes()
    reset_pontuacao()
    return audio = undefined
}


// Campos para mostrar quando clicar nas setinhas
function campos (){
    ctx.beginPath();
    ctx.arc (51, jogador.y,jogador.raio,jogador.start,jogador.end)
    ctx.fillStyle = "black"
    ctx.fill()
    ctx.strokeStyle = "lawngreen"
    ctx.stroke()

    ctx.beginPath();
    ctx.arc (151, jogador.y,jogador.raio,jogador.start,jogador.end)
    ctx.fillStyle = "black"
    ctx.fill()
    ctx.strokeStyle = "red"
    ctx.stroke()

    ctx.beginPath();
    ctx.arc (251, jogador.y,jogador.raio,jogador.start,jogador.end)
    ctx.fillStyle = "black"
    ctx.fill()
    ctx.strokeStyle = "yellow"
    ctx.stroke()


    ctx.beginPath();
    ctx.arc (351, jogador.y,jogador.raio,jogador.start,jogador.end)
    ctx.fillStyle = "black"
    ctx.fill()
    ctx.strokeStyle = azul[0]
    ctx.stroke()
}

/* Player e bolinhas(notas da música) */
//
//Características do player e função para desenhar o player
let jogador = {
    x1: -100,
    x2: -100,
    x3: -100,
    x4: -100,
    y: canvas.height-60,
    raio: 30,
    start: 0,
    end: 2*Math.PI,
    color1: "lawngreen",
    color2: "red",
    color3: "yellow",
    color4: "blue"

}
function players () {
    // Para quando apertamos as setas, mudar de cor.
    ctx.beginPath();
    ctx.arc (jogador.x1, jogador.y,jogador.raio,jogador.start,jogador.end)
    ctx.fillStyle = jogador.color1
    ctx.fill()
    ctx.stroke()

    ctx.beginPath();
    ctx.arc (jogador.x2, jogador.y,jogador.raio,jogador.start,jogador.end)
    ctx.fillStyle = jogador.color2
    ctx.fill()
    ctx.stroke()

    ctx.beginPath();
    ctx.arc (jogador.x3, jogador.y,jogador.raio,jogador.start,jogador.end)
    ctx.fillStyle = jogador.color3
    ctx.fill()
    ctx.stroke()

    ctx.beginPath();
    ctx.arc (jogador.x4, jogador.y,jogador.raio,jogador.start,jogador.end)
    ctx.fillStyle = jogador.color4
    ctx.fill()
    ctx.stroke()
}
//
//Características das bolinhas
let verde = [
    "lawngreen",
    51, //posição x da bolinha (não mexer nessa posição pois vai sair dos trilhos)
    Math.floor(Math.random()*-680), // Posição do y da bolinha verde. Pode mexer nessa posição.
]
let vermelho = [
    "red",
    151, //posição x da bolinha vermelha(Não mexer).
    Math.floor(Math.random()*-680), // Posição do y da bolinha vermelho. Pode mexer nessa posição.
]
let amarelo = [
    "yellow",
    251, //posição x da bolinha amarela (não mexer)
    Math.floor(Math.random()*-680), // Posição do y da bolinha amarela. Pode mexer nessa posição.
]
let azul = [
    "dodgerblue",
    351,
    Math.floor(Math.random()*-680), // Posição do y da bolinha azul. Pode mexer nessa posição.
]
//
//Geração das bolinhas de forma aleatória
function verdes (){
    for (n = 2; n < 6; n++) {
        ctx.beginPath();
        ctx.arc(verde[1], verde[n], 25, 0, 2 * Math.PI)
        ctx.fillStyle = "lawngreen"
        ctx.fill()
        ctx.strokeStyle = "black"
        ctx.stroke()
        verde.push(verde[n]+Math.floor(Math.random()*-680)-100)
    }
}
function vermelhos (){
    for (n = 2; n < 6; n++) {
        ctx.beginPath();
        ctx.arc(vermelho[1], vermelho[n], 25, 0, 2 * Math.PI)
        ctx.fillStyle = "red"
        ctx.fill()
        ctx.strokeStyle = "black"
        ctx.stroke()
        vermelho.push(vermelho[n]+Math.floor(Math.random()*-680)-100)
    }
}
function amarelos (){
    for (n = 2; n < 6; n++) {
        ctx.beginPath();
        ctx.arc(amarelo[1], amarelo[n], 25, 0, 2 * Math.PI)
        ctx.fillStyle = "yellow"
        ctx.fill()
        ctx.strokeStyle = "black"
        ctx.stroke()
        amarelo.push(amarelo[n]+Math.floor(Math.random()*-680)-100)
    }
}
function azuis (){
    for (n = 2; n < 6; n++) {
        ctx.beginPath();
        ctx.arc(azul[1], azul[n], 25, 0, 2 * Math.PI)
        ctx.fillStyle = azul[0]
        ctx.fill()
        ctx.strokeStyle = "black"
        ctx.stroke()
        azul.push(azul[n]+Math.floor(Math.random()*-680)-100)
    }
}
//
//Função para desenhar as bolinhas (notas da música)
function musica (){
    verdes()
    vermelhos()
    amarelos()
    azuis()
}

/* Função para marcar ponto e manter as bolinhas infinitas */
function MarcarPonto (){
    //Marcar Ponto Verde
    for (n = 2; n < 6; n++) {
        if (verde[n] > jogador.y - jogador.raio && verde[n] <= jogador.y + (jogador.raio / 2) && verde[1] === jogador.x1) {
            pontuacao += 2;
            if (n === 2)
                verde[n] = verde[5]+Math.floor(Math.random()*-680)-100;
            else
                verde[n] = verde[n-1]+Math.floor(Math.random()*-680)-100
        }
        if (verde[n] >= canvas.height) {
            pontuacao -= 1;
            if (n === 2)
                verde[n] = verde[5] + Math.floor(Math.random() * -680) - 100;
            else
                verde[n] = verde[n - 1] + Math.floor(Math.random() * -680) - 100
        }
    }
    //Marcar Ponto Vermelho
    for (n = 2; n < 6; n++) {
        if (vermelho[n] > jogador.y - jogador.raio && vermelho[n] <= jogador.y + (jogador.raio / 2) && vermelho[1] === jogador.x2) {
            pontuacao += 2;
            if (n === 2)
                vermelho[n] = vermelho[5] + Math.floor(Math.random() * -680) - 100;
            else
                vermelho[n] = vermelho[n - 1] + Math.floor(Math.random() * -680) - 100
        }
        if (vermelho[n] >= canvas.height) {
            pontuacao -= 1;
            if (n === 2)
                vermelho[n] = vermelho[5] + Math.floor(Math.random() * -680) - 100;
            else
                vermelho[n] = vermelho[n - 1] + Math.floor(Math.random() * -680) - 100
        }
    }
    //Marcar Ponto Amarelo
    for (n = 2; n < 6; n++) {
        if (amarelo[n] > jogador.y - jogador.raio && amarelo[n] <= jogador.y + (jogador.raio / 2) && amarelo[1] === jogador.x3) {
            pontuacao += 2;
            if (n === 2)
                amarelo[n] = amarelo[5]+Math.floor(Math.random()*-680) - 100;
            else
                amarelo[n] = amarelo[n-1]+Math.floor(Math.random()*-680) - 100
        }
        if (amarelo[n] >= canvas.height) {
            pontuacao -= 1;
            if (n === 2)
                amarelo[n] = amarelo[5] + Math.floor(Math.random() * -680) - 100;
            else
                amarelo[n] = amarelo[n - 1] + Math.floor(Math.random() * -680) - 100
        }
    }
    //Marcar Ponto Azul
    for (n = 2; n < 6; n++) {
        if (azul[n] > jogador.y - jogador.raio && azul[n] <= jogador.y + (jogador.raio / 2) && azul[1] === jogador.x4) {
            pontuacao += 2;
            if (n === 2)
                azul[n] = azul[5] + Math.floor(Math.random() * -680) - 100;
            else
                azul[n] = azul[n - 1] + Math.floor(Math.random() * -680) - 100
        }
        if (azul[n] >= canvas.height) {
            pontuacao -= 1;
            if (n === 2)
                azul[n] = azul[5] + Math.floor(Math.random() * -680) - 100;
            else
                azul[n] = azul[n - 1] + Math.floor(Math.random() * -680) - 100
        }
    }
    if (jogador.x1 === verde[1]){
        pontuacao -= 1;
    }
    if (jogador.x2 === vermelho[1]){
        pontuacao -= 1;
    }
    if (jogador.x3 === amarelo[1]){
        pontuacao -= 1;
    }
    if (jogador.x4 === azul[1]){
        pontuacao -= 1;
    }
    x.innerHTML = pontuacao;
}

/* Função do jogo em sí */
function jogo(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    campos()
    musica()
    players()
    //Esquerda - Verdes
    if (65 in teclas) {
        jogador.x1 = 51;
        delete teclas["65"]
    }
    else
        jogador.x1 = -100;
    //Baixo - Vermelhas
    if (83 in teclas) {
        jogador.x2 = 151;
        delete teclas["83"]
    }
    else
        jogador.x2 = -100;
    //Cima - Amarelas
    if (87 in teclas) {
        jogador.x3 = 251;
        delete teclas["87"]
    }
    else
        jogador.x3 = -100;
    //Direita - Azuis
    if (68 in teclas) {
        jogador.x4 = 351;
        delete teclas["68"]
    }
    else
        jogador.x4 = -100;

    MarcarPonto()
    //Descer a bola
    for (n = 2; n < 6; n++){
        verde[n] += velocidade;
        vermelho[n] += velocidade;
        amarelo[n] += velocidade;
        azul[n] += velocidade;
    }
    if (parar === false){
        var audio = document.getElementById("myAudio");
        requestAnimationFrame(jogo);
        audio.play();
    }
    else{
        audio = document.getElementById("myAudio");
        audio.pause();
    }

}

campos();
let vezes = 0
function start (){
    if (parar === false && vezes === 0){
        reset_pontuacao();
        jogo();
        vezes ++
    }
    if (parar === true && vezes === 0){
        reset_pontuacao();
        jogo();
        vezes ++

    }
    if (parar === true && vezes > 0){
        parar = false;
        requestAnimationFrame(jogo);
    }
}