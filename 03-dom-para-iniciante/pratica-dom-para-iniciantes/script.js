//Aula 0301 - O que é dom?
const h1Selecionado = document.querySelector(".titulo-principal");
h1Selecionado.addEventListener("click", () => {
    h1Selecionado.innerHTML = "Mudou titulo";
    h1Selecionado.style.color = "blue";
});

//exercício
console.log(window.location.href);
ativoSelecionado = document.querySelector(".ativo");
console.log(ativoSelecionado);

console.log(navigator.language);
console.log(window.innerWidth);