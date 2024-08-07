
//declarando funções dentro de uma classe,  2 exemplos
const pessoa = {
    nome: "fabricio",
    idade: 30,
    genero: "M",
    saudacao: function(){
        console.log("olá");
    },
    saudacao2: function (){
        return "ola";
    }
}


//a pessoa pode fazer uma saudação
pessoa.saudacao()

console.log(pessoa.saudacao2())