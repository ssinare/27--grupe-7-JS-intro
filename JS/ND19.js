
/*

Write function RemoveExclamationMarks which removes
 all exclamation marks from a given string.

 */

 function removeExclamationMarks(s) {
  /*   var txt = s.split('');
     console.log(txt);
     for (var i = 0; i < txt.length; i++) {
        if (txt[i] == "!") {
            txt.splice(i,1);
            i--;
        }
  }
  return txt.join('');*/
  return s.replace(/\!/g, "");
}


console.log(removeExclamationMarks("Hello! World!!!"));

function removeExclamationMarks(s) {
    return s.replace(/!/gi, '');
  }

const removeExclamationMarks = s => s.replace(/!/g,"") ;
  