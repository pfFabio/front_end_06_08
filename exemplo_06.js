// I - a palavra reservad function
// II - nome da função - mult
// III - o parametros da função
// IV - retorna da função com a lógica e a palavra reservada return que joga a lógica da função ou processamento para fora
function mult(a,b){
    return a*b;
};

// V - invocação da função


console.log(mult(2,3));
// VI - criando uma função anonima em formato arrow
const multi = (c,d)=>{
    return c*d
};

multi(3,3);
console.log(multi);