
/*
Given 2 strings, a and b, return a string of the form:
 shorter+reverse(longer)+shorter.
In other words, the shortest string has to be put as 
prefix and as suffix of the reverse of the longest.
Strings a and b may be empty, but not null (In C# strings may also be null.
     Treat them as if they are empty.).
If a and b have the same length treat a as the longer
 producing b+reverse(a)+b
 https://www.codewars.com/kata/54557d61126a00423b000a45/train/javascript
*/

function shorter_reverse_longer(a,b){
   var short = '';
   var long = '';
    if (a.length >= b.length) {
      short = b;
      long = a;
    }
    else {
        long = b;
        short = a;
    }
    var reverse = '';
    for (let i = long.length - 1; i >= 0 ; i--){
        reverse += long.substr(i,1);
    }
   
    return short + reverse + short;
  }



 console.log(shorter_reverse_longer("mama", "tetis")); //, "abcdetsrifabcde");
 console.log(shorter_reverse_longer("hello", "bau")); //, "bauollehbau");
 console.log(shorter_reverse_longer("abcde", "fghi")); //, "fghiedcbafghi");


 function shorter_reverse_longer(a,b){
    return a.length >= b.length ? b + a.split('').reverse().join('') + b :
    a + b.split('').reverse().join('') + a;
  }

  function shorter_reverse_longer(a,b){
    if (a.length >= b.length) [a,b] = [b,a];
    return a + b.split('').reverse().join('') + a;
  }