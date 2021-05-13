/*
https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript
Find the missing letter
Write a method that takes an array of consecutive (increasing) letters as 
input and that returns the missing letter in the array.
You will always get an valid array. And it will be always exactly one letter 
be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.
Example:
['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'
["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"
*/

function findMissingLetter(array)
{
  let abc = "abcdefghijklmnopqrstuvwxyz";
  if (abc.indexOf(array[0]) == -1){
    abc = abc.toUpperCase();
  }
  let i = abc.indexOf(array[0]) +1;
  console.log(i);
  for(j = 1; array.length - 1; j++){
    if (array[j] == abc.substr(i,1)) {
      i++;
    }
    else {
      return abc.substr(i,1);
    }
  }

  
 }



console.log(findMissingLetter(['a','b','c','d','f']));//, 'e');
console.log(findMissingLetter(['O','Q','R','S']));//, 'P');

function findMissingLetter(array) {
  let first = array[0].charCodeAt(0)
  for (let i = 1; i < array.length; i++) {
    if (first + i !== array[i].charCodeAt(0)) {
      return String.fromCharCode(first + i)
    }
  }
  throw new Error("Invalid input")
}

function findMissingLetter(array)
{
   var i=array[0].charCodeAt();
   array.map(x=>  x.charCodeAt()==i?i++:i);
   return String.fromCharCode(i);
}


const findMissingLetter = (array) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const start = alphabet.indexOf(array[0]);
  return alphabet.slice(start, start + array.length).find(el => !array.includes(el));
};

function findMissingLetter(array)

{
  let i = array[0].charCodeAt(0);
  return String.fromCharCode(array.find(el => el.charCodeAt(0) != i++).charCodeAt(0) - 1);
}
