/*
TERNARY - sutrumpintas if'as
jam yra butinos "true" ir "false" dalys
struktura:
klausimas ? jei tiesa : jei ne tiesa
*/

const amzius1 = 14;
const cenzas = 18;

const arIleisti = amzius1 >= cenzas ? true :false;
console.log('Ar ileisti:', arIleisti);

const arVyresnis = amzius1 >= cenzas ? 'vyresnis' : 'neVyresnis';
console.log('Ar  vyresnis:', arVyresnis);


const vartai = 'uzdaryti';

const suoPabego = vartai === 'atidaryti' ? 'suo pabego':'suo sedi kieme';
console.log('Kur suo? ', suoPabego);

console.log('----------------------------');
const ats = 0 > 4 ? 5 : 7;

console.log(ats);

const boo = false ? true ? 1 : 2 : 3;
/*
false 
    ? true 
        ? 1 
        : 2
    : 3;
*/
console.log(boo);
