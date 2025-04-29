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


// Aula-306 - Exercícios
// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImagem = document.querySelector('img');
console.log(primeiraImagem.offsetTop);


// Retorne a soma da largura de todas as imagens
function somaOnLoad() {
    const todasImagens = document.querySelectorAll('img');
    let somaLarguraImagens = 0;
    todasImagens.forEach((elemento) => {
        console.log(elemento.offsetWidth);
        somaLarguraImagens += Number(elemento.offsetWidth);
    })
    console.log(`Soma das larguras:${somaLarguraImagens} pixels.`);
};

window.onload = function () {
    somaOnLoad();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const linksPagina = document.querySelectorAll("a");

linksPagina.forEach((link) => {
    if (link.offsetWidth > '48px' && link.offsetHeight > '48px') {
        console.log("Link passou no teste do google.")
    } else {
        console.log("Link não passou no teste do google!!   ")
    }
});
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const menu = document.querySelector('.menu');
const small = window.matchMedia('(max-width:720px)');
if (small.matches) {
    menu.classList.add('menu-mobile');
}
*/

//Aula - 307 - Eventos - Exercícios
// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll("a");
function handleClick(event) {
    event.preventDefault();
    let linkClicado = event.target;
    linkCiclado.classList.add
};
addEventListener("click", handleClick);


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const bodySelect = document.querySelector('body *');
function handleClick(event) {
    console.log(event.target);
}
bodySelect.addEventListener("click", handleClick)

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
/*function handleClickRemove(event) {
    let element = event.target;
    element.remove();
}
bodySelect.addEventListener("click", handleClickRemove)*/

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
const textos = document.querySelectorAll("p");
function handleKeyT(event) {
    console.log(event);
    if (event.key === "t" && event.returnValeu === false) {
        textos.forEach((texto) => {
            texto.classList.add('texto-grande');
        })
    }
}

addEventListener("keydown", handleKeyT)