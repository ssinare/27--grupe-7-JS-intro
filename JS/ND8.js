/* Move the first letter of each word to the end of it, 
then add "ay" to the end of the word. Leave punctuation marks untouched.
*/

function pigIt(str){
    let words = str.split(' ');
    var newWords = [];
    var newWord = "";
    words.forEach(function(word){
        if (word !== "!" && word !== "?" ){
            let letters = word.split('');
            letters.push(letters.shift() + "ay");
            newWord = letters.join('');    
            newWords.push(newWord);
        }
        else{
            newWords.push(word);
        }
        
    });
    newWords = newWords.join(' ');
    return newWords;   
}


console.log(pigIt('Pig latin is cool ?')); //,'igPay atinlay siay oolcay')
console.log(pigIt('This is my string !')); //,'hisTay siay ymay tringsay')


function pigIt(str){
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
  }

function pigIt(str) {
    return str.replace(/\w+/g, (w) => {
      return w.slice(1) + w[0] + 'ay';
    });
  }

function pigIt(str) {
    var arrayWord = str.split(' ');
    return arrayWord.map(function(word) {
      var firstLetter = word.charAt(0);
      return word.slice(1) + firstLetter + 'ay';
    }).join(' ');
  }
