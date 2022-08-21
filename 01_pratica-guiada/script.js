// OPERADORES ARITMÉTICOS
console.log("OPERADORES ARITMÉTICOS");

let saldo;
saldo = 15;

saldo += 22.40;
console.log("soma", saldo);

saldo -= 12.34;
console.log("subtração", saldo);

saldo /= 3;
console.log("divisão", saldo);

saldo *= 3.42;
console.log("multiplicação", saldo);

saldo %= 3;
console.log("resto", saldo);


//PRECEDÊNCIA MATEMÁTICA
console.log("PRECEDÊNCIA MATEMÁTICA");

let multESoma1 = 2*2+2
console.log("primeira equação", multESoma1);

let multESoma2 = 2*(2+2)
console.log("segunda equação", multESoma2);


//IGUAL E DIFERENTE
console.log("IGUAL E DIFERENTE");

const resultado1 = 5 === 5
console.log("R1", resultado1);

const resultado2 = 5 !== 5
console.log("R2", resultado2);

const resultado3 = 5 !== '5'
console.log("R3", resultado3);

const resultado4 = '5' === 'cinco'
console.log("R4", resultado4);

const resultado5 = typeof 5 === typeof 20
console.log("R5", resultado5);

const resultado6 = typeof '5' === typeof 'cinco'
console.log("R6", resultado6);


//MENOR E MAIOR (OU IGUAL)
console.log("MENOR E MAIOR (OU IGUAL)");

const primeiroNum = 5;
const segundoNum = 2;
console.log("O primeiro número é igual ao segundo número?", primeiroNum === segundoNum);
console.log("O primeiro número é menor ou igual ao segundo número?", primeiroNum <= segundoNum);
console.log("O primeiro número é maior que o segundo número?", primeiroNum > segundoNum);
console.log("O primeiro número é menor que o segundo número?", primeiroNum < segundoNum);

//LÓGICA DE PROGRAMAÇÃO
// const a = "Quero dirigir um Celta 2012";
// const b = "Sou maior de idade";
// const c = "Consigo comprar o Celta por 22.000 reais";
// const d = "Consigo alugar o Celta";
// const e = "Tenho carteira de motorista";

// Quero dirigir um Celta 2012
// Não sou maior de idade
// Sou maior de idade e não tenho carteira de motorista
// Sou maior de idade e consigo comprar ou alugar o celta
// Sou maior de idade e tenho carteira de motorista, mas não quero dirigir o Celta 
// a
// !b
// b && !e
// b && (c || d)
// (b && e) && !a
