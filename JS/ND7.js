/* 
A pangram is a sentence that contains every single letter of the alphabet
 at least once. For example, the sentence "The quick brown fox jumps over
  the lazy dog" is a pangram, because it uses the letters A-Z at least once 
  (case is irrelevant).
Given a string, detect whether or not it is a pangram. Return True if it is,
 False if not. Ignore numbers and punctuation.
 */

function isPangram(string){
  let abc = "abcdefghijklmnopqrstuvwxyz";
  console.log(abc);
  string = string.toLowerCase();
  console.log(string);
  newString = string.replace(/[^a-z]/ig,'');
  console.log(newString);
  console.log(abc.length);
  for (var i = 0; i < abc.length; i++) {
    console.log(abc.substr(i,1));
    if (newString.includes(abc.substr(i,1))){
      abc = abc.replace(abc.substr(i,1), '');
      i--;
      console.log(abc); 
    }   
  } 
  return abc.length == 0 ? true : false;
  }

  


console.log(isPangram("The quick brown fox jumps over the lazy dog"));
console.log(isPangram("This is not a pangram."));



function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
}



function isPangram(string){
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((x) => string.toLowerCase().includes(x));
}


function isPangram(string) {
  return new Set(string.toLocaleLowerCase().replace(/[^a-z]/gi, '').split('')).size === 26;
}