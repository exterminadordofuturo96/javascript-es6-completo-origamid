//Aula-0401-Constructor function - Exercícios
// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
    nome: 'Nome pessoa',
    idade: 0,
    andar() {
        console.log(this.nome + ' andou');
    }
}
function Pessoa2(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.metodoAndar = () => {
        console.log(nome + " andou");
    }
}



// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const pessoaJoao = new Pessoa2("João", 20);
const pessoaMaria = new Pessoa2("Maria", 25);
const pessoaBruno = new Pessoa2("Bruno", 15);

console.log(pessoaJoao);
console.log(pessoaMaria);
console.log(pessoaBruno);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos
function listConstructor(seletor) {
    const elements = document.querySelectorAll(seletor);
    this.elements = elements;
    this.imprimiElement = () => {
        console.log(this.elements);
    };
    this.retornaNodeList = () => {
        return this.element;
    };
    this.addClassAll = () => {
        this.elements.forEach((item) => { item.classList.add("ativo") })
    };
    this.removeClassAll = () => {
        this.elements.forEach((item) => {
            if (item.classList.contains("ativo")) { item.classList.remove("ativo") }
        })
    }
}

const lista = new listConstructor("li");
lista.imprimiElement();
lista.addClassAll();
lista.removeClassAll();