/*
STRINGS
TEKSTINE REIKSME GALI BUTI INICIJUOTA:
- VIENA KABUTE

*/

const text1 = 'Labas rytas';
const text2 = "Labas rytas";

// ar viengubos ar dvigubos kabutes nera skirtumo, tik viengubom maziau darbo

const kabutes21 = "Viengubos kabutes (').";
const kabutes12 = 'Dvigubos kabutes (").';
const kabutes1 = 'Viengubos kabutes (\') ir dvigubos kabutes (").';
const kabutes2 = "Viengubos kabutes (') ir dvigubos kabutes (\").";
const kabutes1u = 'Viengubos kabutes (\') ir dvigubos kabutes (\").';
const kabutes2u = "Viengubos kabutes (\') ir dvigubos kabutes (\").";

console.log(kabutes1u);
console.log(kabutes2u);


// kiekvienoje teksto neuzbaigiancioje eiluteje dedamas multiline \
// backti


const imgSrc = './img/logo.png';

const HTML = '<header>\
                <img src="' + imgSrc + '" alt="Logo" class="logo">\
                <nav>\
                    <a href="#">Link</a>\
                    <a href="#">Link</a>\
                    <a href="#">Link</a>\
                    <a href="#">Link</a>\
                </nav>\
             </header>';
console.log(HTML);

const home = ['./home', 'Home page'];

const HTMLback = `<header>
                    <img src="${imgSrc}" alt="Logo" class="logo">
                    <nav>
                        <a href="${home[0]}">${home[1]}</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                    </nav>
                </header>`;
console.log(HTMLback);


    