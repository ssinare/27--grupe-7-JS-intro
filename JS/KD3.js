/*
Given two integer arrays a, b, both of length >= 1, create a program that returns
 true if the sum of the squares of each element in a is strictly greater than 
 the sum of the cubes of each element in b.
  */

 function arrayMadness(a, b) {
     let kvadrSum = 0;
     let kubSum = 0;
    if ( a.length >= 1 && b.length >= 1 ) {
        for (let i = 0; i < a.length; i++) {           
           kvadrSum += a[i] * a[i];
        }
        for (let i = 0; i < b.length; i++) {           
            kubSum += b[i] * b[i] * b[i];
         }
        if ( kvadrSum > kubSum) {
            return true
        }
            else {
                return false
            }
    }
  }
console.log( "---------------------------------------" );

  function arrayMadness(a, b) {
    return a.reduce( (sum, el) => sum + el ** 2, 0) >
           b.reduce( (sum, el) => sum + el ** 3, 0);
  }

console.log( "---------------------------------------" );

const arrayMadness = (a, b) => a.reduce((acc, x) => acc + x**2, 0) > b.reduce((acc, x) => acc + x**3, 0);

    console.log(arrayMadness([4,5,6],[1,2,3]), true);
    console.log(arrayMadness([5,6,7],[4,5,6]), false);
    console.log(arrayMadness([4,5,6],[3,4,5]), false);
    console.log(arrayMadness([3,4,5],[2,3,4]), false);
    console.log(arrayMadness([2,3,4],[1,2,3]), false);
    console.log(arrayMadness([1,2,3],[0,1,2]), true);
    console.log(arrayMadness([5,3,2,4,1],[15]), false);


const arrayMadness = (A, b) => A.map(e => e**2).reduce((e,c) => e + c) > b.map(e => e**3).reduce((e,c) => e + c)
    
   

