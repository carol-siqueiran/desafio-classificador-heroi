//# Desafio Classificador de nível de Herói
//**O Que deve ser utilizado**
//- Variáveis
//- Operadores
//- Laços de repetição
//- Estruturas de decisões
//## Objetivo
//Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói
let heroiNome = gets();
let heroiXp = parseInt(gets(),10); // Corrigido: adicionado 10 como radix
let heroiNivel;

// Utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

if (heroiXp <= 1000) {
    heroiNivel = "Ferro";
} else if (heroiXp > 1000 && heroiXp <= 2000) {
    heroiNivel = "Bronze";
} else if (heroiXp > 2000 && heroiXp <= 5000) {
    heroiNivel = "Prata";
} else if (heroiXp > 5000 && heroiXp <= 7000) {
    heroiNivel = "Ouro";
} else if (heroiXp > 7000 && heroiXp <= 8000) {
    heroiNivel = "Platina";
} else if (heroiXp > 8000 && heroiXp <= 9000) {
    heroiNivel = "Ascendente";
} else if (heroiXp > 9000 && heroiXp <= 10000) {
    heroiNivel = "Imortal";
} else if (heroiXp > 10000) {
    heroiNivel = "Radiante";
} else {
    // Caso a experiência seja um número negativo ou inválido
    heroiNivel = "Experiência inválida";
}

// Saída: Ao final deve se exibir uma mensagem
console.log("O Herói de nome " + heroiNome + " está no nível de " + heroiNivel);