/*
IF - salygos sakinys

uzklausos klausimas visada atsako i  "taip ar ne"?

reiksmes:
true
false

PALYGINIMO OPERATORIAI:
visi: >, <, ==, !=, <=, >=, ===, !==
nenaudotini: ==, !=
naudotini: >, <, <=, >=, ===, !==


SABLONAI:

if () {}
if () {} else {}
if () {} else if {}
if () {} else if {} ...  else if {}
if () {} else if {} ...  else if {} else {}

*/

const a = 4;
const b = 8;
if (a > b) {
    console.log('A yra daugiau uz B');
} else {
    console.log('A nera daugiau uz B');
}

if (4 == 4) {
    console.log('abu yra lygus');
    }

const akys = "raudonos";

if (akys === 'melynos') {
    console.log('akys yra melynos');
} 
else if (akys === 'zalios') {
    console.log('akys yra zalios');
}
else if (akys === 'rudos') {
    console.log('akys yra rudos');
}
else if (akys === 'raudonos') {
    console.log('akys yra raudonos. Tipo programeris???');
}
else {
    console.log('neatpazinta akiu spalva');
}