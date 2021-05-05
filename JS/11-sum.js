

/*
skaiciu suma intervale
*/



const nuo= 0;
const iki = 4;
let sumaa= 0;

for (let i = nuo; i <= iki; i++) {
 //   sumaa += i;
    sumaa = sumaa + i;
   // console.log(i, '->', sumaa);
}
console.log(`Intervale nuo ${nuo} iki ${iki} suma yra ${sumaa}.`);
console.log('Intervale nuo ' + nuo + ' iki ' + iki + ' suma yra ' + sumaa + '.');

const nuoo = 0;
const ikii = 100;
let sumaaa = 0;
console.log('Pradedu');
for (let i = nuoo; i <= ikii; i++) {
    sumaaa += i;
    console.log(i, '->', sumaaa);
}

console.log(`Intervale nuo ${nuoo} iki ${ikii} suma yra ${sumaaa}.`);

sumaaa = 0;
console.log('Pradedu');
for (let i = ikii; i >= nuoo; i--) {
    sumaaa += i;
    console.log(i, '->', sumaaa);   
}

console.log(`Intervale nuo ${nuoo} iki ${ikii} suma yra ${sumaaa}.`);

