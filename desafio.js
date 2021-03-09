let valor = 1999;
var notasDeCem = notasDeCem();
var notasDeCinquenta = notasDeCinquenta();
var notasDeVinte = notasDeVinte();
var notasDeDez = notasDeDez();
var notasDeCinco = notasDeCinco();
var notasDeDois = notasDeDois();
var notasDeUm = notasDeUm();


console.log(valor);
console.log(`${notasDeCem} nota(s) de R$100,00`);
console.log(`${notasDeCinquenta} nota(s) de R$50,00`);
console.log(`${notasDeVinte} nota(s) de R$20,00`);
console.log(`${notasDeDez} nota(s) de R$10,00`);
console.log(`${notasDeCinco} nota(s) de R$5,00`);
console.log(`${notasDeDois} nota(s) de R$2,00`);
console.log(`${notasDeUm} nota(s) de R$1,00`);



function notasDeCem() {
  return Math.floor(valor/100);
}

function notasDeCinquenta() {
  return Math.floor((valor - (notasDeCem*100))/50);
}

function notasDeVinte() {
  return Math.floor((valor-(notasDeCem*100)-(notasDeCinquenta*50))/20);
}

function notasDeDez() {
  return Math.floor((valor-(notasDeCem*100)-(notasDeCinquenta*50)-(notasDeVinte*20))/10);
}

function notasDeCinco() {
  return Math.floor((valor-(notasDeCem*100)-(notasDeCinquenta*50)-(notasDeVinte*20)-(notasDeDez*10))/5);
}

function notasDeDois() {
  return Math.floor((valor-(notasDeCem*100)-(notasDeCinquenta*50)-(notasDeVinte*20)-(notasDeDez*10)-(notasDeCinco*5))/2);
}

function notasDeUm() {
  return Math.floor((valor-(notasDeCem*100)-(notasDeCinquenta*50)-(notasDeVinte*20)-(notasDeDez*10)-(notasDeCinco*5)-notasDeDois*2));
}

