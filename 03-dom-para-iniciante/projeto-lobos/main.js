/*
//Aula 0302 - Seleção-de-elementos-1-e-2
const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const linksInternos = document.querySelectorAll(".titulo");
console.log(linksInternos);
console.log("Primeiro título");
console.log(linksInternos[0]);

const ulsInternas = document.querySelectorAll("ul");
console.log(ulsInternas);

ulsInternas.forEach((item) => {
    console.log(item);
})

//Exercícios 0303-Seleção-de-Elementos-2
const imagens = document.querySelectorAll("img");
console.log(imagens);

// Aula-304-Foreach-e-arrow-function
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos);
let i = 0;
paragrafos.forEach((item) => {
    i++;
    console.log(`${item} ${i}`);
})

//Aula-304-exercicios
const paragrafosE = document.querySelectorAll('p');
paragrafosE.forEach((item) => {
    console.log(item);
    console.log(item.innerText);
});


//Aula-3050-Classes-e-atributos
const titulos = document.querySelectorAll("h1");
console.log(titulos);
titulos[0].classList.add("verde", "azul");
titulos[0].classList.remove("azul");

const img = document.querySelector('img');
img.getAttribute("src");
img.setAttribute("alt", "imagem do lobo");
console.log(img.classList);

//Aula-305 - Exercícios
// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll(".menu li");
menu.forEach((item) => {
    item.classList.add("ativo");
})
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach((item, index) => {
    if (index !== 0) {
        item.classList.remove("ativo");
    }
})
// Verifique se as imagens possuem o atributo alt
const imagens = document.querySelectorAll("img");
imagens.forEach((item) => {
    if (item.hasAttribute("alt")) {
        console.log(`${item} tem alt`);
    }
})

// Modifique o href do link externo no menu
const ultimoUl = document.querySelector("a[href^=https]");

ultimoUl.setAttribute("href", "https://www.google.com.br");
console.log(ultimoUl);
*/