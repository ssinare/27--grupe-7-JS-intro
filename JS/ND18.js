/*
Write a function called repeatStr which repeats the given 
string string exactly n times.
repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/

function repeatStr (n, s) {
    let repeat = ('');
    for (let i = 0; i < n; i++) {
        repeat += s;
    }
    return repeat;
  }


  console.log(repeatStr(8, "pats"));//, "***");
  console.log(repeatStr(5, "#"));//, "#####");
  console.log(repeatStr(2, "ha "));//, "ha ha ");

  function repeatStr (n, s) {
    return s.repeat(n);
  }

  const repeatStr = (n,s) => s.repeat(n) ;

  function repeatStr (n, s) {
    String.prototype.repeat = function(n) {
       return (new Array(n + 1)).join(this);
    };
    return s.repeat(n);
  }