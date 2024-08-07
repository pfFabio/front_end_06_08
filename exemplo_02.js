
//um construtor pode ter uma caracteristica padrão, não precisando receber valores pra todas as variaveis
//o padrão de nacionalidade é "brasiliero"
function Pessoa(nome,idade,altura){
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this.nascionalidade = "brasileiro";
};

const aluno = new Pessoa("fábio",29,1.8)

console.log(aluno)
