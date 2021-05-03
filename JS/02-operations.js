/*
<!-- JS: MATEMATINES OPERACIJOS: +, -, /, *, ()-->

*/


const pirmas = 20;
console.log(pirmas);
const antras = 8;
console.log(antras);
const trecias = -7;
console.log(trecias);

const gyvunas = 'gyvate';
console.log(gyvunas);
const medis = 'pusis';
console.log(medis);
const automobilis = 'skoda';
console.log(automobilis);

const aukstisMedziu = [7,9,8,5,2];
console.log(aukstisMedziu);
const gatvesNmumeriai = [8,11,5,7,4];
console.log(gatvesNmumeriai);
const kaimynuAmzius = [81,57,94,12,6];
console.log(kaimynuAmzius);

const baldai = ['kede','stalas', 'lova', 'spinta', 'laiptai'];
console.log(baldai);
console.log('Mano namuose stovi '+baldai.join(', '));
const kaimynai = ['Petras', 'Jonas','Stasys', 'Antanas', 'Gerda'];
console.log(kaimynai);
const gyvunai = ['zebras', 'zirgas', 'arklys', 'bezdzione', 'begemots'];
console.log(gyvunai);


const suma = pirmas + antras + trecias;
console.log("suma lygu", suma);


const zodziuReiksme = gyvunas+' '+medis+' '+automobilis;
console.log(zodziuReiksme);

const medziuIlgis = aukstisMedziu[0] - aukstisMedziu[1] + aukstisMedziu[2] - aukstisMedziu[3] + aukstisMedziu[4];
console.log(medziuIlgis);

const reversed = kaimynai.reverse();
console.log(reversed.join(', '));


const eiliskumas = gyvunai.reverse();
console.log(eiliskumas.join(', '));


if (pirmas > antras) { 
    console.log('Pomidoras');
  } else {  
    console.log('Bandykite kitą kartą');
  }

  if (pirmas < antras) { 
    console.log('Pomidoras');
  } else {  
    console.log('Bandykite kitą kartą');
    }

if (pirmas == antras) { 
    console.log('Pomidoras');
} else {  
    console.log('Bandykite kitą kartą');
}

if (pirmas != antras) { 
    console.log('Pomidoras');
  } else {  
    console.log('Bandykite kitą kartą');
    }

if (pirmas >= antras) { 
    console.log('Pomidoras');
    } else {  
    console.log('Bandykite kitą kartą');
    }

if (pirmas <= antras) { 
    console.log('Pomidoras');
    } else {  
    console.log('Bandykite kitą kartą');
    }

   
    













