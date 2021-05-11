/*
Keli skai2iai dalinasi be liekanos nurodytame inntrvale imtinai.
*/

const nuo = 0;
const iki = 11;
const daliklis = 3;
let kiekis = 0;

for (let i = nuo; i <= iki; i++); {
    console.log(i, '->', i % daliklis);
    // jeig, be liekanos
    if (i % daliklis === 0) {
//tai didiname kieki +1
        kiekis++;

    }


}
const ats = `Skaiciu intervale tarp ${nuo} ir ${iki}, besidalijanciu skaiciu be liekanos is ${daliklis} yra ${kiekis} vienetai.`;

console.log(ats);
