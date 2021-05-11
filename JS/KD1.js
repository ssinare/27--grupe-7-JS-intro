/*
You will be given an array a and a value x. All you need to do is 
check whether the provided array contains the value.
Array can contain numbers or strings. X can be either.
Return true if the array contains the value, false if not.
https://www.codewars.com/kata/57cc975ed542d3148f00015b

*/
  //einu per sarasa (a)
    //paimu saraso nari
    //jei saraso narys lygus ieskomai reiksmei (x)
        //grazinti rezultata true
  //grazinti false
function check(a, x) {
  for (let i = 0; i <= a.length; i++) {
      if (a[i] == x) {
          console.log(true);
          console.log(a[i], '->', x);
        return true;
      } 
  }
   return false;
  } 
  


/*
    
function check(a, x) {
  for(let i=0; i<a.length; i++ ){
    const lego = a[i]; 
    if(lego == x) {
           return true
    }
  } 
  return false;
}

*/

console.log(check([66, 101]), 6, '->', false);
console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 80)); 
console.log(check(['t', 'e', 's', 't'], 5)); 


console.log(check(['KAT', 'a', 'great', 'kata'], 'kat'), '->', false);
