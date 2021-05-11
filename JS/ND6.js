/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s) {
    var words = s.split(' ');
    console.log(words);
    var shortest = words.reduce((shortestWord, currentWord) => {
      return currentWord.length < shortestWord.length ? currentWord : shortestWord;
    }, words[0]);
    return shortest.length;
  }
  console.log(findShort("The quick I brown fox jumped over the lazy dog"));








console.log(findShort("bitcoin take over the world maybe who knows or perhaps")); //, 3);
console.log(findShort("turns out random test cases are easier than writing out basic ones")); //, 3); 
console.log(findShort("Let's travel abroad shall we")); //, 2);


function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
  }

  function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}


function findShort(s){
    return s
      .split(' ')
      .map(a => a.length)
      .reduce((a, b) => Math.min(a, b))
  }



  function findShort(string) {
    var array = string.split(' ');
    var shortest = null;
    
    for (var i=0, l=array.length; i<l; ++i)
    {
      if (shortest == null || array[i].length < shortest)
        shortest = array[i].length;
    }
    
    return shortest;
  }