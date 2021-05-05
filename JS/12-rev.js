/*
REVERSE STRING



*/

const tekstas = 'skrenda';
let reverse = ' ';

for (let i = tekstas.length - 1; i >=0; i--) {
    reverse += tekstas[i];
    }
    console.log(tekstas, '->', reverse);
    console.log(tekstas.length);

console.log('-------------------------------');

let atsakymas = '';   
for (let i = 0; i < tekstas.length; i++) {
    atsakymas = tekstas[i] + atsakymas;
        }
    console.log(tekstas, '->', atsakymas);

console.log('-------------------------------');
let paukstis = [];

for (let i = 0; i < tekstas.length; i++) {
    paukstis.push(tekstas[i]);
            }
    console.log(paukstis);
paukstis = paukstis.reverse();
console.log(paukstis);
console.log(paukstis.join(''));

console.log('-------------------------------');
paukstis = [];
for (let i = tekstas.length - 1; i >= 0; i--) {
    paukstis.push(tekstas[i]);
    }
console.log(paukstis);
console.log(paukstis.join(''));
