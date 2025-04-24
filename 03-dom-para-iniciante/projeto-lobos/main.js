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