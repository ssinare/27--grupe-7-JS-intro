

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

console.log(-------------------------------);



console.log IntervaloPradzia = 'Intervalo pradzia';
const pradzia = [int];
console.log IntervaloPabaiga = 'Intervalo pabaiga';
const pabaiga = [int] pabaiga;

suma = 0;
laikasNuo = new Date(dateString);
$laikasNuo = Get-Date
for (let i = $pradzia; $i -le $pabaiga; $i++){
    $suma += $i
}
$laikasIki = Get-Date
laikasIki = new Date(dateString);
Write-Host "Skaciu intervale suma pirmu budu: $($suma)"
Write-Host "Skaiciavimas truko: $(New-TimeSpan -Start $laikasNuo -End $laikasIki)"
write-host

$suma = 0
$laikasNuo = Get-Date
$elementuSkacius = $pabaiga -  $pradzia
$elementuSkacius = [Math]::Abs($elementuSkacius) +1
$liekana = $elementuSkacius % 2

if($liekana -ne 0){
    $poruSkaicius = $elementuSkacius / 2 -0.5
    $vidurinisElementas = $pradzia + $poruSkaicius
}
else{
    $poruSkaicius = $elementuSkacius / 2 
    $vidurinisElementas = 0    
}

$suma = ($pradzia + $pabaiga) * $poruSkaicius + $vidurinisElementas
$laikasIki = Get-Date
Write-Host "Skaciu intervale suma antru budu: $($suma)"
Write-Host "Skaiciavimas truko: $(New-TimeSpan -Start $laikasNuo -End $laikasIki)"