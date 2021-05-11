/*
Create a function that takes 2 positive integers in form of a
string as an input, and outputs the sum (also as a string):
Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"
*/


function sumStr(a,b) {
  return (parseInt(a !== "" ? a : 0) + parseInt(b !== "" ? b : 0)).toString();
}


console.log(sumStr("","5")); //, "9");
console.log(sumStr("34","5"));//, "39");

function sumStr(a,b) {
    return String(Number(a)+Number(b));
  }



  function sumStr(a, b) {
    return ((parseInt(a) || 0) + (parseInt(b) || 0)).toString();
  }

  const sumStr = (i,j) => (+i) + (+j) + '';