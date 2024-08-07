function Videogame(nome, hrs, preco){
    this.nome = nome;
    this.hrs = hrs;
    this.preco = preco;
};

const ACBF = {
    nome1: "Assassins Creed Black Flag",
    hrs1: 23,
    preco: 39.99
};

const ER = new Videogame("Elden Ring", 60, 59.99);

let{nome, hrs} = ER;

console.log(ER);
console.log(nome, hrs);

let{nome1, hrs1} = ACBF;

console.log(ACBF);
console.log(nome1, hrs1);


