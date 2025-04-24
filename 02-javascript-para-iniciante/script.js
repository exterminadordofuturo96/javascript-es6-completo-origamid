/* //Aula 1 - Variáveis
const nome = "Voller";
const idade = 28;
let comidaFavorita;
comidaFavorita = "Salpicão";

let comida, endereço, nomeCarro, sobrenome, artista;
*/

/* Aula 2 - Tipos de dados*/
let gols = 1000;
let frase = "Romário fez" + gols + "gols";
let fraseTemplateString = `Romario fez ${gols} goals`
console.log(frase);
console.log(fraseTemplateString)

/* Aula 2 - Exercício */
let string = "carro";
let stringNumero = "carro3";
let idade = 28;
let nome = "voller";
let sobrenome = " silas";
const nomeCompleto = nome + sobrenome;
console.log(nomeCompleto);
let fraseNova = "It's time.";
console.log(typeof nomeCompleto);

/* Aula 3 - Números e operadores */

let soma = 10 + 20;
let divisao = 200 / 5;
let exponencial = 2 ** 3;
let subtracao = 10 - 5;
let resto = 10 % 3;

/*Aula 4 - Numeros e Operadores 2*/
let total = 10 + 5 * 2 / 2 + 20;
console.log(total);
let notANumber1 = isNaN("23s" + 5);
console.log(notANumber1);
let stringSoma = '200'
console.log(+stringSoma + 50);
let numero = 5;
console.log(++numero);
let numeroKilos = "80";
let unidade = "kg";
let peso = +numeroKilos / 2 + unidade;
console.log(peso);
console.log(typeof peso);

/*Aula 5 - Boolean e Condicionais*/
let possuiGraduacao = false;
let possuiDoutorado = true;
if (possuiGraduacao) {
    console.log("Possui graduacao");
} else if (possuiDoutorado) {
    console.log("Possui Doutorado");
} else {
    console.log("Não possui nada");
}


/* Aula 9 - Funções - Exercícios*/
function areaQuadrado(lado) {
    let perimetro = 4 * lado;
    return perimetro;
}

function funcaoNomeCompleto(nome, sobrenome) {
    return `${nome}` + ` ${sobrenome}`
}

function ehPar(numero) {
    if (numero % 2 === 0) {
        return "É par."
    } else {
        return "ímpar."
    }
}

function tipoDado(dado) {
    return typeof dado;
}

addEventListener("scroll", () => {
    console.log("Voller Silas Lourenço de Carvalho.");
})

console.log(areaQuadrado(2));
console.log(funcaoNomeCompleto("Voller", "Silas"));
console.log(ehPar(5));
console.log(tipoDado("lourenço"))

/* Aula 11 - Objetos2 - exercício */
const dadosPessoais = {
    idade: 28,
    nome: "voller",
    sobrenome: "Silas",
    nomeCompleto() {
        console.log('Nome+sobrenome', nome + sobrenome);
    }
}

let carro = {
    preco: 1000,
    porta: 4,
    carro: "audi"
}

let labrador = {
    cor: "Preto",
    idade: 10,
    late() {
        console.log('auau');
    }
}

carro.preco = 3000;

console.log(dadosPessoais);
console.log(dadosPessoais.nomeCompleto());
console.log(carro);

/*Aula 12 - Tudo é objeto*/
//Exercício
const nome12 = "Rafael Andrade";
//toString(),toUppercase(),trim()
let btn = document.querySelector('.btn');
//appendChild(),append(),animate()
let copyText = document.querySelector('.inputCopy');
console.log(copyText.value);

/*Aula 20 - Arrays e loops 1*/
let videoGames = ['switch', 'xbox360', "ps4", 'ps5'];
videoGames.push('atari');
videoGames.pop();
console.log(videoGames);

for (let i = 0; i <= 100; i++) {
    console.log(i);
}

for (let i = 0; i < videoGames.length; i++) {
    if (videoGames[i] === "ps4") {
        break
    }
    console.log(videoGames[i])
}

// 
//O foreach percorre o array disparando uma função
// para cada elemento do array.Muito utilizado no projeto.

videoGames.forEach((item) => {
    console.log("item Foreach", item)
})

//Exercício
let arrayBrasil = [1959, 1962, 1970, 1994, 2002];
arrayBrasil.forEach((copa) => {
    console.log(`O Brasil ganhou a copa de ${copa}`);
});

let frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];
for (let i = 0; i < frutas.length; i++) {
    if (frutas[i] === "Pera") {
        break;
    }
    console.log(frutas[i]);
}

let ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta, frutas);

//Aula-0209 Atribuição e ternário
//Exercícios
let scroll = 1000;
scroll += 500
console.log(scroll);

let possuiCarro = true;
let possuiCasa = true;
let darCredito = (possuiCarro && possuiCasa) ? "Dar crédito" : "Negar crédito";
console.log(darCredito);

//Aula-210-Escopo
let entraIf = true;
if (entraIf) {
    let carroIf = "mustang";
    console.log(carro);
}
//console.log("fora do if", carroIf);

const data = {
    ano: 2018,
    casa: "Rosa",
}

data.ano = 2002;
//data = "Olá"
//Exercício
// Por qual motivo o código abaixo retorna com erros?
/*O código abaixo dá erro porque as variáveis marca e porta
são let e const,portanto não vazam o escopo e não dá pra serem
acessadas fora dele.
*/
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
}
//console.log(cor, marca, portas);

// Como corrigir o erro abaixo?
/**/
let dois = 2;
function somarDois(x) {
    const dois = 2;
    return x + dois;
}
function dividirDois(x) {
    return x / dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));

// O que fazer para total retornar 500?
let numeroExercicio = 50;

for (let numeroExercicio = 0; numeroExercicio < 10; numeroExercicio++) {
    console.log(numeroExercicio);
}

let totalExercicio = 10 * numeroExercicio;
console.log(totalExercicio);