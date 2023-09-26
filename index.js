console.log("Desafio 2: Calculadora de partidas Rankeadas");

function calcularSaldoR(vit, der) {
    let result = vit - der;
    return result;
}
function verificarNivel () {
    if (saldo < 8){
        nivel = "Ferro";
    } else if (saldo >= 11 && saldo <= 20){
        nivel = "Bronze";
    }else if(saldo >= 21 && saldo <= 50){
        nivel = "Prata";
    } else if (saldo >= 51 && saldo <= 80){
        nivel = "Ouro";
    } else if(saldo >= 81 && saldo <= 90) {
        nivel = "Diamante";
    } else if(saldo >= 91 && saldo <= 100){
        nivel = "Lendáro";
    } else {
        nivel = "Imortal";
    }
}

let vitorias = 10;
let derrotas = 2;
let nome = "thay";
let saldo;
var nivel = "";
for (let i = 1; i < 12; i++) {
    console.log("-------------------");
    console.log("Dia: " + i);
    console.log("O jogador(a) " + nome + " ganhou " + vitorias + " partidas e perdeu " + derrotas + " partidas");
    saldo = calcularSaldoR(vitorias, derrotas);
    console.log("O total de saldo da partida é " + saldo);

    verificarNivel();
   
    console.log("O Herói tem saldo de " + saldo + " e está no nível de " + nivel);
    vitorias += 10;
}