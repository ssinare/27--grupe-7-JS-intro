



var a= 'x';
var b= 15;

function daugyba(a, b) {
//validacija

if (typeof a !== "number") {
    return 'ERORR: pirma reiksme nera skaiciaus tipo'; 

}
if (typeof b !== "number") {
    return 'ERORR: antra reiksme nera skaiciaus tipo'; 
}
//if (isNaN(a))

if ('' + b === 'NaN') {
    return 'ERORR: antra reiksme nera skaiciaus tipo';   
// console.log(salyga, '->', atsakymas );
}
// logika
const sandauga = a * b;
// grazinti rezultata
return sandauga;

}
if (isFinite(a) === false) {
    return 'ERORR: pirma reiksme nera skaiciaus tipo';  
}
if (isFinite(b) === false) {
    return 'ERORR: antra reiksme nera skaiciaus tipo';  
}
console.log(sandauga(2, 4),'->',8 );





console.log(sandauga("Labas",15));
console.log(daugyba(-10,5));
console.log(daugyba(Infinity,5));
console.log(daugyba(7,NaN));