var nome = "qualquer coisa";
var a = 10;
var b = 10;

const x = function Soma(a,b){
    return a + b;
};

console.log(x('2',2));


//construtor define o molde para cria um objeto, nesse caso a pessoa
function Pessoa(nome, idade, altura){
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
};

//usando o construtor criamos a pessoa primo, usar a palavra "new"
const primo = new Pessoa("Primo", 18, 1.7);

console.log(primo);